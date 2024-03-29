import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { MainComponent } from './shared/layout/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { UserAddComponent } from './pages/user/user-add/user-add.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { authGuard } from './core/guards/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate : [authGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate : [authGuard]
  },
  {
    path: '',
    component: MainComponent,
    children : [
      {
        path : 'dashboard',
        component : DashboardComponent
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    canActivate : [authGuard],
    children: [
      {
        path: 'data',
        children: [
          {
            path: 'product',
            component: ProductComponent,
          },
        ],
      },
      {
        path: 'admin',
        children: [
          {
            path: 'user',
            component: UserComponent,
          },
          {
            path: 'user/create',
            component: UserAddComponent,
          },
          {
            path: 'user/update/:id',
            component: UserAddComponent,
          },
        ],
      },
      {
        path: 'me',
        children: [
          {
            path: 'profile',
            component: ProfileComponent,
          },
          {
            path: 'change-password',
            component: ChangePasswordComponent,
          },
        ],
      },
    ],
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent },
];
