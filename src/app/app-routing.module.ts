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
   {
      path: 'about',
      // canActivate: [AuthService],
      loadChildren: './about/about.module#AboutPageModule'
  },
  {
    path: 'search',
    // canActivate: [AuthService],
    loadChildren: './search/search.module#SearchPageModule'
  },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'maps', loadChildren: './maps/maps.module#MapsPageModule' },  { path: 'second', loadChildren: './modals/second/second.module#SecondPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
