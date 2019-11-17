import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaAppComponent } from './pizza-app/containers/pizza-app/pizza-app.component';

const routes: Routes = [
  {
    path: 'pizza',
    component: PizzaAppComponent
  },
  {
    path: '',
    component: PizzaAppComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PizzaAppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
