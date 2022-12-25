import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteSelectedTodos } from 'src/app/ngrx/actions/todo.actions';
import { SETTINGS_PATH } from 'src/app/shared/constants/route-path.consts';
import { AddTaskComponent } from '../add-task/add-task.component';
@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly settingsPath = SETTINGS_PATH;

  constructor(public dialogRef: MatDialog, private store: Store) {}

  public openAddTask(): void {
    this.dialogRef.open(AddTaskComponent);
  }

  public deleteSelectedTodos(): void {
    this.store.dispatch(deleteSelectedTodos());
  }
}
