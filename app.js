// Chapter 21 to 25 Start
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
//task 1 

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + lastName;

// document.write(`<h1>Greeting ${fullName}</h1>`)


// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
//Task 2

// var fvrtModel = prompt("Enter your favorite Mobile Model name ");
// fvrtModelLength = fvrtModel.length;

// document.write(`My favorite Phone is ${fvrtModel} And Length of String is ${fvrtModelLength}` );

// Write a program to find the index of letter "“"n” in the word
// “Pakistani” and display the result in your browser .
//Task 3

// var nationality = "Pakistani";
// findIndex = nationality.indexOf("n")

// document.write(`<h1>String : ${nationality} <br>
// Index of N: ${findIndex}</h1>`)

// . Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser
//Task 4 
// var word = "Hello World";
// findLastIndex = word.lastIndexOf('l')
// document.write(`<h1>String : ${word} <br>
// Last Index of L: ${findLastIndex}</h1>`)

// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
//Task 5

// var word = "Pakistani";
// thirdcharAt = word.charAt(3)
// document.write(`<h1>String : ${word} <br>
// Character at index 3 : ${thirdcharAt}</h1>`)

// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
//task 6 

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName.concat(lastName);

// document.write(`<h1>Greeting ${fullName}</h1>`)


// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// Task 7


// var cityName = 'Hyderabad';
// var replaceName = cityName.replace("Hyder", "islam")
// document.write(replaceName)

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
//Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// replaceMessage = message.replace(/and/g, '&')
// document.write(replaceMessage);


// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser
//Task 9

// var stringValue = "472";
// var convertNumtostring = parseInt(stringValue);
// var convertNumtostring2 = Number(stringValue);
// console.log(convertNumtostring)


// Write a program that takes user input. Convert and
// show the input in capital letters
//Task 10
// var userInput = prompt("Enter Your Favorite Name");
// console.log(userInput.toUpperCase())

// Write a program that takes user input. Convert and
// show the input in title case.
//Task 11 

// var userInput2 = prompt("Enter Your Favorite Name");
// var firstLetter = userInput2.charAt(0)
// firstLetter = firstLetter.toUpperCase();
// var otherLetter = userInput2.slice(1);
// var joinLetter = firstLetter.concat(otherLetter);
// console.log(joinLetter)

// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// Task 12

// var num = 35.36 ;
// convertnum = num.toString()
// console.log(convertnum.replace('.', ''))

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

//Task 13 

// var userName = prompt("Enter Your Username")
// for(var i = 0; i < userName.length; i++){
// var userCharAt = userName.charAt(i);
// var usercharCodeAt = userCharAt.charCodeAt(userCharAt);

// if(usercharCodeAt == 33 || usercharCodeAt == 44 || usercharCodeAt == 46 || usercharCodeAt == 64){
//         alert('Enter a valid Username');
//         break;
//  }
// }

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
//Task 14

// var userBakeryItem = prompt("Enter Your favorite Fruits Name")
// var bakery  = ["cake", "apple pie", "cookie", "chips", "patties"];
// var check = bakery.indexOf(userBakeryItem.toLowerCase());
//     if(check != -1){
//         document.write(`${userBakeryItem} is Available at index ${check} in our Bakery`);
//     }
//     else if(bakery.indexOf(userBakeryItem.toLowerCase()) == -1){
//         document.write(`Sorry ${userBakeryItem} is not Available in our Bakery`);
//     }

// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document
// Task 15


// var userPassword = prompt("Enter Your Password Here.")


// if (isNaN(parseInt(userPassword[0]))) {
//     console.log("password is valid");
// }
// else {
//     alert("Password should not start with number");
// }

// if (userPassword.length < 6) {
//     alert("Password must atleast 6 characters long")
// }

// var letters = /^[0-9a-zA-Z]+$/;
// if (userPassword.match(letters)) {
//     console.log('Valid Password');
// }
// else {
//     alert('Password should contain alphabets and numbers');
// }



// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser
//Task 16 
// var university = "University of Karachi";
// for(var i = 0 ; i < university.length; i++){
//     console.log(university.charAt(i))
// }

