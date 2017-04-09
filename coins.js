
var userI= .50 * 100;
 
function coinCounter () {
  // Initialize a JavaScript object to hold the coins 
  var x= true;
  var coinPurse = {};
    if(userI > 25){
      coinPurse.quarters= Math.floor(userI/25);
      userI -= coinPurse.quarters *25;
      console.log(userI);
    }
     if(userI > 10){
      coinPurse.dime= Math.floor(userI/10);
      userI -= coinPurse.dime *10;

      console.log(userI);
    }
    if(userI > 5){
       coinPurse.nickel= Math.floor(userI/5);
      userI -= coinPurse.nickel *5;
      console.log(userI);
    }
    if(userI >= 1){
      coinPurse.penny= userI;
      userI -= coinPurse.penny *1;
    }
  
    return coinPurse;
  }
var coins = coinCounter();
console.log(coins);





