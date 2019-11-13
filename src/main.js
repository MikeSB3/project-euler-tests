//Passed
export var sum = 0
export var numMultiple = 3
export function remainderCheck() {
  while (numMultiple < 1000) {
    if ((numMultiple % 3 === 0) || (numMultiple % 5 === 0)) {
      sum += numMultiple;
      numMultiple++;
    } else {
      numMultiple++;
    }
  };
};
// Passed
export var fibonacci = [1,2]
export function fibSequence() {
  for (var i = 2; i <= fibonacci.length; i++){
    var newNumber = fibonacci[i-1] + fibonacci[i-2]
    if (newNumber < 4000000) {
      fibonacci.push(newNumber)
    } else {
      break
    }
  }
}
export function evenAdd() {
  var total = 0
  for (var i = 0; i <= fibonacci.length; i++) {
    if (fibonacci[i] % 2 === 0) {
      total += fibonacci[i]
    }
  }
  return total
}
