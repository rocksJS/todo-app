import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'todo-tasks-selection-list',
  templateUrl: './tasks-selection-list.component.html',
  styleUrls: ['./tasks-selection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksSelectionListComponent {
  @Input() public todos: ITodo[];

  @Output() public todoSelectionChangeEmitter = new EventEmitter();

  public changeTodoSelection(event: MatSelectionListChange): void {
    this.todoSelectionChangeEmitter.emit(event.option.value);
  }
}
