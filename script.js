document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".errorClass").forEach(function (element) {
        element.innerHTML = "";
    });
    
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("c-password").value;

    var isValid = true;

    if (fullName.length < 3) {
        document.getElementById("error-name").innerHTML = "*Name is too short";
        isValid = false;
    }

    var atposition = email.indexOf('@');
    var dotposition = email.indexOf('.');
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        document.getElementById("error-email").innerHTML = "*Email must be valid and contain '@' and '.'";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("error-pass").innerHTML = "*Password should be at least 6 characters long";
        isValid = false;
    }

    if (confirmPassword !== password) {
        document.getElementById("error-cpass").innerHTML = "*Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});