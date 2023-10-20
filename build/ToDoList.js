import { ToDo } from './ToDo.js';
export class ToDoList {
    constructor() {
        this.toDoList = new Array();
    }
    addTask(id, title, deadlineHours) {
        let newTask = new ToDo(id, title, false, deadlineHours);
        this.toDoList.push(newTask);
    }
    deleteTask(taskNumber) {
        let taskIndex = taskNumber - 1;
        if (taskIndex >= 0 && taskIndex < this.toDoList.length)
            this.toDoList.splice(taskIndex, 1);
        else
            console.error("Index out of bounds!");
    }
    markTaskAsCompleted(taskNumber) {
        let taskIndex = taskNumber - 1;
        if (taskIndex >= 0 && taskIndex < this.toDoList.length) {
            let element = this.toDoList[taskIndex];
            element.completed = true;
        }
        else
            console.error("Index out of bounds!");
    }
    printTasks() {
        this.toDoList.forEach((task) => {
            console.log(task);
        });
    }
}
