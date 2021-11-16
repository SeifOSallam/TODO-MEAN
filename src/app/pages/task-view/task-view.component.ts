import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  Tasks:any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((Tasks: any) => {
      this.Tasks=Tasks;
    })
  }
  createNewTask(taskContent: string){
    return this.taskService.createTask(taskContent).subscribe((response: any) =>{
      console.log(response);
    })
  }

}
