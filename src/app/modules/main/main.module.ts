import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatRippleModule } from '@angular/material';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { MainRoutingModule } from './main.routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, AddTaskComponent, TaskComponent],
  imports: [CommonModule, MainRoutingModule, MatIconModule, MatButtonModule],
})
export class MainModule {}
