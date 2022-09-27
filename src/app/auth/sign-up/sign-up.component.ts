import { Component, OnInit } from '@angular/core';
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

interface formDataInterface {
  name: string;
  family_name: string;
  email: string;
  //phone_number: string;
  [key: string]: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  isLoading: boolean = false;
  fname: string = '';
  lname: string = '';
  university: string = '';
  email: string = '';
  //mobileNo: string = '';
  password: string = '';
  confirmPassword: string = '';
  isArtist: boolean = false;

  constructor(private router: Router) {}
  
  ngOnInit(): void {}

  setArtist(event: Event) {
    this.isArtist = (event.target as HTMLInputElement).checked;
  }

  onSignup(form: NgForm) {
    if (form.valid && this.confirmPassword == this.password) {
      this.isLoading = true;
      console.log(
        this.fname,
        this.lname,
        this.email,
        //this.mobileNo,
        this.password
      );
      var poolData = {
        UserPoolId: 'us-west-2_kefXUvzNA', // Your user pool id here
        ClientId: '7naup3g2ase11sfgcihln1dbct', // Your client id here
      };

      var userPool = new CognitoUserPool(poolData);

      var attributeList = [];

      let formData: formDataInterface = {
        name: this.fname,
        family_name: this.lname,
        email: this.email,
        //phone_number: this.mobileNo,
      };

      for (let key in formData) {
        let attrData = {
          Name: key,
          Value: formData[key],
        };
        console.log(attrData);
        let attribute = new CognitoUserAttribute(attrData);
        attributeList.push(attribute);
      }
      console.log(attributeList);
      userPool.signUp(
        this.email,
        this.password,
        attributeList,
        [],
        (err, result) => {
          this.isLoading = false;
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          }
          this.router.navigate(['/signin']);
        }
      );
    } else {
      alert('Invalid');
    }
  }
}
