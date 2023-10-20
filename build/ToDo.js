export class ToDo {
    constructor(id, title, completed = false, deadlineHours) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.deadlineHours = deadlineHours;
    }
}
