document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("successPopup");
    const closePopup = document.querySelector(".close-popup");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const successMessage = document.getElementById("successMessage");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show loading spinner
        loadingSpinner.style.display = "block";
        successMessage.style.display = "none";
        popup.style.display = "flex";

        // Get form data
        const formData = new FormData(form);

        // Send form data using Fetch API (AJAX)
        fetch("https://www.formbackend.com/f/2090050a3bce2d75", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Hide loading spinner and show success message
                    loadingSpinner.style.display = "none";
                    successMessage.style.display = "block";
                    form.reset(); // Clear the form
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Oops! Something went wrong. Please try again.");
                popup.style.display = "none"; // Hide popup on error
            });
    });

    // Close popup when clicking the close button
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
});

fetch("https://www.formbackend.com/f/2090050a3bce2d75", {
    method: "POST",
    body: formData,
})
    .then((response) => {
        if (response.ok) {
            // Hide loading spinner and show success message
            document.getElementById("loadingSpinner").style.display = "none";
            document.getElementById("successMessage").style.display = "block";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Oops! Something went wrong. Please try again.");
    });