import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SettingsApiService {
  public endPoints = {
    settings: 'settings',
    automaticDeleteSettings: 'automaticDeleteSetting',
    deleteTime: 'deleteTime',
    isDeleteExpiredTodos: 'isDeleteExpiredTodos',
    json: '.json',
  };

  constructor(private realtimeDb: AngularFireDatabase, private http: HttpClient) {}

  public readonly settingsRef = this.realtimeDb.list<any>(this.endPoints.settings);

  public getSettings(): Observable<any> {
    return this.http.get(environment.apiURL + this.endPoints.settings + this.endPoints.json).pipe(
      map((item) => {
        if (item) {
          const values = Object.values(item);
          const ids = Object.keys(item);

          return values.map((elem, index) => {
            elem.id = ids[index];

            return elem;
          });
        }

        return [];
      }),
    );
  }

  public isDeleteExpiredTodos(): any {
    return this.http.get(
      environment.apiURL +
        this.endPoints.settings +
        '/' +
        this.endPoints.automaticDeleteSettings +
        '/' +
        this.endPoints.isDeleteExpiredTodos +
        this.endPoints.json,
    );
  }

  public changeIsDeleteExpiredTodos(isDelete: boolean): Observable<any> {
    return from(
      this.settingsRef.update(this.endPoints.automaticDeleteSettings + '/' + this.endPoints.isDeleteExpiredTodos, {
        value: isDelete,
      }),
    );
  }
}
