import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosApiService {
  public endPoints = {
    todos: 'todos.json',
    deletedTodos: 'deletedTodos',
  };

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo>(environment.apiURL + this.endPoints.todos).pipe(map((todos) => Object.values(todos)));
  }

  public getDeletedTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo>(environment.apiURL + this.endPoints.deletedTodos).pipe(map((todos) => Object.values(todos)));
  }

  public createTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(environment.apiURL + this.endPoints.todos, todo);
  }
}
