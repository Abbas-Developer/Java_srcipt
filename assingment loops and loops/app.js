// 📝 JavaScript Loops Assignments


// ------------------------------------------------------------------------------------------______---_-_-_-_--_--_--__--__--_--__--__

// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console.

// let fruits = ["apple", "banana", "cherry"];
// let i = 0 ; 
// for (fruits; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// ------------------------------------------------------------------------------------------

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to a paragraph with the ID output using document.querySelector.

// const colors = ["red", "green", "blue"];
// const para = document.querySelector('#output');
// para.textContent = "";
// for (let i = 0; i < colors.length; i++) {
//     if (i > 0) {
//         para.textContent += ", ";
//     }
//     para.textContent += colors[i];
// }

// ------------------------------------------------------------------------------------------

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.

// let m = 0 ; 
// for(m; m <= 10 ; m++){
//     console.log(m)
// }

// ------------------------------------------------------------------------------------------

// 4. Use a while loop to print numbers from 5 to 1 in the console.

// for (let num = 5; num >= 1; num--) {
//     console.log(num);
// }

// ------------------------------------------------------------------------------------------

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.
// const names = ["Ali", "Sara", "Ahmed"];
// const namez = document.querySelector('#names');
// namez.textContent = "";  
// for (let i = 0; i < names.length; i++) {
//     if (i !== 0) {                  
//         namez.textContent += ", ";
//     }
//     namez.textContent += names[i];
// }

// ------------------------------------------------------------------------------------------

// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.

// const cureent = document.querySelector('#status');
// cureent.textContent = "Loading...";

// ------------------------------------------------------------------------------------------

// 7. Usa loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.e 

// let numbers = [5, 10, 15];
// let total = 0;
// for (let i = 0; i < 3; i++) {       
//     total = total + numbers[i];
// }
// document.querySelector('#sum').textContent = total;

// ------------------------------------------------------------------------------------------

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.

// let cities = ["Karachi", "Lahore", "Quetta"];
// let cit = document.querySelector('#cities');
// cit.textContent = "";
// for (let i = 0; i < cities.length; i++) {
//     if (i > 0) {
//         cit.textContent = cit.textContent + ", ";
//     cit.textContent = cit.textContent + cities[i];
// }
// }

// ------------------------------------------------------------------------------------------

// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);  
//     }
// }

// ------------------------------------------------------------------------------------------

// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.

// let num = [45,22,89,100]
// let num1 = [0]
// for (let i = 1; i < num.length; i++) {
//     if (num[i] > num1) {
//         num1 = num[i];
//     }
// }
// let out = document.querySelector('#max');
// out.textContent = num1;

// ------------------------------------------------------------------------------------------

// 11. Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".

// const second = document.querySelector("#divi");
// second.textContent = "Task completed";


// ------------------------------------------------------------------------------------------

// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.

// let temps = [30, 35, 32, 40];
// let total = 0;
// for (let i = 0; i < temps.length; i++) {
//     total = total + temps[i];
// }
// let average = total / temps.length;
// document.querySelector('#Temp').textContent = average;

// ------------------------------------------------------------------------------------------

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
//     console.log(sum)
// }

// ------------------------------------------------------------------------------------------

// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.

// const animalsArray = ["dog", "cat", "bird"];
// let output = "";
// for (let i = 0; i < animalsArray.length; i++) {
//     output += animalsArray[i] + " ";
// }
// document.getElementById("animals").textContent = output.trim();


// ------------------------------------------------------------------------------------------


// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".

// const select = document.querySelector("#heading");
// select.textContent = "Welcome to javascript";

// ------------------------------------------------------------------------------------------

// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.

// for (let number = 1; number <= 50; number = number + 1) {
//     if (number % 5 === 0) {
//         console.log(number);
//     }
// }

// ------------------------------------------------------------------------------------------

// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.

