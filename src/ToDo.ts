export class ToDo{
    constructor
    (public id: number,
    public title: string,
    public completed: boolean = false,
    public deadlineHours: number){}
}