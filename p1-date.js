/*
    CIT 281 Project 1
    Name: Meagan Kiefer
*/
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let today = new Date; //generates the current time and day 
let todayName = today.getDay(); //converts the current time nd day to 0-6 based on dayofweek
console.log(dayOfWeek[todayName]); //logs the day of week from the array