// const scores = [80, 60, 90, 70];
// let count = 0;

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > 75) {
//         count++;
//     }
// }

// document.getElementById("highScores").textContent = "Number of scores above 75: " + count;



// ------------------------------------------------------------------------------------------

// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.

// const down = document.querySelector("#down");
// down.textContent = "Updated successfully";

// ------------------------------------------------------------------------------------------

// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.
// let subjects = ["Math", "Science", "English"];
// let heading= document.querySelector('#subjectsList');
// heading.textContent = "";
// for (let i = 0; i < subjects.length; i = i + 1) {
//     if (i > 0) {
//        heading.textContent = heading.textContent + ", ";
//     }
//    heading.textContent =heading.textContent + subjects[i];
// }

// ------------------------------------------------------------------------------------------

// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.
// let numbers = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 10; i >= 1; i = i - 1) {
//     console.log(i);
// }
// for (let i = 0; i < numbers.length; i = i + 1) {
//     sum = sum + numbers[i];
// }

// console.log(sum);

// ------------------------------------------------------------------------------------------

// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].
// let numbers = [45, 67, 12, 89, 34];
// let largest = 0; 

// for (let i = 0; i < numbers.length; i = i + 1) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log(largest);
// ------------------------------------------------------------------------------------------

// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

// let numbers = [3, 8, 6, 1, 9, 2];
// let even = 0;
// for (let i = 0; i < numbers.length; i = i + 1) {
//     if (numbers[i] % 2 === 0) {
//         even = even + 1;
//     }
// }
// console.log(even);



// ------------------------------------------------------------------------------------------

// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].
// let numbers = [20, 30, 40, 50];
//         let total = 0;
//         for (let i = 0; i < numbers.length; i++) {
//             total += numbers[i];
//         }
//         const average = total / numbers.length;
//         console.log("The average is:", average);
// ------------------------------------------------------------------------------------------

// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.
// let numbers = [2, 4, 6, 8, 10];
// let multiplied = [];
// for (let i = 0; i < numbers.length; i++) {
//     multiplied.push(numbers[i] * 3);
// }
// console.log("Original array:", numbers);
// console.log("Result:", multiplied);
// ------------------------------------------------------------------------------------------

// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.
// let array = [1, 3, 5, 7, 9];
// let count = 0;
// for (let i = 0; i < array.length; i++) {  
//     if (array[i] > 4) {
//         count++;  
//     }
// }
// console.log("Array:", array);  
// console.log("Number of elements greater than 4:", count);
// ------------------------------------------------------------------------------------------

// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.
// let arr = [10, 15, 20, 25, 30];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);
// ------------------------------------------------------------------------------------------

// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].

let arr = [10, 20, 30, 40, 25];
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 25) {
        found = true;
        break;
    }
}

if (found) {
    console.log("25 exists in the array");
} else {
    console.log("25 does not exist in the array");
}







// ------------------------------------------------------------------------------------------

// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.








// ------------------------------------------------------------------------------------------

// 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].












// ------------------------------------------------------------------------------------------

// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// .reverse()).














// ------------------------------------------------------------------------------------------

// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.










// ------------------------------------------------------------------------------------------

// 32. Create a loop that finds the difference between the largest and smallest numbers in an
// array [11, 4, 99, 2, 47].










// ------------------------------------------------------------------------------------------

// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.











// ------------------------------------------------------------------------------------------

// 34. Loop through an array of numbers and create a new array that only contains odd
// numbers.









// ------------------------------------------------------------------------------------------

// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.








// ------------------------------------------------------------------------------------------

// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.











// ------------------------------------------------------------------------------------------

// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.








// ------------------------------------------------------------------------------------------

// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// equal to the average of the array.












// ------------------------------------------------------------------------------------------

// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.
// let numbers = [2, 2, 2, 2, 2];
// let allSame = true;
// for (let i = 1; i < numbers.length; i = i + 1) {
//     if (numbers[i] !== numbers[0]) {
//         allSame = false;
//     }
// }
// if (allSame === true) {
//     console.log("Ok he bahi ye sab ok he");
// } else {
//     console.log("Nahi bahi ok nahi he");
// }

// ------------------------------------------------------------------------------------------
