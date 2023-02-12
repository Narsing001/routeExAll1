import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavcompComponent } from './comp/navcomp/navcomp.component';
import { HomeComponent } from './comp/home/home.component';
import { UserDetailsComponent } from './comp/user-details/user-details.component';
import { UserComponent } from './comp/user/user.component';
import { StuddataComponent } from './comp/studdata/studdata.component';
import { StudetailsComponent } from './comp/studetails/studetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavcompComponent,
    HomeComponent,
    UserDetailsComponent,
    UserComponent,
    StuddataComponent,
    StudetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
