import { NavComponent } from './components/nav/nav.component';
import { ProductDataResolverService } from './services/product-data-resolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginModule } from '../app/modules/login/login.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [ProductDataResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