// Write a program to display the last character of a user
// input.
// Task 17

// var country = 'pakistan';
// var length = country.length;
// var lastChar = country.charAt(length -1)
// document.write(`User Input ${country} <br>
// last character of input ${lastChar}`)

// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
//Task 18

// var para = "The quick brown fox jumps the over the lazy dog";
// var res = para.toLowerCase().match(/the/g);
// var length = res.length;
// document.write("Text : " + para+ "<br> There are "+ length + " occurance the word The" )


// chapter 21 to 25 end

// chapter 26 to 30 start

// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//Task 1

// var userNum = parseFloat(prompt("Enter Positive floating Number"))

// document.write("Number : "+ userNum + "<br>")
// document.write("Round Off Value : "+ Math.round(userNum) + "<br>")
// document.write("Floor Value : "+ Math.floor(userNum) + "<br>")
// document.write("Ceil Value : "+ Math.ceil(userNum) + "<br>")


// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//Task 2

// var userNum2 = parseFloat(prompt("Enter Negative Floating Number"))

// document.write("Number : "+ userNum2 + "<br>")
// document.write("Round Off Value : "+ Math.round(userNum2) + "<br>")
// document.write("Floor Value : "+ Math.floor(userNum2) + "<br>")
// document.write("Ceil Value : "+ Math.ceil(userNum2) + "<br>")


// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
//Task 3 

// var userVal = parseFloat(prompt("Enter Any Number"))
// document.write("The Absolute Value " + userVal+ " is " +  Math.abs(userVal))


// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
//Task 4
// var random = Math.random() * 6;
// document.write("Random Dice Value : " + Math.ceil(random) )


// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
//Task 5 
// var coins = ['heads', 'tails'];
// var number = Math.floor(Math.random()* 2)
// var number2 = number + 1
// document.write("Random coins Value "+ number2 + " You Selected " + coins[number])

// Write a program that shows a random number between 1
// and 100 in your browser.
//Task 6 
// var randomNum = Math.floor(Math.random() *100)
// document.write(`Random Value Between 1 to 100 is ${randomNum}`)

// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//Task 7 

// var userWeight = prompt(`Enter Your weight in Selected Items \n a. 50 \n b. 50kgs \n c. 50.2kgs  \n d. 50.2kilograms`);

// if(userWeight == '50kgs'){
//     document.write('The weight of users is 58.3 kilograms')
// }


// . Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// // Task 8 

// var userValue = parseInt(prompt("Enter Your Lucky Number"))
// var SecretNum = Math.floor(Math.random() *10)
// if(userValue == SecretNum){
//     document.write("Hurry You won ")
// }
// else{
//     document.write("Sorry ! You Lose")
// }
// chap 26 to 30 End

//Chapter 31 to 34 Start
// Task 1 
//  Write a program that displays current date and time in
// your browser.
// document.write(new Date())

//Task 2 
// . Write a program that alerts the current month in words.
// For example December.

var date = new Date();
var months = ['january', 'febraury', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'november', 'december'];
// var currentMonth = date.getMonth()
// alert("Current Month : " + months[currentMonth])


//Task 3 
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

var weeksDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var today = date.getDay();
// alert("Today is " + weeksDays[today] )


// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
//Task 4 
// if(weeksDays[today] == 'Saturday' || weeksDays[today] == 'Sunday' ){
//     alert("It's a Fun Day")
// }

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
//Task 5 

// if (date.getDate() > 15) {
//     document.write("Last fifteen Days of the Month")
// }
// else {
//     document.write("First fifteen Days of the Month")
// }


//Task 6 
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// var oldDate = new Date('January 1 , 1970')
// var getMiliSecound = date.getTime() - oldDate.getTime();
// var getMinutes = getMiliSecound / 1000;
// document.write('Current Date ' + date + "</br>")
// document.write('Elapsed Milliseconds from 1 January 1970 :    ' + getMiliSecound + "</br>")
// document.write('Elapsed Minutes from 1 January 1970 :   ' + getMinutes + "</br>")


