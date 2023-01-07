import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Store } from '@ngrx/store';
import { from, map, Observable } from 'rxjs';
import { todosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { environment } from 'src/environments/environment';
import { ITodo } from '../interfaces/todo.interface';
import { listIdMapper } from '../utils/list-id-mapper';
@Injectable({ providedIn: 'root' })
export class TodosApiService {
  public endPoints = {
    todos: 'todos',
    deletedTodos: 'deletedTodos',
    json: '.json',
  };

  public readonly todosRef = this.realtimeDb.list<ITodo>(this.endPoints.todos);

  constructor(private realtimeDb: AngularFireDatabase, private http: HttpClient, private store: Store) {}

  public getTodos(): Observable<ITodo[]> {
    return this.http.get(environment.apiURL + this.endPoints.todos + this.endPoints.json).pipe(map((item) => listIdMapper(item)));
  }

  public createTodo(todo: ITodo): Observable<any> {
    return from(this.todosRef.push(todo));
  }

  public updateTodo(todo: ITodo): Observable<any> {
    return from(this.todosRef.update(todo.id, { isSelected: !todo.isSelected }));
  }

  public getSelectedTodos(): Observable<ITodo[]> {
    return this.store.select(todosSelector).pipe(map((todos) => todos.filter((item: ITodo) => item.isSelected)));
  }

  public deleteSelectedTodos(): Observable<any> {
    return this.getSelectedTodos().pipe(map((todos) => todos.forEach((todo) => this.todosRef.remove(todo.id))));
  }

  public getExpiredSelectedTodos(): Observable<any> {
    return this.getSelectedTodos().pipe(map((todos) => todos.filter((todo) => (Date.now() - todo.expDate > 86400000 ? true : false))));
  }

  public deleteExpiredTodos(): Observable<any> {
    return this.getExpiredSelectedTodos().pipe(map((todos) => todos.forEach((todo: ITodo) => this.todosRef.remove(todo.id))));
  }
}
