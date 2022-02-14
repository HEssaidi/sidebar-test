### SidebarImplementation
#### Jasmine & Karma testing process

##### createComponent() does not bind data
```
let component: ClassComponentName;
let fixture: ComponentFixture<ClassComponentName>;
let h1: HTMLElement;

fixture = TestBed.createComponent(ClassComponentName);
component = fixture.componentInstance; // BannerComponent test instance
h1 = fixture.nativeElement.querySelector('h1');
```
this test fails, cause Binding happens when Angular performs change detection. 

##### detectChanges() 


You must tell the TestBed to perform data binding by calling fixture.detectChanges(). Only then does the `<h1>` have the expected title. use `fixture.detectChanges();` <br/> More informations check out this link 
[Angular testing components scenarios](https://angular.io/guide/testing-components-scenarios)