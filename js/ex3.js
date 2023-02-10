const DayEntered = prompt("What day of the week is it (3 letter format in lowercase)?");
switch (DayEntered) {
  case "mon":
    console.log(`You Entered: ${DayEntered}
    The following day is: tue`);
    break;
  case "tue":
    console.log(`You Entered: ${DayEntered}
    The following day is: wed`);
    break;
  case "wed":
    console.log(`You Entered: ${DayEntered}
    The following day is: thu`);
    break;
  case "thu":
    console.log(`You Entered: ${DayEntered}
    The following day is: fri`);
    break;
    case "fri":
      console.log(`You Entered: ${DayEntered}
      The following day is: sat`);
    break;
    case "sat":
      console.log(`You Entered: ${DayEntered}
      The following day is: sun`);
    break;
    case "sun":
      console.log(`You Entered: ${DayEntered}
      The following day is: mon`);
    break;
  default:
    console.log("Not a valid entry");
}