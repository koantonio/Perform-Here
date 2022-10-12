import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformerFormComponent } from './performer-form/performer-form.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard';
import { LandingContentComponent } from './landing-content/landing-content.component'
import { BrowsingContentComponent } from './browsing-content/browsing-content.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { ProfileComponent } from './profile/profile.component';
import { VoteComponent } from './vote/vote.component';
import { CognitoService } from './cognito.service';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:LandingContentComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { 
    path: 'browse',
    component: BrowsingContentComponent,
    canActivate:[CognitoService],
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate:[CognitoService],
  },
  { path: 'vote',
    component: VoteComponent,
    canActivate:[CognitoService],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CognitoService],
  },
  { path: 'performer_form', component: PerformerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule {}
