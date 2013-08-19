var total
  , command
  , amount
  , transact
  , looping = true;

transact = function(action) {
  amount = parseFloat(prompt("How much would you like to " + action));
  if(isNaN(amount)) {
    return false;
  } else {
    switch(action) {
      case "deposit":
        total += amount;
        break;
      case "withdraw":
        if(amount > total) {
          alert("Sorry, you don't have that much");
        } else {
          total -= amount;
        }
        break;
      default:
        return false;
        break;
    }
  }
};

total = parseFloat(prompt("How much money do you have? (be honest)"));

while(looping == true) {
  command = prompt("What would you like to do, deposit, withdraw, or exit?").toLowerCase();
  if(command === "deposit") {
    transact("deposit");
  } else if(command === "withdraw") {
    transact("withdraw");
  } else if(command === "exit") {
    looping = false;
  } else {
    alert("Unrecognized command");
  }
  alert("You have $" + total);
}