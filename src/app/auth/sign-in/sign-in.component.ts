import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, CognitoService } from 'src/app/cognito.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  
  email_address: string = '';
  password: string = '';
  loading: boolean;
  user: IUser;

  constructor(private router: Router, private userService: UserService, private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {}

  onSignIn(form: NgForm) {

    this.user.email = this.email_address;
    this.user.password = this.password;

    if (form.valid) {
      this.loading = true;
      this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['/browse']);
      }).catch(() => {
        this.loading = false;
      });
    }
  }
}

/*
var id: string = "Test";
          cognitoUser.getSession((err: any, session: any) => {
            if (err) {
              console.error(err);
              return;
            }
          });
    
          cognitoUser.getUserAttributes((err: any, result:any) => {
            if (err) {
              alert(err.message || JSON.stringify(err));
              return;
            }
            id = JSON.parse(result[0]).Value;
            this.userService.setUserId(id);
            this.router.navigate(['browse']);
          });
*/