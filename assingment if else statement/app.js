


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



let login = prompt("are you logged in. Answer in | yes or no |")
let plan = prompt("are you on Premium plan or free plan.")
let loggedin
let premium
if(login == "yes" || login == "Yes"){
    loggedin = true
}
else {
    loggedin = false
}

if(plan == "premium" || plan == "Premium"){
    premium = true
}
else{
    premium = false
}


