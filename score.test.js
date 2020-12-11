test('winner of a match receives 3 points', () => {
    const match = 'Falcons 3, Snakes 0';

    const scores = [];

    const split = match.split(', ');
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
    else {
        scores[(+firstScore > +secondScore) ? firstIndex : secondIndex].points += 3;
    }

    expect(scores[firstIndex].points).toBe(3);
});

test('both teams receive 1 Tournament point in a draw', () => {
    const match = 'Diamonds 3, Gophers 3';

    const scores = [];

    const split = match.split(', ');
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
    else {
        scores[(+firstScore > +secondScore) ? firstIndex : secondIndex].points += 3;
    }

    expect(scores[firstIndex].points).toBe(1);
    expect(scores[secondIndex].points).toBe(1);
});