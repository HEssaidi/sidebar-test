import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sidebar-implementation'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sidebar-implementation');
  });

  // it('page one should render title', () => {
  //   const fixture = TestBed.createComponent(PageOneComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('page-one works!');
  // });

  
  it('page one should render clg', () => {
    const fixture = TestBed.createComponent(PageOneComponent);
    const pageOneComponent = fixture.componentInstance; // BannerComponent test instance
    // Binding happens when Angular performs change detection.
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain(pageOneComponent.title);
  });
});
