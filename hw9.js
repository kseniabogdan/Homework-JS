"use strict"

function addToDoList() {
    const input = document.querySelector('.input')
    const button = document.querySelector('.button')

    input.addEventListener('change', addTask)

    button.addEventListener('click', deleteTask)


    function addTask(elem) {
        console.log(elem.target.value);
        const value = elem.target.value

        if(!value.trim()) return alert('You haven\'t created a task')

        const taskContainer = document.createElement('div')
        taskContainer.className = 'taskContainer'

        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.className = 'checkbox'

        const task = document.createElement('span')
        task.className = 'task'
        task.innerHTML = value

        taskContainer.append(checkbox, task)
    
        const tasks = document.querySelector('.tasks')
        tasks.prepend(taskContainer)

        input.value = ''
        
        checkbox.addEventListener('click', checkTask)

        task.addEventListener('click', chengeTask)
}

function checkTask(){
    this.nextSibling.classList.toggle('active')
}

function chengeTask(elem){
    elem.target.innerHTML = prompt("Change your task", elem.target.textContent) 
}

function deleteTask(){
    const deleteElements = document.querySelector('.tasks')
    deleteElements.innerHTML = ' '
}
}

addToDoList()