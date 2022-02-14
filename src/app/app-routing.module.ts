import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFourComponent } from './page-four/page-four.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  {
    path: '', component: TestPageComponent, children: [
        {path:'page-1', component: PageOneComponent},
        {path:'page-2', component: PageTwoComponent},
        {path:'page-3', component: PageThreeComponent},
        {path:'page-4', component: PageFourComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
