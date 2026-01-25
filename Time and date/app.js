// 1. Custom Date Formatter
// Write a function that takes a Date object and returns a formatted string like:
// "Saturday, 9 August 2025".

 
// 2. Elapsed Time in Minutes
// Given two timestamps, calculate how many minutes have passed between them.
// function time(startime,endtime){
//     const start = new Date(startime);
//     const end = new Date(endtime);
//     const dif = end - start;
//     const cal = Math.floor(dif / (1000 * 60));
//     return `${cal} cal`;

// }
// const output = time("2023-10-01T10:00:00","2023-10-01T12:30:00");
// console.log(output);
// 3. Age Calculator from Full Birthdate
// Create a function that accepts a full birthdate (YYYY-MM-DD) and calculates the age in
// years, months, and days.
// function birthdate(day , month, year){
//     const today = new Date();
//     const birthDate = new Date(year, month - 1, day);
//     let year = today.getFullYear() - birthDate.getFullYear();
//     let month = today.getMonth() - birthDate.getMonth();
//     let day = today.getDate() - birthDate.getDate(); 
//     if (day < 0) {
//         month--;
//         day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
//     }
//     if (month < 0) {
//         year--;
//         month += 12;
//     }
//     return `${year} years, ${month} months, ${day} days`;
// }
// const result = birthdate(10, 8 , 2007);
// console.log(result);
// 4. Get First Day of Current Month
// Return the date of the first day of the current month.
// function firstm(){
//     const today = new Date();
//     const fday = new Date(today.getFullYear(), today.getMonth(), 1);
//     return fday.getDate();
// }
// const firstday = firstm();
// console.log(firstday);
// 5. Get Last Day of Current Month
// Write a function that returns the last date (e.g., 31, 30, or 28/29) of the current month.
// function lastm(){
//     const today = new Date();
//     const lday = new Date(today.getFullYear(), today.getMonth() + 1, 0);
//     return lday.getDate();
// }
// const lastday = lastm();
// console.log(lastday);
// 6. Human-Friendly "Time Ago"
// Create a function that returns strings like:
// ○ "Just now"
// ○ "5 minutes ago"
// ○ "2 hours ago"
// ○ "1 day ago" based on a past timestamp.
// function time(pastTimestamp) {
//     const now = new Date();
//     const past = new Date(pastTimestamp);
//     const diffInSeconds = Math.floor((now - past) / 1000);
//     if (diffInSeconds < 60) {
//         return "Just now";
//     }
//     const diffInMinutes = Math.floor(diffInSeconds / 60);
//     if (diffInMinutes < 60) {
//         return `${diffInMinutes} minutes ago`;
//     }
//     const diffInHours = Math.floor(diffInMinutes / 60);
//     if (diffInHours < 24) {
//         return `${diffInHours} hours ago`;
//     }
//     const diffInDays = Math.floor(diffInHours / 24);
//     return `${diffInDays} days ago`;
// }
// const result = time("2023-10-01T10:00:00");
// console.log(result);

// 7. Countdown Timer
// Create a simple countdown function to a future date (e.g., New Year), showing days,
// hours, minutes, seconds remaining.
    // function startCountdown(targetDate) {
    //     const timer = setInterval(() => {
    //         const now = new Date().getTime();
    //         const distance = new Date(targetDate).getTime() - now;
    //         if (distance < 0) {
    //             clearInterval(timer);
    //             console.log("Time's Up!");
    //             return;
    //         }
    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //         console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    //     }, 1000);
    // }

    // startCountdown("Jan 1, 2027 00:00:00"); 

// 8. Time Difference in Hours and Minutes
// Given two dates, return the difference in hours and minutes, like: "3 hours 25
// minutes".
// function getTimeDiff(start, end) {
//     const s = new Date(start);
//     const e = new Date(end);
    
//     let diff = (e - s) / 1000 / 60;

//     const hours = Math.floor(diff / 60);
//     const minutes = Math.floor(diff % 60);

//     return `${hours} hours ${minutes} minutes`;
// }

// const result = getTimeDiff("2026-01-25 10:00:00", "2026-01-25 13:25:00");
// console.log(result);

// 9. Check if Date is Weekend or Weekday
// Write a function that returns "Weekend" or "Weekday" based on a given date string.
// function checkDay(dateString) {
//     const day = new Date(dateString).getDay();
//     if (day === 0 || day === 6) {
//         return "Weekend";
//     } else {
//         return "Weekday";
//     }
// }
// console.log(checkDay("2026-01-25"));
// console.log(checkDay("2026-01-26"));
// 10. Compare Birthdays
// Ask for two people’s birthdates and return who is older and by how many years/days.
// function comparebirthdays(date1, date2) {
//     const d1 = new Date(date1);
//     const d2 = new Date(date2);
//     const older = d1 < d2 ? "pahla banda" : "doosra banda";
//     const diff = Math.abs(d2 - d1);
//     const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//     const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
//     return `${older} bada hai. farq: ${years} saal aur ${days} din.`;
// }

// console.log(comparebirthdays("1995-05-15", "1998-10-20"));
// 11. Recurring Alarm Checker
// Given a day and time (e.g., "Monday 08:00"), check if the current date/time matches
// that schedule.
// function checkalarm(alarmday, alarmtime) {
//     const now = new Date();
    