//Task 7 
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var hours = date.getHours();
// alert(hours)
// if(hours >= 11){
//     alert("It is Pm")
// }
// else{
//     alert("It is Am")
// }


// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
//Task 8 
// var laterDate = new Date('30 May, 2020')
// var d = new Date();
// d.setFullYear(2020, 4, 30);
// alert("Later Date is "  + laterDate)
// alert("Later Date is "  + d)

// Task 9
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramzanDate = new Date("Apr 24, 2020"); 
// var currentDate = new Date(); 
// var difference_In_Time = currentDate.getTime() - ramzanDate.getTime(); 
// var difference_In_Days = difference_In_Time / (1000 * 3600 * 24); 
// document.write(Math.floor(difference_In_Days) + " days have been passed since 1st Ramadan 2020"); 

// Task 10 
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
//     var d1 = new Date();
//     var d2 = new Date('Dec 5, 2015');
//    var millisecondDiff = d1.getTime() - d2.getTime();
//    var secDiff = Math.floor( millisecondDiff / 1000 );
//    document.write(`On reference Date ${d2},  ${secDiff} had been passed since begining of 2015`);




//Task 11
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

//  var newDate = new Date();
//  newDate.setMinutes(newDate.getMinutes() - 60);

// document.write("curent Date " + date + " </br> 1 hour ago, it was " + newDate )

//Task 12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var d = new Date();
// d.setFullYear(1920);
// document.write("Current Date " + date + "<br>");
// document.write("Hundered years Back date was " + d)

//Task 13
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// var age = 24;
// var birthYear = date.getFullYear() - age;

// document.write(`Your age is ${age} Your birth year is ${birthYear}`)

//Task 14
// 4. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
// var customerName = "Hamza Yousuf";
// var months = ['january', 'febraury', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'november', 'december'];
// var currentMonth = date.getMonth();
// var currentMonthByName = months[currentMonth];
// var numOfUnits = 548;
// var chargesPerUnit = 14;
// var NetAmountPayable = chargesPerUnit * numOfUnits;
// var lateAmountcharges = 500;
// var grossAmountPayble  = chargesPerUnit * numOfUnits + lateAmountcharges;

// document.write(`<h1>K-Electric Bill</h1> Customer  Name  : <b>${customerName}</b> <br>Month :<b>${currentMonthByName}</b><br>
// Number of units : <b>${numOfUnits}</b></>
// Charges per unit  : <b>${chargesPerUnit}</b></br>
// Net Amount Payable ( Within dua Date ) : <b>${NetAmountPayable} </b><br>
// Late Amount charges : <b>${lateAmountcharges} </b><br>
// Gross Amount Payable( After Dua Date ) : <b>${grossAmountPayble}</b>`)
// End Chap 31 to 34 

//  Chap 35 to 35 Start
// Task 1
//  Write a function that displays current date & time in your browser.
// function checkDate(){
//     document.write(new Date())
// }
// checkDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
//Task 2 
// function greet(firstName, lastName){
//     var FullName = firstName.concat(lastName)
//     document.write("Hello " + FullName)
// }
// greet('Hamza', 'Yousuf')

//Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// Task 3
// function sum(firstNum, lastNum){
//     var totalSum = firstNum + lastNum
//     return totalSum;
// }
//         document.write(sum(10, 55) + "<br>")
//         var result = sum(10, 52)
//         document.write(result)

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
//Task 4
// function calculator(firstNum, operator, lastNum) {
//     switch (operator) {
//         case '+':
//             return firstNum + lastNum;
//             break;
//         case '-':
//             return firstNum + lastNum;
//             break;
//         case '+':
//             return firstNum - lastNum;
//             break;
//         case '*':
//             return firstNum * lastNum;
//             break;
//         case '/':
//             return firstNum / lastNum;
//             break;
//             case '%':
//             return firstNum % lastNum;
//             break;
//             default:
//                 alert("Wrong Sum")
//     }
// }
// document.write(calculator(5, '+', 10) + "<br>")
// document.write(calculator(55, '*', 10) + "<br>")
// document.write(calculator(45, '-', 10) + "<br>")
// document.write(calculator(15, '/', 10) + "<br>")
// document.write(calculator(51, '%', 10) + "<br>")

