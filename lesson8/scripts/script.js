const d = new Date();
let currentYear = d.getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;

let lastmodified = new Date(document.lastModified);

let month = lastmodified.getMonth() + 1; // getMonth() returns a 0-based value, so adding 1 to match the correct month
let date = lastmodified.getDate();
let year = lastmodified.getFullYear();
let hours = lastmodified.getHours();
let minutes = lastmodified.getMinutes();
let seconds = lastmodified.getSeconds();
let dateString = `Last Updated: ${month}/${date}/${year} - ${hours}:${minutes}:${seconds}`;

document.getElementById("lastUpdated").innerHTML = dateString;