//     const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     const currentday = days[now.getDay()];
    
//     const currenthours = String(now.getHours()).padStart(2, '0');
//     const currentminutes = String(now.getMinutes()).padStart(2, '0');
//     const currenttime = `${currenthours}:${currentminutes}`;

//     if (currentday === alarmday.toLowerCase() && currenttime === alarmtime) {
//         return "alarm baj raha hai!";
//     } else {
//         return "abhi waqt nahi hua.";
//     }
// }

// console.log(checkalarm("monday", "08:00"));

// 12. Date Validator
// Write a function that checks whether a given date string is a valid date (e.g., using
// Date.parse() or new Date()).
// function isvaliddate(datestring) {
//     const d = new Date(datestring);
    
//     if (d.toString() === "invalid date") {
//         return "ye date galat hai";
//     } else {
//         return "ye date sahi hai";
//     }
// }

// console.log(isvaliddate("2026-01-25"));
// console.log(isvaliddate("abc-123"));
// 13. Custom Relative Date Formatter
// Given a timestamp, format it as:
// ● "Today at 3:45 PM"
// ● "Yesterday at 11:00 AM"
// ● "4 days ago"
// depending on how recent it is.
// function format(timestamp) {
//     const inputdate = new Date(timestamp);
//     const now = new Date();
//     const diffms = now - inputdate;
//     const diffdays = Math.floor(diffms / (1000 * 60 * 60 * 24));
//     const time = inputdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     if (diffdays === 0 && now.getDate() === inputdate.getDate()) {
//         return `today at ${time}`;
//     } else if (diffdays === 1 || (diffdays === 0 && now.getDate() !== inputdate.getDate())) {
//         return `yesterday at ${time}`;
//     } else if (diffdays > 1 && diffdays < 7) {
//         return `${diffdays} days ago`;
//     } else {
//         return inputdate.toLocaleDateString();
//     }
// }
// console.log(format(new Date().getTime()));
// 14. Generate Dates for the Next 7 Days
// Return an array of dates (in DD-MM-YYYY format) for the next 7 days from today.
// function getnextsevendays() {
//     const dates = [];
//     for (let i = 1; i <= 7; i++) {
//         const d = new Date();
//         d.setDate(d.getDate() + i);
        
//         const day = String(d.getDate()).padStart(2, '0');
//         const month = String(d.getMonth() + 1).padStart(2, '0');
//         const year = d.getFullYear();
//         dates.push(`${day}-${month}-${year}`);
//     }
//     return dates;
// }

// console.log(getnextsevendays());
// 15. Time Slot Generator
// Create a function that generates available 30-minute time slots between 9 AM to 5 PM
// for a specific date.
// function generateslots() {
//     const slots = [];
//     let start = 9; // 9 am
//     let end = 17;  // 5 pm (24-hour format)

//     for (let hour = start; hour < end; hour++) {
//         const h = String(hour).padStart(2, '0');
        
//         slots.push(`${h}:00`);
//         slots.push(`${h}:30`);
//     }
//     slots.push("17:00"); 
//     return slots;
// }

// console.log(generateslots());
// 16. Monthly Calendar Dates
// Return an array of all dates in the current month (e.g., ['01-08-2025',
// '02-08-2025', ...]).
// function getmonthlydates() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = now.getMonth();
    
//     const totaldays = new Date(year, month + 1, 0).getDate();
//     const dates = [];

//     for (let i = 1; i <= totaldays; i++) {
//         const d = String(i).padStart(2, '0');
//         const m = String(month + 1).padStart(2, '0');
        
//         dates.push(`${d}-${m}-${year}`);
//     }

//     return dates;
// }
// console.log(getmonthlydates());
// 17. Convert UTC Date to Local Time
// Given a UTC date string, convert it to local date/time format.
// function utctolocal(utcstring) {
//     const d = new Date(utcstring);
//     const localdate = d.toLocaleDateString();
//     const localtime = d.toLocaleTimeString();
//     return `${localdate} ${localtime}`;
// }
// console.log(utctolocal("2026-01-25t12:00:00z"));
// 18. Measure Function Execution Time
// Use Date.now() to measure how long a loop/function takes to execute.
// function measuretime() {
//     const start = Date.now();

//     for (let i = 0; i < 1000000; i++) {
//     }

//     const end = Date.now();
//     const timetaken = end - start;
//     return `${timetaken} milliseconds`;
// }

// console.log(measuretime());
// 19. Format Date as ISO String Without Time
// Format the current date as YYYY-MM-DD (without time), using a custom formatter.

// function getisodate() {
//     const d = new Date();
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, '0');
//     const day = String(d.getDate()).padStart(2, '0');

//     return `${year}-${month}-${day}`;
// }

// console.log(getisodate());

// 20. Get the Number of Days in Any Month
// Write a function that takes a month and year, and returns how many days are in that
// month (handle leap years too).
// function formatDate(date) {
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const dayName = days[date.getDay()];
//   const dayNumber = date.getDate();
//   const monthName = months[date.getMonth()];
//   const year = date.getFullYear();
  
//   return `${dayName}, ${dayNumber} ${monthName} ${year}`;
// }
// console.log(formatDate(new Date('2025-08-09')));