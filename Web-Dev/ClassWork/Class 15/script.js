let addButton = document.querySelector(".add")
let tasks = document.querySelector(".tasks")
let total = document.querySelector(".all")
let completed = document.querySelector(".comp")
let buttons = document.querySelector(".buttons")

function updateCounts() {
    const allTasks = tasks.querySelectorAll('.task')
    const completedTasks = tasks.querySelectorAll('.task.completed')
    total.textContent = allTasks.length
    completed.textContent = completedTasks.length
}

function createTaskItem(text) {
    const container = document.createElement('div')
    container.className = 'task'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'task-checkbox'

    const label = document.createElement('span')
    label.className = 'task-text'
    label.textContent = text

    container.appendChild(checkbox)
    container.appendChild(label)

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) container.classList.add('completed')
        else container.classList.remove('completed')
        updateCounts()
    })

    label.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked
        checkbox.dispatchEvent(new Event('change'))
    })

    return container
}

addButton.addEventListener("click", function(){
    const textInput = document.querySelector(".input")
    const value = textInput.value.trim()
    if (!value) return
    const item = createTaskItem(value)
    tasks.appendChild(item)
    textInput.value = ''
    updateCounts()
})

// Allow adding with Enter key
const inputField = document.querySelector('.input')
inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addButton.click()
})

// Filter buttons: ALL / COMPLETED / PENDING
buttons.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return
    const filter = e.target.textContent.trim().toUpperCase()
    const allItems = tasks.querySelectorAll('.task')
    allItems.forEach(item => item.style.display = '')

    if (filter === 'COMPLETED') {
        allItems.forEach(item => { if (!item.classList.contains('completed')) item.style.display = 'none' })
    } else if (filter === 'PENDING') {
        allItems.forEach(item => { if (item.classList.contains('completed')) item.style.display = 'none' })
    }
})