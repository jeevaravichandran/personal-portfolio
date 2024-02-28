// open  sidenavbar when we click the sidebar

function opensidenav() {

    document.querySelector(".sidenavbar-links").style.left = "0"
}

// close sidebar when we click the closebar

function closesidenav() {

    document.querySelector(".sidenavbar-links").style.left = "-60%"
}

// Search functionality when we click on searchbar

var enteredText = ""
var search = document.getElementById("search")
var fooditems = document.querySelector(".food-items")
var items = fooditems.querySelectorAll(".food-item")

search.addEventListener("input", function (event) {
    enteredText = event.target.value.toUpperCase()

    let hasMatch = false;

    for (count = 0; count < items.length; count++) {
        var itemlist = items[count].querySelector("h3").textContent.toUpperCase()

        if (itemlist.indexOf(enteredText) >= 0) {
            items[count].style.display = "block"
            hasMatch = true;
        }
        else {
            items[count].style.display = "none"
        }
    }
    // Show or hide the error message based on whether there is a match
    document.querySelector(".unavail").style.display = hasMatch ? "none" : "block";
})


// contact page Form validation

function formvalidation(event) {
    event.preventDefault()
    var name = document.getElementById("name").value.trim()
    var email = document.getElementById("email").value.trim()
    var subject = document.getElementById("subject").value.trim()
    var message = document.getElementById("message").value.trim()

    //Reguralar Expression of Email
    var emailregx = /^[\w - \.]+@([\w -]+\.)+[\w -]{2,}$/

    //Username validation

    if (name === "") {

        document.getElementById("uname-lbl").innerHTML = "*Enter a Valid Name"
        document.getElementById("uname-lbl").style.color = "red"
        return false
    }

    //Email validation

    else if (!emailregx.test(email)) {
        document.getElementById("email-lbl").innerHTML = "*Enter a Valid Email"
        document.getElementById("email-lbl").style.color = "red"
        return false

    }

    //Subject Validation

    else if (subject === "") {
        document.getElementById("subject-lbl").innerHTML = "*Write a Subject"
        document.getElementById("subject-lbl").style.color = "red"
        return false

    }

    //Message Validation

    else if (message === "") {
        document.getElementById("message-lbl").innerHTML = "*Write Something Below"
        document.getElementById("message-lbl").style.color = "red"
        return false
    }
    // Form Validation and Show Popup Layer and Popup message
    else {
        setTimeout(function () {
            document.querySelector(".overlay-response").style.display = "flex"
        }, 1000)
        return true
    }



}


//Close Popup Layer and Popup Message

function closepopupresponse() {
    document.querySelector(".overlay-response").style.display = "none"
    document.getElementById("contact-info").reset()
}


// Book Table Form Validation

function booktablevalidation(event) {
    event.preventDefault()
    var bookName = document.getElementById("book-name").value.trim()
    var bookMail = document.getElementById("book-mail").value.trim()
    var bookPhone = document.getElementById("book-phone").value.trim()
    var bookDate = document.getElementById("book-date").value.trim()
    var bookTime = document.getElementById("book-time").value.trim()
    var bookSeats = document.getElementById("book-seats").value.trim()
    var specialRequests = document.getElementById("special-requests").value.trim()



    //Email Regular Expression

    var bookMailRegx = /^[\w - \.]+@([\w -]+\.)+[\w -]{2,}$/

    //Phone Number Regular Expression

    var bookPhoneRegx = /^[6 7 8 9]\d{9}$/

    //Username Validation
    if (bookName === "") {
        document.getElementById("book-name-lbl").innerHTML = "*Enter a Valid Name"
        document.getElementById("book-name-lbl").style.color = "red"
        return false
    }

    //Email Validation
    else if (!bookMailRegx.test(bookMail)) {
        document.getElementById("book-mail-lbl").innerHTML = "*Enter a Valid Email"
        document.getElementById("book-mail-lbl").style.color = "red"
        return false
    }

    //Phone Number Validation

    else if (!bookPhoneRegx.test(bookPhone)) {
        document.getElementById("book-phone-lbl").innerHTML = "*Enter a Valid Number"
        document.getElementById("book-phone-lbl").style.color = "red"
        return false
    }

    //Date Validation

    else if (bookDate === "") {
        document.getElementById("book-date-lbl").innerHTML = "*Please Choose a Date"
        document.getElementById("book-date-lbl").style.color = "red"
        return false
    }


    //Time Validation

    else if (bookTime === "") {
        document.getElementById("book-time-lbl").innerHTML = "*Please Choose a Time"
        document.getElementById("book-time-lbl").style.color = "red"
        return false
    }


    //Seats  Validation

    else if (bookSeats === "") {
        document.getElementById("book-seats-lbl").innerHTML = "*Please Enter How many seats you want "
        document.getElementById("book-seats-lbl").style.color = "red"
        return false
    }

    else {

        var bookingInfo = document.createElement("span")
        bookingInfo.setAttribute("class", "booking-information")
        bookingInfo.innerHTML = `<table>
                                    <tr>
                                        <td>Name</td><td>:</td><td>${bookName}</td>
                                    </tr>
                                    <tr>
                                        <td>Mail</td><td>:</td><td>${bookMail}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td><td>:</td><td>${bookPhone}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td><td>:</td><td>${bookDate}</td>
                                    </tr>
                                    <tr>
                                        <td>Time</td><td>:</td><td>${bookTime}</td>
                                    </tr>
                                    <tr>
                                        <td>Seats</td><td>:</td><td>${bookSeats}</td>
                                    </tr>
                                </table>`
        document.getElementById("booking-user-info").append(bookingInfo)
        setTimeout(function () {
            document.querySelector(".overlay-booking").style.display = "flex"
        }, 1000)

        return true
    }

}

// Close Booking Confirmation 

function closepopupbooking() {
    document.querySelector(".overlay-booking").style.display = "none"
    document.querySelector(".booking").style.display = "none"
    document.getElementById("booking-info-form").reset()

}
