import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Auth } from 'aws-amplify';
import { CognitoService, IUser } from './cognito.service';
import { AuthClass } from '@aws-amplify/auth/lib-esm/Auth';
import { AppRoutingModule } from './app-routing.module';
import { Observable } from 'rxjs';

describe('CognitoService', () => {
  let service: CognitoService;
  let authSpy: jasmine.SpyObj<AuthClass>;
  let cognitoServiceSpy: jasmine.SpyObj<CognitoService>
  let user = {} as IUser
  let cognitoAuth: jasmine.SpyObj<any>;
  let authSubjectSpy: jasmine.SpyObj<Observable<boolean>>;

  user.email = "fakeemail@notreal.com";
  user.password = "Test123!";
  user.firstName = "Joe";
  user.lastName = "Nobody"

  beforeEach(() => {
    authSpy = jasmine.createSpyObj('AuthClass', ['signIn', 'signOut', 'signUp', 'confirmSignUp']);
    cognitoAuth = jasmine.createSpyObj('Auth', ['currentUserInfo', 'signIn', 'signOut', 'signUp', 'confirmSignUp'])

    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        AppRoutingModule,
      ],
      providers: [
        { provide: AuthClass, useValue: authSpy},
        { provide: CognitoService, useValue: cognitoServiceSpy },
        { provide: Auth, userValue: cognitoAuth }
      ]
    });
    service = TestBed.inject(CognitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', () => {
    service.signIn(user).then(
      res => expect(res).toEqual(true)
    );

    expect(Auth.signIn).toHaveBeenCalledWith(user.email, user.password);
  });

});
