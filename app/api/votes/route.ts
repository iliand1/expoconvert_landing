import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

interface VoteData {
  [challengeId: number]: {
    painVotes: number;
    mehVotes: number;
  };
}

type VoteType = 'pain' | 'meh';

// Cache votes in memory with 1-minute TTL
let votesCache: VoteData | null = null;
let lastCacheTime = 0;
const CACHE_TTL = 60 * 1000; // 1 minute

async function getVotes(): Promise<VoteData> {
  // Return cached data if available and fresh
  if (votesCache && (Date.now() - lastCacheTime) < CACHE_TTL) {
    return votesCache;
  }

  try {
    // Use Promise.race for timeout
    const timeoutPromise = new Promise<VoteData>((_, reject) => {
      setTimeout(() => reject(new Error('Timeout')), 3000);
    });

    const votes = await Promise.race([
      kv.get<VoteData>('votes'),
      timeoutPromise
    ]);

    // Update cache
    votesCache = votes || {};
    lastCacheTime = Date.now();
    
    return votesCache;
  } catch (error) {
    // Return cached data if available, empty object if not
    return votesCache || {};
  }
}

async function saveVotes(votes: VoteData) {
  try {
    await kv.set('votes', votes);
    // Update cache after successful save
    votesCache = votes;
    lastCacheTime = Date.now();
  } catch (error) {
    throw new Error('Failed to save votes');
  }
}

export async function GET() {
  const votes = await getVotes();
  return NextResponse.json(votes);
}

export async function POST(request: Request) {
  try {
    const { challengeId, voteType } = await request.json();
    
    if (voteType !== 'pain' && voteType !== 'meh') {
      return NextResponse.json({ error: 'Invalid vote type' }, { status: 400 });
    }

    const votes = await getVotes();
    votes[challengeId] = votes[challengeId] || { painVotes: 0, mehVotes: 0 };
    votes[challengeId][`${voteType}Votes` as `${VoteType}Votes`]++;

    await saveVotes(votes);
    return NextResponse.json(votes[challengeId]);
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process vote' }, 
      { status: 500 }
    );
  }
}