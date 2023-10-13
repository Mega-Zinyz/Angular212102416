import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "singup", component: SingupComponent},
    {path: "login", component: LoginComponent},
    {path: "admin", component: AdminComponent},
    {path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
