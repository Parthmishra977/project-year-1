import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VotingComponent } from './voting/voting.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { EmergencyContactsComponent } from './emergency-contacts/emergency-contacts.component';
import { SolvedComplaintsComponent } from './solved-complaints/solved-complaints.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'voting', component: VotingComponent },
  { path: 'complaints', component: ComplaintsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'emergency-contacts', component: EmergencyContactsComponent },
  { path: 'solved-complaints', component: SolvedComplaintsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
