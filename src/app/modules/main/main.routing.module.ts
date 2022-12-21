import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SETTINGS_PATH } from 'src/app/shared/constants/route-path.consts';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: TaskListComponent },
      { path: SETTINGS_PATH.path, loadChildren: () => import('../settings/settings.module').then((module) => module.SettingsModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
