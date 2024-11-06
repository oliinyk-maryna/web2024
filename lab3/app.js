// Імпортуємо необхідні функції Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, get, push, remove, update } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Ваші налаштування Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWzYY4WuqsXbLZG9xlwgFdPH4GrSyZ7WU",
  authDomain: "applab3-6d122.firebaseapp.com",
  projectId: "applab3-6d122",
  storageBucket: "applab3-6d122.firebasestorage.app",
  messagingSenderId: "697736236346",
  appId: "1:697736236346:web:e2409f819ae4647bc39403",
  measurementId: "G-WMD8DG68F9"
};

// Ініціалізуємо Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Посилання на елементи в HTML
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const dbRef = ref(database, 'tasks');

// Додавання нової задачі
function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    const newTaskRef = push(dbRef); // Додавання нової задачі
    set(newTaskRef, {
      name: taskName,
      done: false
    });
    taskInput.value = ''; // Очищення поля вводу
  }
}

// Виведення задач з Firebase
function loadTasks() {
  get(dbRef)
    .then((snapshot) => {
      taskList.innerHTML = ''; // Очищення списку
      snapshot.forEach((childSnapshot) => {
        const task = childSnapshot.val();
        const li = document.createElement('li');
        li.textContent = task.name;

        // Відмітка про виконання
        if (task.done) {
          li.classList.add('done');
        }

        const removeButton = document.createElement('span');
        removeButton.textContent = '❌';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => deleteTask(childSnapshot.key);

        const doneButton = document.createElement('button');
        doneButton.textContent = task.done ? 'Undo' : 'Done';
        doneButton.onclick = () => toggleDone(childSnapshot.key, task.done);

        li.appendChild(doneButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error loading tasks:", error);
    });
}

// Видалення задачі
function deleteTask(taskId) {
  const taskRef = ref(database, 'tasks/' + taskId);
  remove(taskRef);
}

// Зміна статусу виконання задачі
function toggleDone(taskId, currentStatus) {
  const taskRef = ref(database, 'tasks/' + taskId);
  update(taskRef, {
    done: !currentStatus
  });
}

// Завантаження задач при старті
loadTasks();
