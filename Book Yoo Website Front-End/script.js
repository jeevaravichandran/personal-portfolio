//Open and Close Sidenavbar

function opensidenav() {
    document.querySelector(".sidenav-bar").style.left = "0"
}

function closesidenav() {
    document.querySelector(".sidenav-bar").style.left = "-70%"
}

//Add popup layer and popup message when we click a add button

let addpopup = document.getElementById("add-popup")

addpopup.addEventListener("click", function () {
    document.querySelector(".popup-layer").style.display = "flex"
})

//prevent the forms default action & cancel the popup message and layer
let cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function () {
    event.preventDefault()
    document.querySelector(".popup-layer").style.display = "none"

})

//Add the userinput into the container when click the add button

var container = document.querySelector(".container")
let booktitleinput = document.getElementById("book-title-input")
let bookauthorinput = document.getElementById("book-author-input")
let bookdescriptioninput = document.getElementById("book-description-input")
let addbook = document.getElementById("add-book")

addbook.addEventListener("click", function () {
    event.preventDefault()
    let div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletepopupmsg(event)" id="delete-popup">Delete</button>`
    container.append(div)
    saveData();
    document.querySelector(".popup-layer").style.display = "none"
    document.querySelector("#popup-form").reset()

})

//Delete popup when cick the delete button

let deletepopup = document.getElementById("delete-popup")

function deletepopupmsg(event) {
    event.target.parentElement.remove()
    saveData()
}


//Store the information in local storage

function saveData() {
    localStorage.setItem("data", container.innerHTML)
}

// Show the stored data whenever we use this website after and anychanges in this website

function showData() {
    container.innerHTML = localStorage.getItem("data")
}

showData()
