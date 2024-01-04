import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { ForexComponent } from './forex/forex.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AdminComponent } from './admin/admin.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { otentikasiGuard } from './otentikasi.guard';
import { CuacaComponent } from './cuaca/cuaca.component';

const routes: Routes = [
    {path: "dashboard1", component: Dashboard1Component, canActivate : [otentikasiGuard]},
    {path: "dashboard2", component: Dashboard2Component, canActivate : [otentikasiGuard]},
    {path: "dashboard3", component: Dashboard3Component, canActivate : [otentikasiGuard]},
    {path: "singup", component: SingupComponent},
    {path: "login", component: LoginComponent},
    {path: "admin", component: AdminComponent},
    {path: "forex", component: ForexComponent},
    {path: "cuaca", component: CuacaComponent},
    {path: "mahasiswa", component: MahasiswaComponent, canActivate : [otentikasiGuard]},
    {path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
