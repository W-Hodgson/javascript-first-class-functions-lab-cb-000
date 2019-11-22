function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(val) {
    return val * multiplierValue;
  }
}

function multiplier(a, b) {
  return a * b
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multipler.bind(null, 2);
