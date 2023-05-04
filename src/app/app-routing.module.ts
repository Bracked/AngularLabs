import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageComponent } from './page/page.component';
import { UserPageComponent } from './user-page/user-page.component';
import {TabPageComponent} from "./tab-page/tab-page.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: PageComponent },
  { path: 'page2', component: PageComponent },
  { path: 'page3', component: PageComponent },
  { path: 'tabs', component: TabPageComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'employee', component: EmployeeViewComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
