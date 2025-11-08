const taskInput = document.getElementById("taskinput")
const addTaskBtn =document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")
const clearAllBtn = document.getElementById("clearAll")

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function rendertask(){
    taskList.innerHTML=''
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className="flex justify-between item-center bg-gray-100 p-2 rounded-lg "

        const taskText = document.createElement("span")
        taskText.textContent = task.text;
        if(task.completed){
            taskText.classList.add('line-through','text-gray-400')
        }

        const btnGroup = document.createElement("div")

        const completeBtn =document.createElement("button");
        completeBtn.textContent = task.completed ? 'Undo' : 'Done'
        completeBtn.className = "text-green-600 hover:underline mr-2"
        completeBtn.onclick = () => toggleTask(index)

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent=" X "
        deleteBtn.className="text-red-600 hover:underline"
        deleteBtn.onclick = () => deleteTask(index)

        btnGroup.appendChild(completeBtn);
        btnGroup.appendChild(deleteBtn)

        li.appendChild(taskText)
        li.appendChild(btnGroup)

    });

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

addTaskBtn.addEventListener('click', ()=>{
    const text = taskInput.value.trim()
    if(text == '') return alert('please enter a task ');
    tasks.push({text, completed:'false'})
    taskInput.value='';
    rendertask();
})

function toggleTask(){
    tasks[index].completed = !tasks[index].completed
    rendertask()
}

function deleteTask(){
    tasks.split(index, 1)
    rendertask()
}


clearAllBtn.addEventListener('click', ()=>{
    if(confirm('Are you sure you want to clear all tasks ?')){
        tasks=[]
        rendertask()
    }
})

rendertask();