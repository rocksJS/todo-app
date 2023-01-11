import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { InputComponent } from '../../shared/components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { MainRoutingModule } from './main.routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent],
  imports: [
    InputComponent,
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class MainModule {}
