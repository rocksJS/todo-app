import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  public todos$: any;

  constructor(private todosApiService: TodosApiService) {}

  ngOnInit(): void {
    this.todos$ = this.todosApiService.getTodos();
  }

  public isChanged(event: any) {
    // тут можно получить доступ из ивента до опшна, найти способ по клику менять стейт isSelected на бэке
    console.log(event, 'checkbox is changd');
  }
}
