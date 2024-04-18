// Initialize Firebase with your config
firebase.initializeApp({
    apiKey: "AIzaSyDNTAIZrCnXLAHbN68QtyEPWkXoXvwy3Zo",
    authDomain: "ty-web-84836.firebaseapp.com",
    projectId: "ty-web-84836",
    storageBucket: "ty-web-84836.appspot.com",
    messagingSenderId: "179273185588",
    appId: "1:179273185588:web:6636dd209657b1fa88cd61",
    measurementId: "G-1BHSC6MG3D"
});

const db = firebase.firestore();

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();
    if (task !== "") {
        db.collection("tasks").add({
            task: task,
            timestamp: firebase.firestore. FieldValue.serverTimestamp(),
        });
        taskInput.value = "";
        console.log("Task added.");
    }
}

// Function to render tasks

function renderTasks(doc) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task-item"
    taskItem.innerHTML = `
    <span>${doc.data().task}</span>
    <button onclick="deleteTask('${doc.id}')">Delete</button>
    `;
    taskList.appendChild(taskItem);

}

// Real-time listener for tasks
db.collection("tasks")
.orderBy("timestamp", "desc")
.onSnapshot(snapshot => {
    const changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type === "added") {
            renderTasks(change.doc);
        }
    });
});

// Function to delete a task

function deleteTask(id) {
    db.collection("tasks").doc(id).delete();
    location.reload();
}