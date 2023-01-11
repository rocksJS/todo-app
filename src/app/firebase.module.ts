import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebase), AngularFireAnalyticsModule, AngularFirestoreModule],
})
export class FirebaseModule {}
