import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    // canActivate: [AuthService],
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    // canActivate: [AuthService],
    loadChildren: './list/list.module#ListPageModule'
  },
  // {
  //   path: 'sobre',
  //   loadChildren: './sobre/sobre.module#SobreComponent'
  // },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
