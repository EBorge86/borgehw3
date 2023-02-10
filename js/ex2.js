var NameEntered = prompt("Whats is your name?");
var GradeStanding = prompt("How many units of college have you completed?")
if ((GradeStanding >= 0) && (GradeStanding <= 30)) {
  console.log(`Hello ${NameEntered}
Your grade standing is Freshman`)
}
else if ((GradeStanding >= 31) && (GradeStanding <= 60)) {
  console.log(`Hello ${NameEntered}
Your grade standing is Sophomore`)
}
else if ((GradeStanding >= 61) && (GradeStanding <= 90)) {
  console.log(`Hello ${NameEntered}
Your grade standing is Junior`)
}
else if (GradeStanding >= 91) {
  console.log(`Hello ${NameEntered}
Your grade standing is Senior`)
}