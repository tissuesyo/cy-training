import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin/admin-main.component';
import { QueryComponent } from './admin/query.component';
import { PizzaAppComponent } from './pizza-app/containers/pizza-app/pizza-app.component';

const routes: Routes = [
  {
    path: 'pizza',
    component: PizzaAppComponent
  },
  {
    path: 'admin',
    component: AdminMainComponent
  },
  {
    path: 'query',
    component: QueryComponent
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
