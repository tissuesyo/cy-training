import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaFormComponent, PizzaSizeComponent, PizzaSummaryComponent, PizzaToppingsComponent, PizzaViewerComponent } from './components/';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';
import { PizzaAppComponent } from './containers/pizza-app/pizza-app.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PizzaAppComponent,
    PizzaFormComponent,
    PizzaCreatorComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaViewerComponent,
    PizzaSummaryComponent
  ],
  exports: [
    PizzaAppComponent
  ]
})
export class PizzaAppModule {}
