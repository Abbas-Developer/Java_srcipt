// 🔁 Logic-Based (Objects + Arrays + Loops)
// 1. Display Student Info
// Given an array of student objects, display each student’s name and marks in a table
// using DOM.
// const r = document.querySelector("#result")
// let student = [
//     { name: "Ahmed Khan", marks: 85 },
//     { name: "Sara Fatima", marks: 92 },
//     { name: "Bilal Ahmed", marks: 78 },
//     { name: "Ayesha Noor", marks: 95 },
//     { name: "Zain Abbas", marks: 68 },
//     { name: "Hina Riaz", marks: 88 }
// ];

// for(let i = 1; i < student.length; i++) {
//     r.textContent = student[i].name + " = " + student[i].marks;
// }

// 2. Find Top Scorer
// From a list of student objects with names and scores, find and display the top scorer.
// const student = [
//     {
//         name: "Ahmed",
//         marks: 85
//     },
//     {
//         name: "sibtain",
//         marks: 92
//     },
//     {
//         name: "Ali agha",
//         marks: 78
//     },
//     {
//         name: "Abbas",
//         marks: 95
//     },
//     {
//         name: "Syed Ali",
//         marks: 68
//     },
//     {
//         name: "imran",
//         marks: 97
//     },
// ];
// function top(student) {
//     if (student.length === 0) return null;

//     let topStudent = student[0]; 

//     for (let i = 1; i < student.length; i++) {
//         if (student[i].marks > topStudent.marks) {
//             topStudent = student[i];
//         }
//     }

//     return topStudent;
// }
// top(student)


// 3. Filter Products by Price Range
// Create a function that takes a min and max price and filters an array of product objects
// accordingly.
// const products = [
//     { name: "Mobile", price: 45000 },
//     { name: "Laptop", price: 120000 },
//     { name: "Charger", price: 1500 },
//     { name: "Earphones", price: 2500 },
//     { name: "Tablet", price: 35000 },
//     { name: "Keyboard", price: 3000 }
// ];
// function filter(product, minimp, mixp) {
//     let f = [];
//     for (let i = 0; i < products.lenth; i++) {
//         let p = products[i].price;
//         if (p >= minimp && p <= mixp) {
//             f.push(products[i]);
//         }
//     }
//     return f ;

// }
// console.log("1000 se 5000 tak:");
// console.log(filter(products, 1000, 5000));



// 4. Count Word Frequencies
// Given a paragraph from a textarea, count the frequency of each word and display it as a
// list.





// 5. Group Users by Role
// Given an array of user objects ({name, role}), group and display users under role
// headings.
// const h1 = document.querySelector("#result");
// const h2 = document.querySelector("#reslutt");
// const container = document.querySelector("#parent");

// let array = [
//     {name: " Abbas" , role : 1},
//     {name: " Syed Ali" , role : 2},
//     {name: " Sibtain" , role : 3},
//     {name: " Mustafa" , role : 4}
// ]
// for(let i = 0 ;i < array.length; i++){
//     container.innerHTML += `<h1>Student Name:${array[i].name} | Role number: ${array[i].role}</h1>`

// }


// 6. Sort Products by Price
// Display a list of products sorted by price (ascending/descending toggle via button).

// let products = [
//     { name: "Mobile", price: 50000 },
//     { name: "Laptop", price: 80000 },
//     { name: "Watch", price: 5000 },
//     { name: "Headphones", price: 2000 }
// ];

// let isAscending = true;
// function displayProducts() {
//     const list = document.querySelector("#product-list");
//     list.innerHTML = "";

//     for (let i = 0; i < products.length; i++) {
//         list.innerHTML += `<li>${products[i].name} | Price : ${products[i].price}</li>`
//     }
// }

// function sortProducts() {
//     if (isAscending) {
//         products.sort((a, b) => a.price - b.price);
//     } else {
//         products.sort((a, b) => b.price - a.price);
//     }

//     isAscending = !isAscending;
//     displayProducts();
// }

// displayProducts();



// 7. Dynamic Form Inputs to Object
// Create a form with name, email, and age. On submit, convert the input into an object
// and show the result.




// 8. Render Nested Object Data
// Given a nested object like a user with address, display all info in a structured format in
// the DOM.





// 9. Calculate Cart Total
// Given an array of cart items ({name, price, quantity}), display a full cart with
// totals using DOM.





// 10. Checkbox Filter
// Display a list of items. Use checkboxes to filter them (e.g., categories like "Fruits",
// "Vegetables").
// ️ DOM Interaction + Objects + Events








// 11. Live Search List
// From an array of names or products, filter the list as the user types into an input field.





// 12. To-Do App with Object Tasks
// Each to-do item is an object ({title, completed}). Render list, allow marking as
// complete, and remove on click.








// 13. Form to Object Array
// Let users submit a form multiple times. Store each entry as an object in an array and
// display all entries in real time.






// 14. Edit Object in List
// Display a list of users with "Edit" buttons. On click, allow editing and update the object
// and UI.










// 15. Dynamic Table Generator
// Given an array of objects, generate a table with headers based on object keys and rows
// based on values.
// 🧩 Problem Solving / Deeper Logic
// 16. Frequency of Characters
// Take an input string, count character frequencies using an object, and display results.




// 17. Nested Category Display
// Render categories and subcategories from a nested object structure using recursion
// (tree view style).




// 18. Sort by Multiple Properties
// Sort an array of student objects first by grade, then by name if grades are equal.



// 19. Search and Highlight
// Search through an array of paragraph texts, highlight matches using DOM manipulation.




// 20. Custom Dropdown from Object Data
// Use a country object ({code: "IN", name: "India"}) to populate a dropdown. On
// select, show selected country's details.