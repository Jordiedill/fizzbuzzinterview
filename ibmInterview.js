function fizzBuzz() {
  for (let num = 1; num < 101; num++) {
    let result = "";
    if (num % 3 === 0) {
      result = "fizz";
    }
    if (num % 5 === 0) {
      result += "buzz";
    }
    console.log(result || num);
  }
}

fizzBuzz();

// create a for loop that loops consecutively up to x
//define a reulot variable, set to empty string
//if, num in loop % 3 === 0
// set result variable equal to fizz
// if, if num % 5 === 0, result += buzz
//console.log(result);
