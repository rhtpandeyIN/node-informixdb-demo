import { EditProductComponent } from './login/edit-product/edit-product.component';
import { AddprodComponent } from './login/addprod/addprod.component';
import { HeaderComponent } from './login/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InvntoryComponent } from './login/invntory/invntory.component';
import { ProductsComponent } from './login/products/products.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'products', component:ProductsComponent},
  {path:'editProduct', component:EditProductComponent},
  {path:'inventory', component:InvntoryComponent},
  {path:'addproduct', component:AddprodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
