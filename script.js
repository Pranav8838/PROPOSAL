// Function to validate login form
function validateLogin() {
    const emailPhone = document.getElementById('email-phone').value;
    const password = document.getElementById('password').value;

    if (emailPhone === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Check if the input is a valid email or phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(emailPhone) || phoneRegex.test(emailPhone)) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard after successful login
    } else {
        alert("Please enter a valid email or phone number.");
    }
}

// Function to validate sign-up form
function validateSignUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;

    if (name === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert("Sign up successful!");
    window.location.href = "index.html"; // Redirect to login page after sign-up
}