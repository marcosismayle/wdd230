// Date and time join form was loaded

document.addEventListener("DOMContentLoaded", function() {
    const formDate = document.getElementById("form-date");
    const now = new Date();
    const formattedDateTime = now.toLocaleString();

    formDate.textContent = "Form loaded at: " + formattedDateTime;
});