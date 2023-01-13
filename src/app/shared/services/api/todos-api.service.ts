import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Store } from '@ngrx/store';
import { from, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo } from '../../interfaces/todo.interface';
import { listIdMapper } from '../../utils/list-id-mapper';
import { TodosService } from '../todos.service';

@Injectable({ providedIn: 'root' })
export class TodosApiService {
  public endPoints = {
    todos: 'todos',
    deletedTodos: 'deletedTodos',
    json: '.json',
  };

  public readonly todosRef = this.realtimeDb.list<ITodo>(this.endPoints.todos);

  constructor(
    private realtimeDb: AngularFireDatabase,
    private http: HttpClient,
    private store: Store,
    private todosService: TodosService,
  ) {}

  public getTodos(): Observable<ITodo[]> {
    return this.http.get(environment.apiURL + this.endPoints.todos + this.endPoints.json).pipe(map((item) => listIdMapper(item)));
  }

  public createTodo(todo: ITodo): Observable<any> {
    return from(this.todosRef.set(todo.id, todo));
  }

  public updateTodo(todo: ITodo): Observable<any> {
    return from(this.todosRef.update(todo.id, { isSelected: todo.isSelected }));
  }

  public deleteSelectedTodos(selectedTodos: ITodo[]): Observable<Observable<void>[]> {
    return of(selectedTodos.map((todo: ITodo) => from(this.todosRef.remove(todo.id))));
  }

  public deleteExpiredTodos(): Observable<any> {
    return this.todosService.getExpiredSelectedTodos().pipe(map((todos) => todos.forEach((todo: ITodo) => this.todosRef.remove(todo.id))));
  }
}
