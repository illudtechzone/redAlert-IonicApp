import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuardService } from './security/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
  canActivate: [AuthGuardService]
  },
  {
    path: 'history',
    loadChildren: './pages/history/history.module#HistoryPageModule',
     canActivate: [AuthGuardService]
  },
  {
    path: 'news',
    loadChildren: './pages/news/news.module#NewsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'friends',
    loadChildren: './pages/friends/friends.module#FriendsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'post',
    loadChildren: './pages/post/post.module#PostPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'landing',
    loadChildren: './pages/landing/landing.module#LandingPageModule',
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
     canActivate: [AuthGuardService]
  },
  { path: 'cshome', loadChildren: './pages/cshome/cshome.module#CshomePageModule' ,
  canActivate: [AuthGuardService]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), OAuthModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
