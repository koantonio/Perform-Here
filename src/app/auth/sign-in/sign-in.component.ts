import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoading: boolean = false;
  email_address: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    //this.dataService.broadcast('authSuccess',{auth:'successful'})

  }

  onSignIn(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      console.log(this.email_address, this.password);
      let authenticationDetails = new AuthenticationDetails({
        Username: this.email_address,
        Password: this.password,
      });

      let poolData = {
        UserPoolId: 'us-west-2_kefXUvzNA', // Your user pool id here
        ClientId: '7naup3g2ase11sfgcihln1dbct', // Your client id here
      };

      let userPool = new CognitoUserPool(poolData);
      let userData = {
        Username: this.email_address,
        Pool: userPool,
      };
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          this.router.navigate(['browse']);
        },

        onFailure: (err) => {
          alert(err.message || JSON.stringify(err));
          this.isLoading = false;
        },
      });
    } else {
      console.log('invalid');
    }
  }
}
