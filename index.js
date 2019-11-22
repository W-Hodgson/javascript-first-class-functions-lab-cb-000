function countdown(callback) {
  setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return (val) { val * multiplerValue }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
