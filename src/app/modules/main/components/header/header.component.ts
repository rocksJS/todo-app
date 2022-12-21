import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { SETTINGS_PATH } from 'src/app/shared/constants/route-path.consts';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';
@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public settingsPath = SETTINGS_PATH;

  constructor(public dialogRef: MatDialog, private todosApiService: TodosApiService) {}

  ngOnInit(): void {}

  public openAddTask() {
    const dialogRef = this.dialogRef.open(AddTaskComponent);
  }

  public deleteSelectedTodos() {
    this.todosApiService.deleteSelectedTodos().subscribe();
  }
}
