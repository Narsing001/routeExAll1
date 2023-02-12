import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { StuddataComponent } from './comp/studdata/studdata.component';
import { StudetailsComponent } from './comp/studetails/studetails.component';
import { UserDetailsComponent } from './comp/user-details/user-details.component';
import { UserComponent } from './comp/user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'student',component:StuddataComponent},
  {path:"udetails/:id",component:UserDetailsComponent},
  {path:'sdetails/:id',component:StudetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
