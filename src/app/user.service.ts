import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';

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
