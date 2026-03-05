//  Logic-Based (Objects + Arrays + Loops)
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
// const students = [
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
// const form = document.querySelector("#userForm");
// const resultDiv = document.querySelector("#result");
// form.onsubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const userObj = Object.fromEntries(formData);

//     resultDiv.innerHTML = `
//         <h3>Submitted Data:</h3>
//         <p><strong>Name:</strong> ${userObj.name}</p>
//         <p><strong>Email:</strong> ${userObj.email}</p>
//         <p><strong>Age:</strong> ${userObj.age}</p>
//     `;

//     console.log("Final Object:", userObj);
// };
// 8. Render Nested Object Data
// Given a nested object like a user with address, display all info in a structured format in
// the DOM.
// const user = {
//   name: "ali",
//   age: 25,
//   address: {
//     city: "quetta",
//     location: {
//       sector: "a-1",
//       street: "main road"
//     }
//   }
// };

// const render = (data) => {
//   let output = "";
//   for (const key in data) {
//     if (typeof data[key] === 'object' && data[key] !== null) {
//       output += `<div style="margin-left: 20px;"><strong>${key}:</strong>${render(data[key])}</div>`;
//     } else {
//       output += `<div><strong>${key}:</strong> ${data[key]}</div>`;
//     }
//   }
//   return output;
// };

// window.onload = () => {
//   document.body.innerHTML = render(user);
// };


// 9. Calculate Cart Total
// Given an array of cart items ({name, price, quantity}), display a full cart with
// totals using DOM.
// const cart = [
//   { name: "apple", price: 50, quantity: 2 },
//   { name: "banana", price: 20, quantity: 5 },
//   { name: "milk", price: 150, quantity: 1 }
// ];

// let total = 0;
// let listitems = "";

// for (let i = 0; i < cart.length; i++) {
//   const item = cart[i];
//   const subtotal = item.price * item.quantity;
//   total += subtotal;

//   listitems += `<div>${item.name} - ${item.price} x ${item.quantity} = ${subtotal}</div>`;
// }

// document.body.innerHTML = `
//   <div>
//     <h3>your cart:</h3>
//     ${listitems}
//     <hr>
//     <strong>total: ${total}</strong>
//   </div>
// `;

// 10. Checkbox Filter
// Display a list of items. Use checkboxes to filter them (e.g., categories like "Fruits",
// "Vegetables").
// ️ DOM Interaction + Objects + Events

// const items = [
//   { name: "apple", category: "fruits" },
//   { name: "carrot", category: "vegetables" },
//   { name: "banana", category: "fruits" },
//   { name: "broccoli", category: "vegetables" }
// ];

// let activecategories = ["fruits", "vegetables"];

// const updatefilter = (cat) => {
//   if (activecategories.includes(cat)) {
//     activecategories = activecategories.filter(c => c !== cat);
//   } else {
//     activecategories.push(cat);
//   }
//   render();
// };

// const render = () => {
//   let listhtml = "";
//   for (let i = 0; i < items.length; i++) {
//     if (activecategories.includes(items[i].category)) {
//       listhtml += `<li>${items[i].name}</li>`;
//     }
//   }

//   document.body.innerHTML = `
//     <div>
//       <input type="checkbox" onchange="updatefilter('fruits')" ${activecategories.includes('fruits') ? 'checked' : ''}> fruits
//       <input type="checkbox" onchange="updatefilter('vegetables')" ${activecategories.includes('vegetables') ? 'checked' : ''}> vegetables
//       <ul>${listhtml}</ul>
//     </div>
//   `;
// };

// render();


// 11. Live Search List
// From an array of names or products, filter the list as the user types into an input field.
// const items = ["apple", "banana", "cherry", "date", "elderberry"];

