//Factorial of a number

document.write(
  "<strong> Factorial of a number by using for loop.</strong> <br/>"
);
//var numb1 = prompt("Enter the number");
var numb1 = 3;
var fact = 1;
function factorial1(numb1) {
  for (var i = numb1; i > 0; i--) {
    fact = fact * i;
  }
  document.write("The Factorial of " + numb1 + " is : " + fact);
}
factorial1(numb1);

document.write("<br/>-----------------------------------<br/>");
//------------------------------------------------------------------

document.write(
  "<strong>Factorial of a number by using for loop with conditions </strong><br/>"
);
//var numb2 = prompt("Enter the number");
var numb2 = 4;
var fact = 1;
function factorial2(numb2) {
  if (numb2 === 1) {
    fact = 1;
  }
  if (numb2 > 1) {
    for (var i = numb2; i > 0; i--) {
      fact = fact * i;
    }
  }
  if (numb2 <= 0) {
    fact = 0;
  }
  document.write("The Factorial of " + numb2 + " is : " + fact);
}

factorial2(numb2);

document.write("<br/>-----------------------------------<br/>");
//------------------------------------------------------------------

document.write(
  "<strong> Factorial of a number by using Recursion </strong> <br/>"
);
//var _numb = prompt("Enter the number");
var _numb = 5;
document.write("The Factorial of " + _numb + " is : " + factorial3(_numb));
function factorial3(_numb) {
  if (_numb === 1) {
    return _numb;
  } else {
    return _numb * factorial3(_numb - 1);
  }
}
factorial3(_numb);

document.write("<br/>-----------------------------------<br/>");
//------------------------------------------------------------------

document.write("<strong> Fibonacci Series using for loop.</strong> <br/>");
var fabNum = 25;
document.write(
  "The Fibonacci series upto entered Number: " + fabNum + " <br/> <br/>"
);
var a = 0;
var b = 1;
document.write(a + " " + b);
function Fibonacci(fabNum) {
  for (var i = 0; b + a < fabNum; i++) {
    var sum = a + b;
    document.write(" " + sum + " ");
    a = b;
    b = sum;
  }
}
Fibonacci(fabNum);

document.write("<br/>-----------------------------------<br/>");
//------------------------------------------------------------------

document.write("<strong> Fibonacci Series using While Loop.</strong> <br/>");
var fabNum1 = 25;
document.write(
  "The Fibonacci series upto entered Number: " + fabNum + " <br/> <br/>"
);
var a1 = 0;
var b1 = 1;
var sum1 = 0;
document.write(a1 + " " + b1);
function Fibonacci1(fabNum1) {
  while (b1 + a1 < fabNum1) {
    sum1 = a1 + b1;
    document.write(" " + sum1 + " ");
    a1 = b1;
    b1 = sum1;
  }
}
Fibonacci1(fabNum1);
document.write("<br/>-----------------------------------<br/>");
//------------------------------------------------------------------

document.write(
  "<strong>Fibonacci Series of a number by using Recursion </strong><br/>"
);
//var _numb = prompt("Enter the number");
var _fabNumb = 25;
document.write("The Fibonacci series upto entered Number:  " + _fabNumb);
document.write(" is :  <br/>" + Fibonacci2(_fabNumb));
function Fibonacci2(_fabNumb) {
  if (_fabNumb === 1) {
    return [0, 1];
  } else {
    var sum = Fibonacci2(_fabNumb - 1);
    sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
     return sum;
  }
}
Fibonacci2(_numb);

document.write("<br/>-----------------------------------<br/>");
//------------------------------------------------------------------

document.write("<strong>Prime Number by Using for loop</strong><br/>");
//var _priNumb = prompt("Enter the number");
var _priNumb = 5;
document.write("Check the entered Number is Prime or Not: <br/> ");
document.write("Entered Number is : " + _priNumb + " <br/>");
function primeNumber(_priNumb) {
  var _priNumb = _priNumb;
  if (_priNumb === 1) {
    return document.write("The number 1 is neither prime nor composite <br/>");
  } else {
    for (var i = 2; i < _priNumb / 2; i++) {
      if (_priNumb % i === 0) {
        return document.write("The entered number is not a prime number <br/>");
      }
    }
    return document.write("The entered number is a prime number <br/>");
  }
}
primeNumber(_priNumb);

