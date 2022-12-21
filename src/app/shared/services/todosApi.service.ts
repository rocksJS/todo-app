import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo } from '../interfaces/todo.interface';
import { todoIdMapper } from '../utils/todo-id-mapper';

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

  public deleteTaskById(todoId: string): Observable<string> {
    return this.http.delete<string>(environment.apiURL + this.endPoints.todos + '/' + todoId);
  }

  public updateTodoSelectionState(todo: ITodo): Observable<ITodo> {
    todo.isSelected = !todo.isSelected;
    return this.http.put<any>(environment.apiURL + this.endPoints.todos + '/' + todo.id + '.json', todo);
  }
  public getSelectedTodos(): Observable<ITodo[]> {
    return this.getTodos().pipe(map((todo) => todo.filter((item) => item.isSelected)));
  }
}
