import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SETTINGS_PATH } from 'src/app/shared/constants/route-path.consts';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', loadChildren: () => import('../tasks/tasks.module').then((module) => module.TasksModule) },
      { path: SETTINGS_PATH.path, loadChildren: () => import('../settings/settings.module').then((module) => module.SettingsModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
