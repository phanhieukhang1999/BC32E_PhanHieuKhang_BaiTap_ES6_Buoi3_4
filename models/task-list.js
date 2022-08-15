export class TaskList {
    constructor() { }
    taskUnComplete = []
    taskComplete = []

    checkTask(task) {
        const checkUnComplete = this.taskUnComplete.find(check => check.newTask === task.newTask)
        const checkComplete = this.taskComplete.find(check => check.newTask === task.newTask)
        if (checkUnComplete !== undefined || checkComplete !== undefined) {
            return true
        } 
    }

    addTask(task) {
        //ES6 - sử dụng spead operator
        this.taskUnComplete = [...this.taskUnComplete, task]
    }

    completeTask(newTask) {
       
        const taskComleted = this.taskUnComplete.find(task => task.newTask === newTask)
        const taskUnComleted = this.taskComplete.find(task => task.newTask === newTask)
        if (taskComleted !== undefined) {
            this.taskComplete = [...this.taskComplete, taskComleted]
            this.taskUnComplete = this.taskUnComplete.filter(task => task.newTask !== newTask)
        } else {
            this.taskUnComplete = [...this.taskUnComplete, taskUnComleted]
            this.taskComplete = this.taskComplete.filter(task => task.newTask !== newTask)
        }

    }

    removeTask(newTask) {
        this.taskUnComplete = this.taskUnComplete.filter(task => task.newTask !== newTask)
        this.taskComplete = this.taskComplete.filter(task => task.newTask !== newTask)
    }
    // Sắp xếp tên các việc từ A - Z
    // Uncomplete
    sortUnCompleteAtoZ() {
        const unComplete = [...this.taskUnComplete]
        unComplete.sort((a, b) => (a.newTask > b.newTask) ? 1 : -1)
        return unComplete
    }

    // Complete
    sortCompleteAtoZ() {
        const complete = [...this.taskComplete]
        complete.sort((a, b) => (a.newTask > b.newTask) ? 1 : -1)
        return complete
    }

    // Sắp xếp tên các việc từ Z - A
    // Uncomplete
    sortUnCompleteZtoA() {
        const unComplete = [...this.taskUnComplete]
        unComplete.sort((a, b) => (a.newTask > b.newTask) ? -1 : 1)
        return unComplete
    }

    // Complete
    sortCompleteZtoA() {
        const complete = [...this.taskComplete]
        complete.sort((a, b) => (a.newTask > b.newTask) ? -1 : 1)
        return complete
    }
}