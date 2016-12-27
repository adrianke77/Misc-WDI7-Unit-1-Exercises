function takeOrder(string) {
  // set default kopi contents:
  var sugarSpns = 2;
  var coffeeUnits = 2;
  var conMilkSpns = 1;
  var evapMilkSpns = 0;
  var ice = false;
  console.log("You ordered " + string + ".");
  orderArray = makeOrderArray(string);
  //checkOrderValid returns an object with keys validity and errMsg
  errorCheck = checkOrderValid(orderArray);
  if (errorCheck[0] === true) {
    console.log(errorCheck[1] + "\n");
    return;
  }
  if (arrayContains(orderArray, "o")) conMilkSpns = 0;
  if (arrayContains(orderArray, "gau")) coffeeUnits++;
  if (arrayContains(orderArray, "po")) coffeeUnits--;
  if (arrayContains(orderArray, "siew") && arrayContains(orderArray, "dai")) sugarSpns--;
  if (arrayContains(orderArray, "gah") && arrayContains(orderArray, "dai")) conMilkSpns++;
  if (arrayContains(orderArray, "si")) {
    conMilkSpns--;
    evapMilkSpns++;
  }
  if (arrayContains(orderArray, "kosong")) {
    sugarSpns = 0;
    conMilkSpns = 0;
  } //assume kosong removes both sugar and condensed milk
  if (arrayContains(orderArray, "peng"))(ice = true);
  kopiObj = makeCoffee(sugarSpns, coffeeUnits, conMilkSpns, evapMilkSpns, ice);
  return kopiObj
}
//convert order string to all lowercase keywords array
function makeOrderArray(string) {
  orderArray = string.toLowerCase().split(" ");
  return orderArray;
}

function checkOrderValid(array) {
  var resultArray = [false, null];
  if (arrayContains(orderArray, "gau") && arrayContains(orderArray, "po")) {
    resultArray[0] = true;
    resultArray[1] = "Error, can't do both gau and po.";
  }
  if (arrayContains(orderArray, "siew") && arrayContains(orderArray, "gah") && arrayContains(orderArray, "gah")) {
    resultArray[0] = true;
    resultArray[1] = "Error, can't do both siew dai and gah dai.";
  }
  if (arrayContains(orderArray, "gau") && arrayContains(orderArray, "po")) {
    resultArray[0] = true;
    resultArray[1] = "Error, can't do both gau and po.";
  }
  return resultArray;
}


function arrayContains(array, string) {
  result = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] === string) result = true;
  }
  return result;
}

function makeCoffee(sugar, coffee, conMilk, evapMilk, ice) {
  var ingredients = {}
  ingredients.kopi = coffee
  ingredients.sugar = sugar
  if (evapMilk > 0) ingredients.evaporatedMilk = evapMilk
  if (conMilk > 0) ingredients.condensedMilk = conMilk
  if (ice === true) ingredients.ice = ice
  ingredients.cost = (1.00 + evapMilk * 0.2 + conMilk * 0.2 + (ice ? 0.1 : 0)).toFixed(2)
  var steps = []
  for (ingredient in ingredients) {
    if (ingredient != "ice" && ingredient != "cost") steps.push("add " + ingredients[ingredient] + " spoons of " + ingredient)
  }
  if (ingredients.ice === true) steps.push("add ice")
  ingredients.steps = steps
  return ingredients
}

console.log(takeOrder("KOPI siew dai PeNg"))

testOrder1 = "KOPI siew dai PeNg";
testOrder2 = "KOPI po GAH DAI";
testOrder3 = "kopi O GaU si KOSONG";
errorOrder1 = "KOPI GAH DAI SIEW dai";
errorOrder2 = "kopi o gau so kosong po";