/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:

* Tests for equality and inequality with strings
* Tests using the lower case function
* Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
* Tests using "and" and "or" operators
* Test whether an item is in a array
* Test whether an item is not in a array */

// Tests for equality and inequality with strings
let str1 = 'hello';
let str2 = 'world';
console.log("Is str1 equal to 'hello'? I predict True.");
console.log(str1 == 'hello');

console.log("Is str2 not equal to 'hello'? I predict True.");
console.log(str2 != 'hello');

// Tests using the lower case function
let upperCaseStr = 'HELLO';
console.log("Is upperCaseStr equal to 'hello' when converted to lowercase? I predict True.");
console.log(upperCaseStr.toLowerCase() == 'hello');

// Numerical tests
let num1 = 10;
let num2 = 20;
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10);

console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

console.log("Is num2 greater than or equal to 20? I predict True.");
console.log(num2 >= 20);

console.log("Is num1 less than or equal to 9? I predict False.");
console.log(num1 <= 9);

// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;
console.log("Is condition1 true and condition2 false? I predict False.");
console.log(condition1 && condition2);

console.log("Is condition1 true or condition2 false? I predict True.");
console.log(condition1 || condition2);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf('banana') !== -1);

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf('grape') === -1);