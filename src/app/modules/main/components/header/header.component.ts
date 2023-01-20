import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { AddTaskComponent } from 'src/app/modals/add-task/add-task.component';
import { deleteSelectedTodos } from 'src/app/ngrx/actions/todo.actions';
import { selectedTodosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { SETTINGS_PATH } from 'src/app/shared/constants/route-path.consts';
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
      .select(selectedTodosSelector)
      .pipe(
        take(1),
        map((selectedTodos) => {
          this.store.dispatch(deleteSelectedTodos({ todos: selectedTodos }));
        }),
      )
      .subscribe();
  }
}
