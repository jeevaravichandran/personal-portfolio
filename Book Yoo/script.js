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
    document.querySelector(".popup-layer").style.display = "block"
    document.querySelector(".popup-message").style.display = "block"
})

//prevent the forms default action & cancel the popup message and layer
let cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function () {
    event.preventDefault()
    document.querySelector(".popup-layer").style.display = "none"
    document.querySelector(".popup-message").style.display = "none"

})

//Add the userinput into the container when click the add button

let container = document.querySelector(".container")
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
    document.querySelector(".popup-layer").style.display = "none"
    document.querySelector(".popup-message").style.display = "none"


})

//Delete popup when cick the delete button

let deletepopup = document.getElementById("delete-popup")

function deletepopupmsg(event) {
    event.target.parentElement.remove()
}