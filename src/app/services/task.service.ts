import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';
// import { TASKS } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   apiURL = "http://localhost:5000/tasks"
  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL)
    //  const tasks = of(TASKS)
    //  return tasks
  }

  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return  this.http.delete<Task>(url)
  }

  updateTask(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url,task)
  }

  addTask(task:Task):Observable<Task>{
   return this.http.post<Task>(this.apiURL,task)
  }

}
