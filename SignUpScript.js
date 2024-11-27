document.querySelector("form").addEventListener("submit", (event) => {
    const cnicField = document.getElementById("cnic");
    const cnicValue = cnicField.value.trim();

    const passwordField = document.getElementById("signup-password");
    const passwordValue = passwordField.value.trim();

    const confirmPasswordField = document.getElementById("confirm-password");
    const confirmPasswordValue = confirmPasswordField.value.trim();

        let valid = true;

    // CNIC Validation: Must be 13 digits
    if (!/^\d{13}$/.test(cnicValue)) {
        alert("CNIC must be exactly 13 numeric digits.");
        cnicField.focus();
        valid = false;
    }

    // Password Validation: At least 1 uppercase, 1 lowercase, 1 digit, 1 special character, and at least 8 characters
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordPattern.test(passwordValue)) {
        alert(
            "Password must contain at least:\n- One uppercase letter\n- One lowercase letter\n- One digit\n- One special character\n- Minimum 8 characters"
        );
        passwordField.focus();
        valid = false;
    }

    // Confirm Password Validation: Passwords must match
    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match. Please check again.");
        confirmPasswordField.focus();
        valid = false;
    }

    // Prevent form submission if any validation fails
    if (!valid) {
        event.preventDefault();
    }
});
