import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const usersModule = () => import('./user/users.module').then(x => x.UsersModule);

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: usersModule},
  { path: 'cart', component: CartComponent},
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
