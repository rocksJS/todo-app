import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo } from '../interfaces/todo.interface';
import { todoIdMapper } from '../utils/firebase-id-mapper';

@Injectable({ providedIn: 'root' })
export class TodosApiService {
  public endPoints = {
    todos: 'todos',
    deletedTodos: 'deletedTodos',
  };

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo>(environment.apiURL + this.endPoints.todos + '.json').pipe(map((todos) => todoIdMapper(todos)));
  }

  public getDeletedTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo>(environment.apiURL + this.endPoints.deletedTodos + '.json').pipe(map((todos) => todoIdMapper(todos)));
  }

  public createTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(environment.apiURL + this.endPoints.todos + '.json', todo);
  }

  public deleteTask(todoId: string): Observable<string> {
    return this.http.delete<string>(environment.apiURL + this.endPoints.todos + '/' + todoId);
  }
}