// Write a function that squares its argument.
// Task 5

// function square(num){
//     return Math.sqrt(num)
// }
// document.write(square(25))
// document.write(square(50))

// Write a function that computes factorial of a number.
//Task 6

// function factorial(n) {
//     //base case
//     if (n == 0 || n == 1) {
//         return 1;
//         //recursive case
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// var n1 = 4;
// var n2 = 3;
// var n3 = 2;
// var n4 = 6;

// var answer1 = factorial(n1)
// var answer2 = factorial(n2)
// var answer3 = factorial(n3)
// var answer4 = factorial(n4)

// console.log("The factorial of " + n1 + " is " + answer1);
// console.log("The factorial of " + n2 + " is " + answer2);
// console.log("The factorial of " + n3 + " is " + answer3);
// console.log("The factorial of " + n4 + " is " + answer4);

// Write a function that take start and end number as inputs
// & display counting in your browser.
//Task 7
// function counter(startCounter, endcounter){
//     for (var index = startCounter; index <= endcounter; index++) {
//         document.write(index + "<br>")     
//     }
// }
// counter(10, 100)
//Task 8 
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function calculateHypotenuse(a = 0, b = 0, c = 0) {   
//      function calculateSquare() {  
//          var ans = Math.hypot(a, b)
//       return ans;
//     }  
//     return calculateSquare();
//   } 
// console.log(calculateHypotenuse(15));
// console.log(calculateHypotenuse(4, 3));
// console.log(calculateHypotenuse(8, 1, -5));

// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
//Task 9

// function rectangle(width, height) {
//         return  width * height;
// }

// document.write("Area of a Rectangualr is " + rectangle(10, 25))


// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam
//Task 10 

// function palindrome(checkWord){
//     var userWord = checkWord;

//    var palindromeWord =  userWord.split('').reverse().join('');
//    if(userWord === palindromeWord){
//       console.log(palindromeWord)
//         console.log("It is a Palindrome word")
//    }
//    else{
//    console.log("It is not a Palindrome word")
//    console.log(palindromeWord)
//    }
// }

// palindrome('madam');
// palindrome('hamza');
// palindrome('civic');
// palindrome('malayalam');

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// Task 11
// function stringchange(words) {
//     var words = words.split(' ');
//     var results = [];
//     for (var i = 0; i < words.length; i++) {
//         var letter = words[i].charAt(0).toUpperCase();
//         results.push(letter + words[i].slice(1));
//     }
//     return results.join(' ');
// }
// console.log(stringchange('hasmza asdlkshd sdishdkskdbjsdksjh'))
// console.log(stringchange('my name is Hamza Yousuf'))
// console.log(stringchange('i am the students of saylani web and mobile hybrid application development'))

// Task 12 
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestword(word) {
//     var strSplit = word.split(' ')
//     var longestWord = 0;
//     var names = '';
//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//             names = strSplit[i];
//         }
//     }
//     return names;
// }
// var res1 = longestword('Web Development Tutorial')
// var res2 = longestword('Saylani Welfare Association')
// console.log(`The Longest word of paragraph is ${res1} and the length is ${res1.length}`)
// console.log(`The Longest word of paragraph is ${res2} and the length is ${res2.length}`)


// Task 13 
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function checkLetter(string, letter) {
// var rgxp = new RegExp(letter, "g");
// alert(string.match(rgxp).length);
// }
// checkLetter('JSResourceS.com', 'o')
// checkLetter('Saylani Welfare Association', 'a')

//Task 14 
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
// }
// function calcArea(radius) {
//     return Math.PI * radius * radius;
// }
// var circumference = calculateCircumference(5)
// document.write("The Circumference is " + circumference + "<br>")

// var CalculateArea = calcArea(25)
// document.write("The Area is " + CalculateArea);

// Complete Assignments