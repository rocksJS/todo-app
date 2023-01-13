import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs';
import { AddTaskComponent } from 'src/app/modals/add-task/add-task.component';
import { deleteSelectedTodos } from 'src/app/ngrx/actions/todo.actions';
import { todosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { SETTINGS_PATH } from 'src/app/shared/constants/route-path.consts';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly settingsPath = SETTINGS_PATH.path;

  constructor(public dialogRef: MatDialog, private store: Store) {}

  public openAddTask(): void {
    this.dialogRef.open(AddTaskComponent);
  }

  public deleteSelectedTodos(): void {
    this.store
      .select(todosSelector)
      .pipe(
        filter((todos) => todos),
        take(1),
        map((todos) => {
          let selectedTodos = todos.filter((item: ITodo) => item.isSelected);
          this.store.dispatch(deleteSelectedTodos({ todos: selectedTodos }));
        }),
      )
      .subscribe();
  }
}
