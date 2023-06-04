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
let dayOfWeek = weekdays[today.getDay()];
let day = today.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthString = months[today.getMonth()];
let todayCurrentYear = today.getFullYear();
let todayString = dayOfWeek + ", " + day + " " + monthString + " " + year;

document.getElementById("todayString").innerHTML = todayString;

// Hamburguer menu 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//banner block

let banner = document.getElementById('banner');

if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday") {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

function closeBtn() {
    document.getElementById("banner").style.display = "none";
  }

document.getElementById("closeBtn").addEventListener("click", closeBtn);


// Web Storage API - Brother BLazzard Codepen

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
