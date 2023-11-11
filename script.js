const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('.list-container')
const addButton = document.querySelector('#button')
addButton.addEventListener('click', addTask)

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } 
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function addTask() {
    if(inputBox.value === '') {
        alert("Vous devez entrez une tâche")
    } else {
        const li = document.createElement('li')
        li.innerHTML = inputBox.value
        li.classList.add('list-item')
        listContainer.prepend(li)
        const span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.append(span)
        inputBox.value = ''
        saveData()
    }
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()

