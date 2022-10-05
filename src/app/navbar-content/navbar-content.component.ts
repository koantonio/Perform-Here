import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  onLogout(): void {
    let poolData = {
      UserPoolId: 'us-west-2_kefXUvzNA',
      ClientId: '7naup3g2ase11sfgcihln1dbct',
    };
    let userPool = new CognitoUserPool(poolData);
    let cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser);
    cognitoUser?.signOut();
    this.userService.setUserId("");
    this.router.navigate(['signin']);
  }

  profile() {
    this.router.navigate(['profile']);
  }

  browsing() {
    this.router.navigate(['browse']);
  }



}
