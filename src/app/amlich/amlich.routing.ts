import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmlichComponent } from './amlich.component';

const amlichRoutes: Routes = [
  {path: ':year', component: AmlichComponent},
  {path: ':year/:month', component: AmlichComponent},
  {path: ':year/:month/:date', component: AmlichComponent},
  {path: ':year/:month/:date/:type', component: AmlichComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      amlichRoutes, {
        // enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AmlichRoutingModule {}
