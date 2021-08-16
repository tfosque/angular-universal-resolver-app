import { LogoutComponent } from './pages/logout/logout.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProductDataResolverService } from './services/product-data-resolver.service';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  /* MATCHER create a router matcher with safe router functionality */
  {
    path: 'productDetail/:productId',
    component: ProductDetailsComponent,
    resolve: { productModel: ProductDataResolverService }
  },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
