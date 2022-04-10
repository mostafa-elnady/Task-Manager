import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private taskServices: TaskService) {}

  ngOnInit(): void {
    this.taskServices.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  tasks: Task[] = [];
//delete task
  deleteTask(task: Task) {
    this.taskServices
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
//toggle reminder
  toggleReminder(task:Task) {
    task.reminder = !task.reminder
    this.taskServices.updateTask(task).subscribe();

  }

  //add task
  addTask(task:Task){
    this.taskServices.addTask(task).subscribe(task=>{
      this.tasks.push(task)
    })
  }

}
