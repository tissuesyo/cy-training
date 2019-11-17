import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaAppModule } from './pizza-app/pizza-app.module';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    PizzaAppModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
