import { Task } from "../models/task.js"

import { TaskList } from "../models/task-list.js"

const getElement = (id) => document.getElementById(id)

const taskToDo = new TaskList()

// Render giao diện
const renderTaskList = (arr, selector) => {
    const content = arr.reduce((value, task) => {
        return value += `
        <li>
            <span>${task.newTask}</span>
            <div class="buttons">
                <button class="remove" onclick = "removeTask('${task.newTask}')">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button class="complete" onclick = "completeTask('${task.newTask}')">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
        </li>
        
        `
    }, '')
    getElement(selector).innerHTML = content
}
// Thêm task
getElement("addItem").onclick = () => {
    let newTask = getElement("newTask").value;
    // console.log(newTask);
    const task = new Task()
    task.newTask = newTask


    if (taskToDo.checkTask(task)) {
        alert('Công việc đã có, mời thêm công việc khác !')
        return
    }

    // else if ((taskToDo.checkTask(task) === ' ') ) {
    //     alert('Công việc không để trống !')
    //     return
    // }
    taskToDo.addTask(task)

    renderTaskList(taskToDo.taskUnComplete, 'todo')
    renderTaskList(taskToDo.taskComplete, 'completed')
}


// Đánh dấu các việc đã xong
window.completeTask = (newTask) => {
    taskToDo.completeTask(newTask)
    renderTaskList(taskToDo.taskUnComplete, 'todo')
    renderTaskList(taskToDo.taskComplete, 'completed')
}

// Xóa các việc cần làm
window.removeTask = (newTask) => {
    taskToDo.removeTask(newTask)
    renderTaskList(taskToDo.taskUnComplete, 'todo')
    renderTaskList(taskToDo.taskComplete, 'completed')

}

// Sắp xếp tên các việc cần làm từ A - Z
getElement('two').onclick = () => {
    renderTaskList(taskToDo.sortUnCompleteAtoZ(), 'todo')
    renderTaskList(taskToDo.sortCompleteAtoZ(), 'completed')
}

// Sắp xếp tên các việc cần làm từ Z - A
getElement('three').onclick = () => {
    renderTaskList(taskToDo.sortUnCompleteZtoA(), 'todo')
    renderTaskList(taskToDo.sortCompleteZtoA(), 'completed')
}