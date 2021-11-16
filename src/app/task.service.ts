import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }
  createTask(task: string) {
    // We want to send a web request to create a task
    return this.webReqService.post('api/tasks', { task });
  }

  getTasks() {
    return this.webReqService.get('api/tasks');
  }
}
