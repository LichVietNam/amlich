import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmlichComponent } from './amlich';

const appRoutes: Routes = [
  {path: '', component: AmlichComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        // enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
