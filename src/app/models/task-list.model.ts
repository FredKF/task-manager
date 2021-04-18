import { Task } from "./task.model";

export interface TaskList{
    name: string;
    taskItemList: Task[];
}