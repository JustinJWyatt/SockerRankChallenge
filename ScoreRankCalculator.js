const ScoreRankCalculator = function(fileName) {
    const scores = [];
    return {
        calculate: () => {
            require('line-reader').eachLine(fileName, (line, last) => {
                const split = line.split(', ');
                const first = split[0];
                const second = split[1];
            
                const firstTeam = first.split(' ')[0];
                const firstScore = first.split(' ')[1];
            
                const secondTeam = second.split(' ')[0];
                const secondScore = second.split(' ')[1];
            
                if (!scores.find(x => x.team === firstTeam))
                    scores.push({ team: firstTeam, points: 0, rank: null });
            
                if (!scores.find(x => x.team === secondTeam))
                    scores.push({ team: secondTeam, points: 0, rank: null });
            
                const firstIndex = scores.findIndex(x => x.team === firstTeam);
                const secondIndex = scores.findIndex(x => x.team === secondTeam);
            
                if (+firstScore === +secondScore) {
                    scores[firstIndex].points += 1;
                    scores[secondIndex].points += 1;
                } 
                else if (+firstScore > +secondScore) 
                    scores[firstIndex].points += 3;
                else
                    scores[secondIndex].points += 3;
                if (last) {
                    scores.sort((a, b) => b.points - a.points || a.team.localeCompare(b.team));
                    scores.map((x, i, arr) => {
                        x.rank = i + 1;
                        if (arr.some(y => y.points === x.points))
                            x.rank = arr.find(y => y.points === x.points).rank;
                        console.log(`${x.rank}. ${x.team} ${x.points}`);
                    });
                }
            });
        }
    };
};

module.exports = ScoreRankCalculator;