import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  public typesOfShoes = [
    { name: 'Boots', isSelected: true },
    { name: 'Hucci', isSelected: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
