 
                   // -----------------------------//
                  //         Loop Problems        //
                 // ---------------------------- //

// 1. Program to print natural numbers from 1 to n:

var n = 100;

for (var i = 1; i <= n; i++) {
  document.write(i + "<br>");
}

// 2. Write a C program to print all natural numbers in reverse from n to 1 using for loop:

var n = 0;

for (var i = 100; i > n; i--){
    document.write(i + "<br>");
}

// 4. Write a C program to find the sum of all natural numbers between 1 to n using for loop:

var n = 100;
var sum = 0;

for (var i = 1; i <= n; i++){
    sum = sum + i;
}
document.write(sum + "<br>");

// 5. Write a C program to input a number from user and print multiplication table of the given number using for loop:

var n = 78;

for (var i = 1; i <= 10; i++){
    document.write(n + '*' + i + '=' + n * i + '<br>');
}

// 6. Write a C program to input a number from user and count number of digits in the given integer using loop:

var number = 135;
var reminder = 0;
var sum = 0;
var count = 0;

while (number != 0) {
    reminder = number % 10;
    sum = sum + reminder;
    number = parseInt(number / 10);
    count++;
}
document.write('Sum: ' + sum + "<br>");
document.write("Total Digit: " + count + "<br>");


                   //_____________________________________________________//
                  //______________                   ____________________//
                 //_______________ JavaScript Arrays ___________________//
                // ____________________________________________________//

var fruits = ['banana ', ' apple ', ' wood apple ', ' jack fruit'];

document.write(fruits+'<br>');
document.write(fruits[0] + '<br>');


                   //_____________________________________________________//
                  //______________                    ___________________//
                 //_______________ Arrays are Objects __________________//
                // ____________________________________________________//


var student = { name: 'Hafijur', age: 23, cgpa: 3.75 };

document.write(student.name + '<br>');
document.write(student.age + '<br>');
document.write(student.cgpa + '<br>');


 //....................................//
//....................................//


function sum(num1, num2) {
    var res = num1 + num2;
    document.write(res + "<br>");
}

sum(10, 20);
sum(10, 50);
sum(100, 50);


                   //_____________________________________________________//
                  //______________                     __________________//
                 //_______________ JavaScript Frontend _________________//
                // ____________________________________________________//


var title = document.getElementById('title');

title.style.fontSize = '20px';

var menus = document.getElementsByClassName('nav-link');

menus[3].style.fontSize = '30px';

var banner = document.querySelector('.banner h1');

var button = document.querySelectorAll('button');