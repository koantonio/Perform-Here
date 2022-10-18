import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, InjectSetupWrapper, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, CognitoService } from 'src/app/cognito.service';
import { AppRoutingModule } from '../../app-routing.module';
import { SignUpComponent } from './sign-up.component';


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let cognitoServiceSpy: jasmine.SpyObj<CognitoService>
  let routerSpy: jasmine.SpyObj<Router>
  let user = {} as IUser

  user.email = "fakeemail@notreal.com";
  user.password = "Test123!";
  user.firstName = "Joe";
  user.lastName = "Nobody"

  let fakeUser = [
    {
      firstName: "Joe",
      lastName: "Nobody",
      email: "fakeemail@notreal.com",
      password: "Test123!"
    }
  ]

  beforeEach(async () => {
    cognitoServiceSpy = jasmine.createSpyObj('CognitoService',['signUp', 'confirmSignUp']);
    

    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        { provide: CognitoService, useValue: cognitoServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should invoke SignUp, with valid form data when user clicks submit', () => {
    let firstNameTextBox = fixture.nativeElement.querySelector('[data-test-id="firstName"]');
    let lastNameTextBox = fixture.nativeElement.querySelector('[data-test-id="lastName"]');
    let emailTextBox = fixture.nativeElement.querySelector('[data-test-id="Email"]');
    let passwordTextBox = fixture.nativeElement.querySelector('[data-test-id="password"]');
    let confirmPasswordTextBox = fixture.nativeElement.querySelector('[data-test-id="confirmpassword"]');
    let signUpForm = fixture.nativeElement.querySelector('[data-test-id="signUpForm"]');

    firstNameTextBox.value = user.firstName;
    firstNameTextBox.dispatchEvent(new Event('input'));

    lastNameTextBox.value = user.lastName;
    lastNameTextBox.dispatchEvent(new Event('input'));

    emailTextBox.value = user.email;
    emailTextBox.dispatchEvent(new Event('input'));

    passwordTextBox.value = user.password;
    passwordTextBox.dispatchEvent(new Event('input'));

    confirmPasswordTextBox.value = "Test123!";
    confirmPasswordTextBox.dispatchEvent(new Event('input'));

    signUpForm.dispatchEvent(new Event('submit'));
    expect(cognitoServiceSpy.signUp).toHaveBeenCalledWith(user);
  })

  it('should route to singin when signin anchor tag is clicked', () => {
    let links = fixture.nativeElement.querySelectorAll('a');

    expect(links[0].textContent).toEqual('Log in');
    expect(links[0].getAttribute('href')).toEqual('/signin');
  })
});