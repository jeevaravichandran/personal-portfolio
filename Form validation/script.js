//password show and hide function
function togglePassword(inputId) {

    var passwordInput = document.getElementById(inputId)
    var toggleIcon = document.querySelector(`#${inputId}+ .toggle-password`)

    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        toggleIcon.classList.remove("fa-eye-slash")
        toggleIcon.classList.add("fa-eye")
    }
    else {
        passwordInput.type = "password"
        toggleIcon.classList.remove("fa-eye")
        toggleIcon.classList.add("fa-eye-slash")
    }

}

//Signup form Validation

function validateSignupForm() {
    var fullname = document.getElementById("fullname").value.trim()
    var email = document.getElementById("email").value.trim()
    var password = document.getElementById("password").value.trim()
    var confirmPassword = document.getElementById("confirmPassword").value.trim()

    //Email regular expression
    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,}$/

    //password regular expression
    var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/

    if (fullname === "") {
        document.querySelector(".error-message").textContent = "*Enter a Valid Name"
        return false
    }
    else if (!emailregex.test(email)) {
        document.querySelector(".error-message").textContent = "*Invalid Email address"
        return false

    }
    else if (!passwordregex.test(password)) {
        document.querySelector(".error-message").textContent = "*Password must be at least 8 characters long and include an uppercase letter, a lowercase letter,a number and special character."
        return false

    }

    else if (password !== confirmPassword) {
        document.querySelector(".error-message").textContent = "*Password do not match."
        return false
    }

    else {
        document.getElementById("signupForm").reset()
        return true
    }
}

//Login form validation

function validateLoginForm() {
    var email = document.getElementById("email").value.trim()
    var password = document.getElementById("password").value.trim()


    //Email regular expression
    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,}$/
    //password regular expression
    var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/

    if (!emailregex.test(email)) {
        document.querySelector(".error-message").textContent = "*Invalid Email address"
        return false

    }
    else if (!passwordregex.test(password)) {
        document.querySelector(".error-message").textContent = "*Password Incorrect."
        return false
    }

    else {
        return true

    }

}

//ForgotPassword form validation

function validateForgotForm() {
    var email = document.getElementById("email").value.trim()
    //Email regular expression
    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,}$/


    if (!emailregex.test(email)) {
        document.querySelector(".error-message").textContent = "*Invalid Email address"
        return false

    }

    else {
        return true
    }

}

//Newpassword form validation

function validateNewpasswordForm() {
    event.preventDefault()
    var password = document.getElementById("password").value.trim()
    var confirmPassword = document.getElementById("confirmPassword").value.trim()

    //password regular expression
    var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/


    if (!passwordregex.test(password)) {
        document.querySelector(".error-message").textContent = "*Password must be at least 8 characters long and include an uppercase letter, a lowercase letter,a number and special character."
        return false

    }

    else if (password !== confirmPassword) {
        document.querySelector(".error-message").textContent = "*Password do not match."
        return false
    }

    else {
        setTimeout(function(){
        document.querySelector(".password-layer").style.display = "block"
        document.querySelector(".password-msg").style.display = "block"
    },1000)
        return true
    }

}

//close popup layer

function closepopup() {
    document.querySelector(".password-layer").style.display = "none"
    document.querySelector(".password-msg").style.display = "none"
}