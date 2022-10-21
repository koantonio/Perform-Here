import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { LandingContentComponent } from './landing-content.component';

describe('LandingContentComponent', () => {    
  let component: LandingContentComponent;
  let fixture: ComponentFixture<LandingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test Login and Signup buttons',()=>{
    //let links=fixture.nativeElement.querySelectorAll('a');
    let btnL=fixture.nativeElement.querySelector('[data-test-id="login"]');
    let btnS=fixture.nativeElement.querySelector('[data-test-id="signup"]');

    expect(btnL.textContent).toEqual('Login');
    expect(btnL.getAttribute('routerLink')).toEqual('/signin');

    expect(btnS.textContent).toEqual('Sign up');
    expect(btnS.getAttribute('routerLink')).toEqual('/signup');
  });

});
