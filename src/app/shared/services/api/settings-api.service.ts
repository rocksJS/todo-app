import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISetting } from '../../interfaces/settings.interface';

@Injectable({ providedIn: 'root' })
export class SettingsApiService {
  public endPoints = {
    settings: 'settings',
    automaticDeleteSetting: 'automaticDeleteSetting',
    json: '.json',
  };

  constructor(private realtimeDb: AngularFireDatabase, private http: HttpClient) {}

  public readonly settingsRef = this.realtimeDb.list<any>(this.endPoints.settings);

  public readonly automaticDeletesettingsRef = this.realtimeDb.list<any>(this.endPoints.automaticDeleteSetting);

  public getSettings(): Observable<any> {
    return this.http.get(environment.apiURL + this.endPoints.settings + this.endPoints.json);
  }

  public isDeleteExpiredTodos(): Observable<any> {
    return this.http.get(
      environment.apiURL + this.endPoints.settings + '/' + this.endPoints.automaticDeleteSetting + '/' + this.endPoints.json,
    );
  }

  public changeIsDeleteExpiredTodos(setting: ISetting): Observable<any> {
    return from(this.settingsRef.update(setting.id, { isSelected: setting.isSelected }));
  }
}
