const fileName = process.argv[2];
const ScoreRankCalculator = require('./ScoreRankCalculator');
const calculator = new ScoreRankCalculator(fileName);
calculator.calculate();