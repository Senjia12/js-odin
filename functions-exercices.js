function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  /* to rewrite without if using ? and then || instead */

  function min(a, b) {
    let a = 10;
    let b = 8;
    return a < b ? a : b
  }

  function min2(a, b) {
    let a = 45;
    let b = 56;
    if (a<b) {
        return a
    } else {
        return b;
    }
  }

  function min3(a, b) {
    let a = 42;
    let b =3;
    return (a<b && a) || b
  }

  function pow() {
    let x = Number(prompt("x?", ''));
    let n = Number(prompt("y?", ''));
    n = 4;
    if (n<1 || !Number.isInteger(n)) {
        alert("The provided power ${n} is not supported, only positive integers are.")
    } else {
        let power = x ** n;
        alert('Power = ${power}');
    }
  }

  function add7() {
    let number = parseInt(prompt("Enter a number:", '')) + 7;
    console.log(number)
  }

  function multiply() {
    let numbers = [];
    let a = parseInt(prompt("Enter the first number:", ''));
    let b = parseInt(prompt("Enter the second number:", ''));
    numbers.push(a, b)
    console.log(numbers)
    console.log(a*b)
  }

  function capitalize() {
    let string = prompt("Enter a sentence: ", '');
    let stringResult = string[0].toUpperCase() + string.slice(1).toLowerCase();
    console.log(stringResult)
  }

  function lastLetter() {
    let string = prompt("Enter a word: ", '');
    console.log(string[string.length - 1])
  }