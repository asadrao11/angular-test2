import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthSigninComponent } from './pages/auth-signin/auth-signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { ViewUserComponent } from './pages/users/view-user/view-user.component';
import { AddManufacturerComponent } from './pages/manufacturers/add-manufacturer/add-manufacturer.component';
import { ViewManufacturerComponent } from './pages/manufacturers/view-manufacturer/view-manufacturer.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSigninComponent
  },
  {
    path: 'login',
    component: AuthSigninComponent
  },
  {
    path: 'public',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'view-user',
        component: ViewUserComponent
      },
      {
        path: 'add-manufacturer',
        component: AddManufacturerComponent
      },
      {
        path: 'view-manufacturer',
        component: ViewManufacturerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
