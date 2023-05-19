const studyList = document.querySelector('ul');
const whatStudy = document.querySelector('input');
const addSubject = document.querySelector('button');

addSubject.addEventListener('click', () => {
    const mySubject = whatStudy.value.trim();
    if (mySubject === '') {
        return;
    }
    whatStudy.value = '';

    const listSubject = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listSubject.appendChild(listText);
    listText.textContent = mySubject;
    listSubject.appendChild(listBtn);
    listBtn.textContent = '❌';
    studyList.appendChild(listSubject);

    listBtn.addEventListener('click', () => {
        studyList.removeChild(listSubject);
    });

    whatStudy.focus();
});

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