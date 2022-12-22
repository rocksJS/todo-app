import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, map, Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';
@Injectable({ providedIn: 'root' })
export class RealtimeDatabaseService {
  public endPoints = {
    todos: 'todos',
    deletedTodos: 'deletedTodos',
    json: '.json',
  };
  constructor(private realtimeDb: AngularFireDatabase) {}

  getTodos(): Observable<ITodo[]> {
    return this.realtimeDb
      .object<ITodo>(this.endPoints.todos)
      .valueChanges()
      .pipe(
        map((item) => {
          // я ебал а это мой друг values
          const values = Object.values(item);
          const ids = Object.keys(item);

          return values.map((item, index) => {
            item.id = ids[index];
            return item;
          });
        }),
      );
  }

  updateTodo(todo: ITodo): Promise<void> {
    return this.realtimeDb.list(this.endPoints.todos).update(todo.id, { isSelected: !todo.isSelected });
  }
}
