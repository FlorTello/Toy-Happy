import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
