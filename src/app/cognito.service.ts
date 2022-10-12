import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';
import { ArtistsService } from './artists.service';
import { Artist } from './artist';
import { User } from './user';
import { UserService } from './user.service';

export interface IUser {
  email: string;
  password: string;
  code: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  
  private authenticationSubject: BehaviorSubject<any>;

  userId: string = "";

  constructor(private artistService: ArtistsService) {
    Amplify.configure({
      Auth: {
        userPoolId: 'us-west-2_kefXUvzNA',
        userPoolWebClientId: '7naup3g2ase11sfgcihln1dbct',
      }
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email, 
      password: user.password,
      attributes: {
        name: user.firstName,
        family_name: user.lastName,
        email: user.email
      },
      autoSignIn: { // optional - enables auto sign in after user is confirmed
        enabled: true,
      }
    });
  }

  public async getUserAttributes() {
    return await Auth.currentUserInfo();
  }
  
  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }
  
  //setting user_id to email so email becomes primary key
  public signIn(user: IUser): Promise<any> {
    this.userId = user.email;
    return Auth.signIn(user.email, user.password)
    .then(() => {
      this.authenticationSubject.next(true);
    });
  }

  public getEmail(): string {
    return this.userId;
  }

  public signOut(): Promise<any> {
    return Auth.signOut()
    .then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
      .then((user: any) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser()
    .then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }

}