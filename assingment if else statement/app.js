


// ---------------------------advance javascript if else statements----------------------------------

// ---------------------------------------1------------------------------------------Age-Based Grade Check

// let obtainmarks = +prompt("Enter your full obtained marks:")
// if (obtainmarks >= 80 && obtainmarks <=100) {
//     alert("You got high marks in exam.")
// }
// else if (obtainmarks >= 50 && obtainmarks <80) {
//     alert("You are pass.")
// }
// else if (obtainmarks >= 0 && obtainmarks <50) {
//     alert("You are fail.")
// }
// else {
//     alert("You entered invalid marks.")
//     alert("Please enter valid marks.")
// }

// ---------------------------------------2-------------------------Discount Eligibility Based on Age and Membership

// let age = +prompt("Enter your age:");
// let premium = prompt("Are you a Premium Member? (yes/no)");
// if (age >= 60 && premium == "yes" || premium == "Yes") {
//     discount = "Senior Premium Discount";
//     alert(discount)
// }
// else if (age >= 60) {
//     discount = "Senior Discount";
//     alert(discount)
// }
// else if (premium == "yes" || premium == "Yes") {
//     discount = "Premium Discount";
//     alert(discount)
// }
// else {
//     discount = "No Discount";
//     alert(discount)
// }

// -----------------------------------------3---------------Login and Email Verification
// 
// let login = prompt("Are you logged in your email? (type yes or no)")
// let Verify = prompt("Is your email verified? (type yes or no)")
// 
// let loggedin
// let verified
// 
// if(login == "yes" || login == "Yes")
// {
    // loggedin = true
// }
// else{
    // loggedin = false
// }
// 
// if(Verify == "yes" || Verify == "Yes")
// {
    // verified = true
// }
// else{
    // verified = false
// }
// 
// if(loggedin == true && verified == true)
// {
    // alert("Access granted.")
// }
// else if (loggedin == true && verified == false)
// {
    // alert("Please, Verify your email.")
// }
// else{
    // alert("Please, log in.")
// }


//------------------------------------
// -----------



// let name = prompt("Enter you name:")
// let age = +prompt("Enter your age:")
// let country = prompt("Enter your country name:")

// if (age >=18 && age <=35 && country == "Pakistan" || country == "India"){
//     alert("Wellcome " + name + " You are eligible")
// }
// else{
//     alert("You are banned")
// }





// 5. Subscription Access Check
// Given the subscription plan and login status:
// ● "Welcome Premium User" if plan is "premium" and logged in
// ● "Welcome Free User" if plan is "free" and logged in
// ● "Please log in to continue" if not logged in
// ● "Invalid subscription" otherwise



// let login = prompt("are you logged in. Answer in | yes or no |")
// let plan = prompt("are you on Premium plan or free plan.")
// let loggedin
// let premium
// if(login == "yes" || login == "Yes"){
//     loggedin = true
// }
// else {
//     loggedin = false
// }

// if(plan == "premium" || plan == "Premium"){
//     premium = true
// }
// else{
//     premium = false
// }




// 6 Question


// let price = 1200;
// let stock = 5;
// let isMember = true;

// if (price > 1000 && stock > 0 && isMember) {
//     alert("Buy now with discount");
// } 
// else if (stock > 0) {
//     alert("Buy now");
// }
// else if (stock === 0) {
//     alert("Out of stock");
// }
// else {
//     alert("Invalid product");
// }



// 7 question

// let hoursWorked = 45;
// let isWeekend = false;

// if (hoursWorked > 40 && !isWeekend) {
//     alert("Overtime");
// }
// else if (hoursWorked > 0 && isWeekend) {
//     alert("Weekend work");
// }
// else if (hoursWorked <= 40 && hoursWorked > 0) {
//     alert("Regular hours");
// }
// else if (hoursWorked === 0) {
//     alert("No work");
// }




// 8 question 


// et age = 15;
// let gender = "male";

// if (age >= 13 && age <= 19 && gender === "male") {
//     alert("Teen Male");
// }
// else if (age >= 13 && age <= 19 && gender === "female") {
//     alert("Teen Female");
// }
// else if (age >= 20) {
//     alert("Adult");
// }
// else if (age < 13) {
//     alert("Child");
// }
// else {
//     alert("Invalid input");
// }


// 9 question 



// let temp = 42;
// let humidity = 65;

// if (temp >= 40 && humidity >= 60) {
//     alert("Heatwave Alert");
// }
// else if (temp >= 40 && humidity < 60) {
//     alert("Hot and Dry");
// }
// else if (temp <= 20) {
//     alert("Cool Weather");
// }
// else {
//     alert("Moderate");
// }


// 10 question
// let score = 85;

// if (score >= 90 && score <= 100) {
//     alert("Excellent");
// }
// else if (score >= 70 && score <= 89) {
//     alert("Good");
// }
// else if (score >= 50 && score <= 69) {
//     alert("Average");
// }
// else if (score >= 30 && score <= 49) {
//     alert("Poor");
// }
// else if (score < 30 && score >= 0) {
//     alert("Fail");
// }
// else {
//     alert("Invalid Score");
// }

// 11 question

// let isLoggedIn = true;
// let isEnrolled = false;
// let isBanned = false;

// if (!isLoggedIn) {
//     alert("Please log in");
// }
// else if (isBanned) {
//     alert("User is banned");
// }
// else if (!isEnrolled) {
//     alert("Enroll in course first");
// }
// else {
//     alert("Access granted");
// }


// 12 question 
// let speed = 110;
// let hasLicense = true;

// if (speed > 120) {
//     alert("License suspended");
// }
// else if (speed >= 100 && speed <= 120) {
//     alert("Warning");
// }
// else if (speed <= 100 && hasLicense) {
//     alert("Normal driving");
// }
// else {
//     alert("Driving without license");
// }

// 13 question


// let paymentStatus = "complete";
// let shipped = false;

// if (paymentStatus === "complete" && shipped) {
//     alert("Order on the way");
// }
// else if (paymentStatus === "complete" && !shipped) {
//     alert("Preparing your order");
// }
// else if (paymentStatus === "pending") {
//     alert("Awaiting payment");
// }
// else if (paymentStatus === "failed") {
//     alert("Payment failed");
// }
// else {
//     alert("Invalid status");
// }

// 14 Question


// let level = 50;
// let charging = true;

// if (level === 100) {
//     alert("Fully Charged");
// }
// else if (level < 100 && charging) {
//     alert("Charging...");
// }
// else if (level < 20 && !charging) {
//     alert("Low Battery");
// }
// else {
//     alert("Battery OK");
// }

// 15 Question 


// let browser = "Chrome";
// let device = "Desktop";

// if (browser === "Chrome" && device === "Desktop") {
//     alert("Full features enabled");
// }
// else if (browser === "Chrome" && device === "Mobile") {
//     alert("Limited mobile features");
// }
// else {
//     alert("Please switch to Chrome");
// }










