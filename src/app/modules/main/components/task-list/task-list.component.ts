import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { deleteExpiredTodos, updateTodo } from 'src/app/ngrx/actions/todo.actions';
import { settingsSelector } from 'src/app/ngrx/selectors/settings.selectors';
import { todosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  public isExpired: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(todosSelector);

    this.store
      .select(settingsSelector)
      .pipe(
        map((settings) => {
          if (settings.length > 0) {
            this.isExpired = settings[0].isSelected;
          }
        }),
      )
      .subscribe();

    if (this.isExpired) {
      this.store.dispatch(deleteExpiredTodos());
    }
  }

  public changeTodoSelection(event: MatSelectionListChange) {
    this.store.dispatch(updateTodo({ todo: event.option.value }));
  }
}
