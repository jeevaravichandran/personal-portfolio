
//Add the todo list in the list Container

function add() {
    var list = document.getElementById("listContainer")
    var inputValue = document.getElementById("input-Value")
    if (inputValue.value === "") {
        alert("Write Something into the Input Field")
    }
    else {
        var listitem = document.createElement("li")
        listitem.setAttribute("class", "list-item")
        listitem.innerHTML = `<i class="fa-sharp fa-regular fa-circle circle-checked" onclick="taskComplete(event)"></i>` + `${inputValue.value}` + `<i class="fa-solid fa-trash-can" onclick="deleteitem(event)" id="deleteIcon"></i>`
        list.append(listitem)
        inputValue.value = ""
        saveData()
    }

}

// Delete function when we want to delete that task

function deleteitem(event) {
    event.target.parentElement.remove()
    saveData()
}


// Task complete function strikout the task when we complete it

function taskComplete(event) {
    var circleCheck = event.target
    circleCheck.classList.remove("fa-circle")
    circleCheck.classList.add("fa-circle-check")
    event.target.parentElement.classList.add("completed")
    saveData()

}

// Store the updated data into the local storage 

function saveData() {
    localStorage.setItem("todoList-data", listContainer.innerHTML)
}

//Show the updated data when we open the browser 

function showData() {
    listContainer.innerHTML = localStorage.getItem("todoList-data")
}

showData()
