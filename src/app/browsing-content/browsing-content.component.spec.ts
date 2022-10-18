import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BrowsingContentComponent } from './browsing-content.component';

describe('BrowsingContentComponent', () => {
  let component: BrowsingContentComponent;
  let fixture: ComponentFixture<BrowsingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ BrowsingContentComponent ],
      // providers: [
      //   {provide: }
      // ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display choose an artist title`, () => {
    let title = fixture.nativeElement.querySelector('[data-test-id="header"]');
    expect(title.textContent).toContain('Choose');
  })

  it(`should display search bar and narrow search when value is entered`, fakeAsync(() => {
    let searchBar = fixture.nativeElement.querySelector('[data-test-id="searchbartest"]')
    expect(searchBar.textContent).toEqual("");
    const updateSpy = spyOn(component, "updateArtists");
    searchBar.value = "b";
    searchBar.dispatchEvent(new Event('input'));
    fixture.detectChanges()
    tick();
    expect(updateSpy).toHaveBeenCalled();
  }));
});
