import { Component, OnInit } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

interface formDataInterface {
  name: string;
  family_name: string;
  email: string;
  [key: string]: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  isLoading: boolean = false;
  isArtist: boolean = false;


  signupForm: FormGroup = this.formBuilder.group({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    //Password must be minimum 8 characters, have 1 Capital 1 Lowercase, 1 number, and 1 special character
    Password: new FormControl('',[Validators.required, Validators.pattern(
      "^(?=.*\\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[a-zA-Z0-9@$!%*?&{|}~_=+.-])(?!.*\\s).{8,24}$"
    )]),
    confirmpassword: new FormControl('',[Validators.required])
  });


  constructor(private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {}


  setArtist(event: Event) {
    this.isArtist = (event.target as HTMLInputElement).checked;
  }

  get firstname() {
    return this.signupForm.get('firstname');
  }

  get lastname() {
    return this.signupForm.get('lastname');
  }

  get Password() {
    return this.signupForm.get('Password');
  }

  get confirmpassword() {
    return this.signupForm.get('confirmpassword');
  }
  
  get Email() {
    return this.signupForm.get('Email');
  }


  onSignup() {
    if(this.signupForm.valid && (this.confirmpassword?.value == this.Password?.value)) {
      this.isLoading = true;
      console.log(
        this.firstname?.value,
        this.lastname?.value,
        this.Email?.value,
        this.Password?.value
      );
      var poolData = {
        UserPoolId: 'us-west-2_kefXUvzNA',
        ClientId: '7naup3g2ase11sfgcihln1dbct',
      };

      var userPool = new CognitoUserPool(poolData);

      var attributeList = [];

      let formData: formDataInterface = {
        name: this.firstname?.value,
        family_name: this.lastname?.value,
        email: this.Email?.value,
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
        this.Email?.value,
        this.Password?.value,
        attributeList,
        [],
        (err, result) => {
          this.isLoading = false;
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          }
          if(this.isArtist) {
            this.router.navigate(['/performer_form']);
          }
          else {
            this.router.navigate(['/signin']);
          }
        }
      );
    }
    else {
      console.log('invalid');
      alert("Passwords did not match or input was invalid");
    }
  }
}