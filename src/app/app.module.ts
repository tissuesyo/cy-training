import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminMainComponent } from './admin/admin-main.component';
import { QueryComponent } from './admin/query.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaAppModule } from './pizza-app/pizza-app.module';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PizzaAppModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AdminMainComponent,
    QueryComponent
  ]
})
export class AppModule {}
