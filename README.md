Adding files to GIT
git add .
git commit -m "Initial commit"
git push -u origin main

How to see the votes in CLI of Vercel:
GET votes

##How to reset the votes:
EVAL "local votes = cjson.decode(redis.call('GET', 'votes') or '{}'); for k,v in pairs(votes) do votes[k] = {painVotes=0, mehVotes=0} end; redis.call('SET', 'votes', cjson.encode(votes)); return 'OK'" 0

sm