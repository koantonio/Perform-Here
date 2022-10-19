import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Auth } from 'aws-amplify';
import { CognitoService, IUser } from './cognito.service';

describe('CognitoService', () => {
  let service: CognitoService;
  let user = {} as IUser
  let cognitoAuth: jasmine.SpyObj<any>;

  beforeEach(() => {
    cognitoAuth = jasmine.createSpyObj('Auth', ['currentUserInfo', 'signOut'])
    user.email = "fakeemail@notreal.com";
    user.password = "Test123!";

    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: [
        { provide: Auth, useValue: cognitoAuth }
      ]
    });
    service = TestBed.inject(CognitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isAuthenticated, should broadcast true, if user is returned.', async () =>{
    let isAuthenticated: boolean;
    cognitoAuth.currentUserInfo.and.returnValue(Promise.resolve(user));

    service.isAuthenticated().then(
      res => isAuthenticated = res
    );
    setTimeout(() => expect(isAuthenticated).toBeTruthy(), 500);
  });

  it('getUser should call currentUserInfo and return a user', async () => {
    let returnedUser: IUser = {} as IUser;
    cognitoAuth.currentUserInfo.and.returnValue(Promise.resolve(user));
    service.getUser().then(
      user => returnedUser = user
    );
    setTimeout(() => {
      expect(cognitoAuth.currentUserInfo).toHaveBeenCalled()
      expect(returnedUser).toEqual(user)
    }, 500);
  });

  it('getUserAttributes should call currentUserInfo and return a user', async () => {
    let returnedUser: IUser = {} as IUser;
    cognitoAuth.currentUserInfo.and.returnValue(Promise.resolve(user));
    service.getUserAttributes().then(
      user => returnedUser = user
    );
    setTimeout(() => {
      expect(cognitoAuth.currentUserInfo).toHaveBeenCalled()
      expect(returnedUser).toEqual(user)
    }, 500);
  });

  it('should log out ', async () => {
    let isAuthenticated: boolean;
    cognitoAuth.signOut.and.returnValue(Promise.resolve(true));
    service.signOut().then(
      res => isAuthenticated = res
    );
    setTimeout(() => {
      expect(isAuthenticated).toEqual(true)
    }, 500);
  });
});
