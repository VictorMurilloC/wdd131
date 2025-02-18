document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Simple alert on invoice submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            alert("Thank you! Your invoice request has been submitted.");
        });
    }
});