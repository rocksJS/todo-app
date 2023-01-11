import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing,module';
import { FirebaseModule } from './firebase.module';
import { StateModule } from './state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, CommonModule, BrowserAnimationsModule, HttpClientModule, StateModule, FirebaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
