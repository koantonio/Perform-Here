import { Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId: String = "";

  constructor() { }

  setUserId(id: String) {
    this.userId = id;
  }

  getUserId(){
    return this.userId;
  }
}
