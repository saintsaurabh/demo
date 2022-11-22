import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { AddToCartComponent } from './product/add-to-cart/add-to-cart.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'product', component:ProductComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'product/product-details', component:ProductDetailsComponent
  },
  {
    path:'cart', component:AddToCartComponent
  },
  {
    path:'', redirectTo:"/home", pathMatch:"full"
  },
  {
    path:'**', component:CustomErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
