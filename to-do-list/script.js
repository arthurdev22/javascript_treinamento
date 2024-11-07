// Selecionando os elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Array para armazenar as tarefas
let tasks = [];

// Função para renderizar a lista de tarefas
function renderTasks() {
    taskList.innerHTML = ""; // Limpa a lista antes de renderizar

    // Usando forEach para percorrer cada tarefa e criar um item de lista (li)
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Botão de remoção para cada tarefa
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X";
        deleteBtn.style.float = "right";
        deleteBtn.onclick = () => removeTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Função para adicionar uma nova tarefa
function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task); // Adiciona a tarefa ao array
        taskInput.value = ""; // Limpa o campo de input
        renderTasks(); // Renderiza a lista atualizada
    }
}

// Função para remover uma tarefa
function removeTask(index) {
    tasks.splice(index, 1); // Remove a tarefa do array
    renderTasks(); // Renderiza a lista atualizada
}

// Evento de clique para o botão de adicionar
addTaskBtn.onclick = addTask;

// Renderiza a lista inicialmente
renderTasks();
