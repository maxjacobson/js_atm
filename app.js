// alert, prompt, confirm

var total
  , command
  , amount
  , looping = true;

total = parseFloat(prompt("How much money do you have? (be honest)"));

while(looping == true) {
  alert("You have $" + total);

  command = parseInt(prompt("What would you like to do, deposit (1), withdraw (2), or exit (3)?"));

  switch(command)
  {
  case 1:
    amount = parseFloat(prompt("How much would you like to deposit?"));
    total += amount;
    break;
  case 2:
    amount = parseFloat(prompt("How much would you like to withdraw?"));
    total -= amount;
    break;
  case 3:
    looping = false;
    break;
  default:
    alert("Unrecognized command");
    break;
  }
}