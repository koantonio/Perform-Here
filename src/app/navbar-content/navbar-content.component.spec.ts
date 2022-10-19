import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { CognitoService } from '../cognito.service';


import { NavbarContentComponent } from './navbar-content.component';

describe('NavbarContentComponent', () => {
  /*
  let authServiceSpy: jasmine.SpyObj<CognitoService>;
  let loginObservable: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  */

  let component: NavbarContentComponent;
  let fixture: ComponentFixture<NavbarContentComponent>;

  beforeEach(async () => {
    /*
    authServiceSpy=jasmine.createSpyObj('CognitoService',['isAuthenticated']);
    authServiceSpy.isAuthenticated.and.returnValue(loginObservable);
    */

    await TestBed.configureTestingModule({
      declarations: [ NavbarContentComponent ],

      //
      providers:[
       // {provide:CognitoService,useValue:authServiceSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  afterEach(()=>{
    loginObservable.next(false);
  });
 */

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should display navbar links to landing page, browsing,Profile,and logout page, that have correct routerlink properties',()=>{
    let links=fixture.nativeElement.querySelectorAll('a');

    expect(links[1].textContent).toEqual('Browsing');
    expect(links[1].getAttribute('routerLink')).toEqual('/browse');

    expect(links[2].textContent).toEqual('Profile');
    expect(links[2].getAttribute('routerLink')).toEqual('/profile');

    expect(links[3].textContent).toEqual('Logout');
    expect(links[3].getAttribute('routerLink')).toEqual('/signin');
  });
  */ 

  /*
  it('an autheticated user should see navbar links',async()=>{
    loginObservable.next(true);
    await fixture.whenStable();//internal observable broadcast
    fixture.detectChanges();//wait for dom to be updated

    let img=fixture.nativeElement.querySelectorAll('a');
    let btnB=fixture.nativeElement.querySelectorAll('[data-test-id="browsing"]');
    let btnP=fixture.nativeElement.querySelectorAll('[data-test-id="profile"]');
    let btnL=fixture.nativeElement.querySelectorAll('[data-test-id="logout"]');

    expect(img[1].textContent).toEqual('PerformHere');
    expect(img[1].getAttribute('routerLink')).toEqual('/');

    expect(btnB[2].textContent).toEqual('Browsing');
    expect(btnB[2].getAttribute('routerLink')).toEqual('/browse');

    expect(btnP[3].textContent).toEqual('Profile');
    expect(btnP[3].getAttribute('routerLink')).toEqual('/profile');

    expect(btnL[4].textContent).toEqual('Logout');
    expect(btnL[4].getAttribute('routerLink')).toEqual('/signin');
  })
  */
});
