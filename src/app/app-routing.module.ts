import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Project Specific Component */
import { LoginComponent } from './FRMWRK/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
