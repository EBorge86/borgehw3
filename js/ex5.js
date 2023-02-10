const password = "secret"
let PasswordInput = prompt("Enter your password");
let counter = 0;
while (PasswordInput != password && ++counter < 3) {
  PasswordInput = prompt("Enter your password")
}
if (counter == 3) {
  alert('Your account is locked! You failed to enter the correct password 3 times')
}
else {
  alert('You entered the correct password after ${counter} attempt(s)')
}