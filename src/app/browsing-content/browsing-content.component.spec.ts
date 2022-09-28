import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingContentComponent } from './browsing-content.component';

describe('BrowsingContentComponent', () => {
  let component: BrowsingContentComponent;
  let fixture: ComponentFixture<BrowsingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsingContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