// const show = (query = "") => {
//   let filtered = "";
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].toLowerCase().includes(query.toLowerCase())) {
//       filtered += `<li>${items[i]}</li>`;
//     }
//   }
//   document.querySelector(".list-container").innerHTML = filtered;
// };

// document.body.innerHTML = `
//   <input type="text" oninput="show(this.value)" placeholder="search...">
//   <ul class="list-container"></ul>
// `;

// show();


// 12. To-Do App with Object Tasks
// Each to-do item is an object ({title, completed}). Render list, allow marking as
// complete, and remove on click.


// let tasks = [
//   { title: "learn coding", completed: false },
//   { title: "finish project", completed: false }
// ];

// function toggle(i) {
//   tasks[i].completed = !tasks[i].completed;
//   render();
// }

// function remove(i) {
//   tasks.splice(i, 1);
//   render();
// }

// function render() {
//   let html = "";
//   for (let i = 0; i < tasks.length; i++) {
//     html += `
//       <div style="margin: 10px 0;">
//         <span style="text-decoration: ${tasks[i].completed ? 'line-through' : 'none'}">
//           ${tasks[i].title}
//         </span>
//         <button onclick="toggle(${i})">done</button>
//         <button onclick="remove(${i})">delete</button>
//       </div>`;
//   }
//   document.body.innerHTML = `<h3>my to-do list</h3> ${html}`;
// }

// render();
// 13. Form to Object Array
// Let users submit a form multiple times. Store each entry as an object in an array and
// display all entries in real time.
// let entries = [];

// function addentry() {
//   let n = document.querySelector(".name-input").value;
//   let a = document.querySelector(".age-input").value;
//   entries.push({ name: n, age: a });
//   show();
// }

// function show() {
//   let rows = "";
//   for (let i = 0; i < entries.length; i++) {
//     rows += `<li>${entries[i].name} is ${entries[i].age} years old</li>`;
//   }
  
//   document.body.innerHTML = `
//     <input class="name-input" placeholder="name">
//     <input class="age-input" placeholder="age">
//     <button onclick="addentry()">add entry</button>
//     <ul>${rows}</ul>
//   `;
// }

// show();
// 14. Edit Object in List
// Display a list of users with "Edit" buttons. On click, allow editing and update the object
// and UI.

// let users = [
//   { name: "ali", age: 25 },
//   { name: "sara", age: 22 }
// ];

// function edit(i) {
//   let newname = prompt("enter new name", users[i].name);
//   let newage = prompt("enter new age", users[i].age);
  
//   if (newname && newage) {
//     users[i].name = newname;
//     users[i].age = newage;
//     render();
//   }
// }

// function render() {
//   let list = "";
//   for (let i = 0; i < users.length; i++) {
//     list += `
//       <div>
//         ${users[i].name} (${users[i].age})
//         <button onclick="edit(${i})">edit</button>
//       </div>`;
//   }
//   document.body.innerHTML = `<h3>user list</h3>${list}`;
// }

// render();
// 15. Dynamic Table Generator
// Given an array of objects, generate a table with headers based on object keys and rows
// based on values.
// 🧩 Problem Solving / Deeper Logic
// 16. Frequency of Characters
// Take an input string, count character frequencies using an object, and display results.
// const people = [
//   { name: "ali", age: 25, city: "quetta" },
//   { name: "sara", age: 22, city: "lahore" }
// ];

// function generatekeys(obj) {
//   let keys = [];
//   for (let k in obj) {
//     keys.push(k);
//   }
//   return keys;
// }

// function rendertable(data) {
//   let keys = generatekeys(data[0]);
//   let header = "";
//   for (let i = 0; i < keys.length; i++) {
//     header += `<th>${keys[i]}</th>`;
//   }
//   let rows = "";
//   for (let i = 0; i < data.length; i++) {
//     let rowdata = "";
//     for (let j = 0; j < keys.length; j++) {
//       let key = keys[j];
//       rowdata += `<td>${data[i][key]}</td>`;
//     }
//     rows += `<tr>${rowdata}</tr>`;
//   }
//   document.body.innerHTML = `
//     <table border="1">
//       <thead><tr>${header}</tr></thead>
//       <tbody>${rows}</tbody>
//     </table>
//   `;
// }

// rendertable(people);



// 17. Nested Category Display
// Render categories and subcategories from a nested object structure using recursion
// (tree view style).


// function countchars(str) {
//   let counts = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (counts[char]) {
//       counts[char]++;
//     } else {
//       counts[char] = 1;
//     }
//   }
//   return counts;
// }

// function render(str) {
//   let result = countchars(str);
//   let html = "<ul>";
//   for (let key in result) {
//     html += `<li>${key}: ${result[key]}</li>`;
//   }
//   html += "</ul>";
  
//   document.body.innerHTML = `
//     <h3>character frequency counter</h3>
//     <input type="text" oninput="render(this.value)" placeholder="enter text here...">
//     ${html}
//   `;
// }

// render("quetta");
// 18. Sort by Multiple Properties
// Sort an array of student objects first by grade, then by name if grades are equal.
// const students = [
//     { name: "Zeeshan", grade: 80 },
//     { name: "Aman", grade: 90 },
//     { name: "Rahul", grade: 80 },
//     { name: "Suresh", grade: 95 }
// ];
// students.sort((a, b) => (b.grade - a.grade) || a.name.localeCompare(b.name));

// console.log(students);

// 19. Search and Highlight
// Search through an array of paragraph texts, highlight matches using DOM manipulation.
// 20. Custom Dropdown from Object Data
// Use a country object ({code: "IN", name: "India"}) to populate a dropdown. On
// select, show selected country's details.
// 1. Hamara data
// 1. Data Object
// const countries = [
//     { code: "IN", name: "India" },
//     { code: "US", name: "USA" },
//     { code: "GB", name: "UK" }
// ];
// const dropdown = document.querySelector("#countryDropdown");
// for (let i = 0; i < countries.length; i++) {
//     dropdown.innerHTML += `<option value="${countries[i].code}">${countries[i].name}</option>`;
// }