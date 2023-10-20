import {ToDoList} from "./ToDoList.js"

let taskList: ToDoList = new ToDoList()
taskList.addTask(1,"task1",19)
taskList.addTask(2,"task2",13)
taskList.addTask(3,"task3",25)
taskList.addTask(4,"task4",20)
taskList.addTask(5,"task5",37)

console.log("BEFORE:\n");

taskList.printTasks()
taskList.markTaskAsCompleted(2)
taskList.deleteTask(4)

console.log("AFTER:\n");
taskList.printTasks()

