import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { AlertTriangle, Ban, MessageSquare, Target, Search, Clock, UserX, Meh, PhoneOff, TrendingDown } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  painVotes: number;
  mehVotes: number;
}

const initialChallengeCards: Challenge[] = [
  { id: 1, title: "Unclear how to choose and learn the optimal Tech stack", icon: AlertTriangle, iconColor: "text-yellow-500", painVotes: 0, mehVotes: 0 },
  { id: 2, title: "Difficult to track multiple campaigns", icon: Target, iconColor: "text-blue-500", painVotes: 0, mehVotes: 0 },
  { id: 3, title: "Accounts get banned", icon: Ban, iconColor: "text-red-500", painVotes: 0, mehVotes: 0 },
  { id: 4, title: "Your texts are perceived as spam", icon: MessageSquare, iconColor: "text-purple-500", painVotes: 0, mehVotes: 0 },
  { id: 5, title: "Manual sending of invites is time-consuming", icon: Clock, iconColor: "text-orange-500", painVotes: 0, mehVotes: 0 },
  { id: 6, title: "People don't connect", icon: UserX, iconColor: "text-pink-500", painVotes: 0, mehVotes: 0 },
  { id: 7, title: "People don't respond", icon: Meh, iconColor: "text-indigo-500", painVotes: 0, mehVotes: 0 },
  { id: 8, title: "Can't get leads on a call", icon: PhoneOff, iconColor: "text-teal-500", painVotes: 0, mehVotes: 0 },
  { id: 9, title: "Difficult to achieve lead volume due to LinkedIn limitations", icon: TrendingDown, iconColor: "text-cyan-500", painVotes: 0, mehVotes: 0 },
];

const ProblemCards: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallengeCards);
  const [votedChallenges, setVotedChallenges] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedVotes = localStorage.getItem('votedChallenges');
    if (storedVotes) {
      setVotedChallenges(new Set(JSON.parse(storedVotes)));
    }

    const fetchVotes = async () => {
      try {
        const response = await fetch('/api/votes');
        if (!response.ok) {
          throw new Error('Failed to fetch votes');
        }
        const votes = await response.json();
        
        setChallenges(prevChallenges =>
          prevChallenges.map(challenge => ({
            ...challenge,
            painVotes: votes[challenge.id]?.painVotes || 0,
            mehVotes: votes[challenge.id]?.mehVotes || 0,
          }))
        );
      } catch (err) {
        setError('Failed to load votes');
      }
    };

    fetchVotes();
  }, []);

  const handleVote = async (challengeId: number, voteType: 'pain' | 'meh') => {
    if (votedChallenges.has(challengeId)) return;

    try {
      const response = await fetch('/api/votes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ challengeId, voteType }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit vote');
      }

      const updatedVotes = await response.json();

      setChallenges(prevChallenges =>
        prevChallenges.map(challenge =>
          challenge.id === challengeId
            ? { ...challenge, ...updatedVotes }
            : challenge
        )
      );

      setVotedChallenges(prevVoted => {
        const newVoted = new Set(prevVoted).add(challengeId);
        localStorage.setItem('votedChallenges', JSON.stringify(Array.from(newVoted)));
        return newVoted;
      });
    } catch (err) {
      setError('Failed to submit vote. Please try again.');
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Search className="w-10 h-10 text-primary mr-4" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">Do you recognize your challenges?</h2>
        </div>
        {error && <div className="text-center text-red-500 mb-4">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="card hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-start mb-4">
                  <challenge.icon className={`w-12 h-12 ${challenge.iconColor} mr-3 flex-shrink-0`} />
                  <h3 className="text-lg font-semibold flex-grow">{challenge.title}</h3>
                </div>
                <div className="flex justify-between space-x-4 mt-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleVote(challenge.id, 'pain')}
                    disabled={votedChallenges.has(challenge.id)}
                    className={`flex-1 h-16 text-lg font-semibold ${votedChallenges.has(challenge.id) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-100 hover:text-red-600 transition-colors duration-300'}`}
                  >
                    <span className="flex flex-col items-center">
                      <span>😭 Pain!</span>
                      <span className="text-xl font-bold">{challenge.painVotes}</span>
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleVote(challenge.id, 'meh')}
                    disabled={votedChallenges.has(challenge.id)}
                    className={`flex-1 h-16 text-lg font-semibold ${votedChallenges.has(challenge.id) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-100 hover:text-yellow-600 transition-colors duration-300'}`}
                  >
                    <span className="flex flex-col items-center">
                      <span>😕 Meh</span>
                      <span className="text-xl font-bold">{challenge.mehVotes}</span>
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemCards;