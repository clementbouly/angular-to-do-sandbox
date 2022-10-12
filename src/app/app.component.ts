import { Component } from '@angular/core';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Task[] = [
    {
      id: 1,
      label: "Apprendre React",
    },
    {
      id: 2,
      label: "Apprendre Angular",
    },
    {
      id: 3,
      label: "Apprendre Node Js",
    },
  ]

  addTask(): void {
    const id: number = Math.random()
    const randomLabel: string = Math.random().toString(36).substring(2, 7)

    this.tasks.push({
      id: id,
      label: randomLabel
    })
  }
}
