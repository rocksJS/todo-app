import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
