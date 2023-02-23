import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddToWishlistComponent } from './add-to-wishlist/add-to-wishlist.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"add-to-wishlist", component:AddToWishlistComponent},
  {path:"blog" , component:BlogComponent},
  {path:"cart" , component:CartComponent},
  {path:"checkout" , component:CheckoutComponent},
  {path:"contact", component:ContactComponent},
  {path:"men", component:MenComponent},
  {path:"order-complete" , component:OrderCompleteComponent},
  {path:"product-detail" , component:ProductDetailComponent},
  {path:"shop", component:ShopComponent},
  {path:"women", component:WomenComponent},
  {path:"header", component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"home", component:HomeComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
