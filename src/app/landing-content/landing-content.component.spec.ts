import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
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

  it('should route to signin page', ()=>{
    let myRouter = TestBed.get(Router);
    const navSpy = spyOn(myRouter, 'navigate');
    component.onLogin();
    expect(navSpy).toHaveBeenCalledWith(['/signin']);
  });

  it('should route to signup page', ()=>{ 
    let myRouter = TestBed.get(Router);
    const navSpy = spyOn(myRouter, 'navigate');
    component.signUp();
    expect(navSpy).toHaveBeenCalledWith(['/signup']);
  });

});
