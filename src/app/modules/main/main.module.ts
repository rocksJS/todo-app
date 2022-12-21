import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { InputComponent } from './components/add-task/components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MainRoutingModule } from './main.routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, AddTaskComponent, TaskListComponent, InputComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class MainModule {}
