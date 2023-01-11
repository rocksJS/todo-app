import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { TasksSelectionListComponent } from './components/tasks-selection-list/tasks-selection-list.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TasksRoutingModule } from './tasks.routing.module';

@NgModule({
  declarations: [TasksPageComponent, TasksSelectionListComponent],
  imports: [CommonModule, TasksRoutingModule, MatListModule],
})
export class TasksModule {}
