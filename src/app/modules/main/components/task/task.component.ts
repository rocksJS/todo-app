import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
