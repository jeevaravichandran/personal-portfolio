//Open and Close Sidenavbar

function opensidenav() {
    document.querySelector(".sidenav-bar").style.left = "0"
}

function closesidenav() {
    document.querySelector(".sidenav-bar").style.left = "-70%"
}


// Search Functionality

var enteredText = "";

var search = document.getElementById("search");
var container = document.querySelector(".container");
var bContainer = container.querySelectorAll(".book-container");

search.addEventListener("input", function (event) {
    enteredText = event.target.value.toUpperCase();

    let hasMatch = false;

    for (let count = 0; count < bContainer.length; count++) {
        var bContainerList = bContainer[count].querySelector("h3").textContent.toUpperCase();

        if (bContainerList.indexOf(enteredText) >= 0) {
            bContainer[count].style.display = "block";
            hasMatch = true;
        } else {
            bContainer[count].style.display = "none";
        }
    }

    // Show or hide the error message based on whether there is a match
    document.querySelector(".error-msg").style.display = hasMatch ? "none" : "block";
});
