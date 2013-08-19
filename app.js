// alert, prompt, confirm

var total
  , command
  , amount
  , transact
  , looping = true;

total = parseFloat(prompt("How much money do you have? (be honest)"));

transact = function(action, amt) {
  console.log(total);
  if(!isNaN(amt)) {
    switch(action) {
      case "deposit":
        total += amt;
        break;
      case "withdraw":
        total -= amt;
        break;
      default:
        return false;
        break;
    }
  } else {
    return false;
  }
};

while(looping == true) {
  alert("You have $" + total);
  command = prompt("What would you like to do, deposit, withdraw, or exit?").toLowerCase();
  if(command === "deposit") {
    amount = parseFloat(prompt("How much would you like to deposit?"));
    transact("deposit", amount);
  } else if(command === "withdraw") {
    amount = parseFloat(prompt("How much would you like to withdraw?"));
    transact("withdraw", amount);
  } else if(command === "exit") {
    looping = false;
  } else {
    alert("Unrecognized command");
  }
}