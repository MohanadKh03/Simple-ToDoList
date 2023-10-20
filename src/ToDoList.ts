import { ToDo } from './ToDo.js'

export class ToDoList{
    private toDoList: Array<ToDo>
    constructor(){
        this.toDoList = new Array()
    }

    addTask(id: number, title: string,deadlineHours: number): void{
        let newTask: ToDo = new ToDo(id,title,false,deadlineHours)
        this.toDoList.push(newTask)
    }
    deleteTask(taskNumber: number): void{
        let taskIndex: number = taskNumber-1
        if(taskIndex >= 0 && taskIndex < this.toDoList.length)
            this.toDoList.splice(taskIndex,1)
        else
            console.error("Index out of bounds!")
    }
    markTaskAsCompleted(taskNumber: number): void{
        let taskIndex: number = taskNumber-1
        if(taskIndex >= 0 && taskIndex < this.toDoList.length){
            let element: ToDo = this.toDoList[taskIndex]
            element.completed = true
        }
        else
            console.error("Index out of bounds!") 
    }
    printTasks(): void{
        this.toDoList.forEach((task:ToDo) => {
            console.log(task)
        })
    }
}