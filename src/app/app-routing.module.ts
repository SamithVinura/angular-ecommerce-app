import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'seller-auth',component:SellerAuthComponent},
  {path:'seller-home',component:SellerHomeComponent,canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
