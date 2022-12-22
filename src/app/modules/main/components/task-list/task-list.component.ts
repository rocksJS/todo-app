import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTodos, updateTodo } from 'src/app/ngrx/actions/todo.actions';
import { todosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RealtimeDatabaseService } from 'src/app/shared/services/realtime-database.service';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TaskListComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  public todosCollection$: any;

  constructor(private store: Store, private realtimeDbService: RealtimeDatabaseService) {
    //this.todosCollection$ = realtimeDb.getTodos(); // РАБОТАЕТ!
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.todos$ = this.store.select(todosSelector);
  }

  public todoChangeSelection(todo: ITodo): void {
    this.realtimeDbService.updateTodo(todo);
  }
}
