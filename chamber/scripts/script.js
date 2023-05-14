//Get the current year
const d = new Date();
let currentYear = d.getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;


//Get last modified
let lastmodified = new Date(document.lastModified);
let month = lastmodified.getMonth() + 1; // getMonth() returns a 0-based value, so adding 1 to match the correct month
let date = lastmodified.getDate();
let year = lastmodified.getFullYear();
let hours = lastmodified.getHours();
let minutes = lastmodified.getMinutes();
let seconds = lastmodified.getSeconds();
let dateString = "Last Updated: " + month + "/" + date + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

document.getElementById("lastUpdated").innerHTML = dateString;

let today = new Date();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = weekdays[today.getUTCDay()];
let day = today.getUTCDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthString = months[today.getUTCMonth()];
let todayCurrentYear = today.getUTCFullYear();
let todayString = dayOfWeek + ", " + day + " " + monthString + " " + year;

document.getElementById("todayString").innerHTML = todayString;

// Hamburguer menu 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