document.write("<br/>-----------------------------------<br/>");
//--------------------------------------------------------

document.write("<strong>Prime Number by Using while loop</strong><br/>");
//var _priNumb = prompt("Enter the number");
var _priNumb = 5;
document.write("Check the entered Number is Prime or Not: <br/> ");
document.write("Entered Number is : " + _priNumb + " <br/>");
function primeNumber(_priNumb) {
  var _priNumb = _priNumb;
  var i = 2;
  if (_priNumb === 1) {
    return document.write("The number 1 is neither prime nor composite <br/>");
  } else {
    while (i < _priNumb / 2) {
      if (_priNumb % i === 0) {
        return document.write("The entered number is not a prime number <br/>");
      }
      i++;
    }
    return document.write("The entered number is a prime number <br/>");
  }
}
primeNumber(_priNumb);

document.write("<br/>-----------------------------------<br/>");

//--------------------------------------------------------------
document.write("<strong>Prime Number by Using Recursion </strong><br/>");
//var _priNumb1 = prompt("Enter the number");
var _priNumb1 = 11;
document.write("Check the entered Number is Prime or Not: <br/> ");
document.write("Entered Number is : " + _priNumb1 + " <br/>");

var i = 2;
function primeNumber(num, i) {
  if (_priNumb === 1) {
    return document.write("The number 1 is neither prime nor composite <br/>");
  }
  if (i < num / 2) {
    if (num % i === 0) {
      return document.write("The entered number is not a prime number <br/>");
    }
  } else {
    return document.write("The entered number is a prime number <br/>");
  }
  primeNumber(num, i + 1);
}
primeNumber(_priNumb1, i);
document.write("<br/>-----------------------------------<br/>");

//-----------------------------------------------------------
document.write("<strong>Armstrong Numberr by Using For Loop </strong><br/>");
//var _armNumb = prompt("Enter the number");
var _armNumb = 153;
document.write("Check the entered Number is Armstrong Number or Not: <br/> ");
document.write("Entered Number is : " + _armNumb + " <br/>");

function Armstrong(num) {
  var inpNumber = num;
  var digits = 0;
  while (num > 0) {
    digits = digits + 1;
    num = parseInt(num / 10);
  }
  num = inpNumber;
  var sum = 0;
  for(var i = 0; i < digits; i++) {
    var digit = num % 10;
    sum = sum + Math.pow(digit, digits);
    num = parseInt(num / 10);
  }
  if (sum == inpNumber) {
    return document.write("Number is a Armstrong Number");
  } else {
    return document.write("Number is not a Armstrong Number");
  }
}

Armstrong(_armNumb);
document.write("<br/>-----------------------------------<br/>");

//------------------------------------------------------------

document.write("<strong>Armstrong Numberr by Using while Loop </strong><br/>");
//var _armNumb1 = prompt("Enter the number");
var _armNumb1 = 153;
document.write("Check the entered Number is Armstrong Number or Not: <br/> ");
document.write("Entered Number is : " + _armNumb1 + " <br/>");

var num = 153;
var i=0;
function checkArmstrong(num){
var Number = num;
var digits = 0;
while(num > 0){
digits = digits + 1;
num = parseInt(num/10);
}
num = Number;
var sum = 0;
while(i<digits ) {
var digit = num%10;
sum = sum + Math.pow(digit, digits);
num = parseInt(num/10);
i++;
}
if(sum == Number){
 return document.write("Number is a Armstrong Number");
}else{
  return document.write("Number is not a Armstrong Number");
}
}

checkArmstrong(_armNumb1);
document.write("<br/>-----------------------------------<br/>");

//------------------------------------------------------------
