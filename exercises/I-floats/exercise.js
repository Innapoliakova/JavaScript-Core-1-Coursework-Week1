var numberOfStudents = 15;
var numberOfMentors = 8;
var procentageStudens = numberOfStudents / (numberOfMentors + numberOfStudents) * 100;
console.log(procentageStudens);
var procentageMentors = numberOfMentors / (numberOfMentors + numberOfStudents) * 100;
console.log(procentageMentors);
let procentageStudensRound = Math.round(procentageStudens);
console.log(procentageStudensRound);
let procentageMentorsRound = Math.round(procentageMentors);
console.log(procentageMentorsRound);
