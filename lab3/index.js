import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://applab3-6d122-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const tasksInDB = ref(database, "tasks")

const taskNameEl = document.getElementById("task-name")
const taskDeadlineEl = document.getElementById("task-deadline")
const taskCategoryEl = document.getElementById("task-category")
const addTaskButtonEl = document.getElementById("add-task-button")
const taskListEl = document.getElementById("task-list")
const tabButtons = document.querySelectorAll(".tab-button")

let currentCategory = "all"  // За замовчуванням всі завдання

// Додаємо нове завдання
addTaskButtonEl.addEventListener("click", function() {
    let taskName = taskNameEl.value
    let taskDeadline = taskDeadlineEl.value
    let taskCategory = taskCategoryEl.value
    
    if (taskName && taskDeadline && taskCategory) {
        // Додаємо завдання до Firebase
        push(tasksInDB, {
            name: taskName,
            deadline: taskDeadline,
            category: taskCategory,
            completed: false
        })

        clearInputFields()
    } else {
        alert("Please fill out all fields")
    }
})

// Завантажуємо завдання з Firebase
onValue(tasksInDB, function(snapshot) {
    if (snapshot.exists()) {
        let tasksArray = Object.entries(snapshot.val())
        
        clearTaskListEl()

        // Фільтруємо завдання по категорії
        tasksArray.forEach(task => {
            let taskId = task[0]
            let taskData = task[1]
            
            // Перевірка на поточну категорію
            if (currentCategory === "all" || taskData.category === currentCategory) {
                appendTaskToTaskListEl(taskId, taskData)
            }
        })
    } else {
        taskListEl.innerHTML = "No tasks added yet."
    }
})

// Очищаємо список завдань
function clearTaskListEl() {
    taskListEl.innerHTML = ""
}

// Очищаємо поля вводу після додавання завдання
function clearInputFields() {
    taskNameEl.value = ""
    taskDeadlineEl.value = ""
    taskCategoryEl.value = "Work"
}

// Додаємо завдання в список
function appendTaskToTaskListEl(taskId, taskData) {
    let newEl = document.createElement("li")
    
    newEl.textContent = `${taskData.name} (Deadline: ${taskData.deadline}, Category: ${taskData.category})`
    
    // Кнопка для видалення завдання
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", function() {
        let taskRef = ref(database, `tasks/${taskId}`)
        remove(taskRef)
    })
    
    newEl.append(deleteButton)

    // Кнопка для зміни статусу виконаного/невиконаного
    let toggleButton = document.createElement("button")
    toggleButton.textContent = taskData.completed ? "Compledet!" : "Mark as Completed"
    toggleButton.addEventListener("click", function() {
        let taskRef = ref(database, `tasks/${taskId}`)
        set(taskRef, {
            ...taskData,
            completed: !taskData.completed
        })
    })
    
    newEl.append(toggleButton)
    
    taskListEl.append(newEl)
}

// Перемикання між вкладками
tabButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Оновлюємо категорію
        currentCategory = button.dataset.category
        
        // Оновлюємо активну вкладку
        tabButtons.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active")
        
        // Перезавантажуємо список завдань згідно з новою категорією
        onValue(tasksInDB, function(snapshot) {
            if (snapshot.exists()) {
                let tasksArray = Object.entries(snapshot.val())
                
                clearTaskListEl()
                
                tasksArray.forEach(task => {
                    let taskId = task[0]
                    let taskData = task[1]
                    
                    if (currentCategory === "all" || taskData.category === currentCategory) {
                        appendTaskToTaskListEl(taskId, taskData)
                    }
                })
            } else {
                taskListEl.innerHTML = "No tasks added yet."
            }
        })
    })
})

flatpickr("#task-deadline", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today" // Опціонально: заборона вибору минулих дат
});