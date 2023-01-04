import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { listIdMapper } from '../utils/list-id-mapper';

@Injectable({ providedIn: 'root' })
export class SettingsApiService {
  public endPoints = {
    settings: 'settings',
    automaticDeleteSetting: 'automaticDeleteSetting',
    json: '.json',
  };

  constructor(private realtimeDb: AngularFireDatabase, private http: HttpClient) {}

  public readonly settingsRef = this.realtimeDb.list<any>(this.endPoints.settings);

  public getSettings(): Observable<any> {
    return this.http.get(environment.apiURL + this.endPoints.settings + this.endPoints.json).pipe(map((item) => listIdMapper(item)));
  }

  public isDeleteExpiredTodos(): Observable<any> {
    return this.http.get(
      environment.apiURL + this.endPoints.settings + '/' + this.endPoints.automaticDeleteSetting + '/' + this.endPoints.json,
    );
  }

  public changeIsDeleteExpiredTodos(isDelete: boolean): Observable<any> {
    return from(this.settingsRef.update(this.endPoints.automaticDeleteSetting, { isSelected: isDelete }));
  }
}
