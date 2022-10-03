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

  userId: string = "";

  constructor() { }

  setUserId(id: string) {
    this.userId = id;
  }

  getUserId(){
    return this.userId;
  }
}
