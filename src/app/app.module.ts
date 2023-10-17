import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PersonUpdateComponent } from './person-update/person-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomePageComponent,
    ErrorComponent,
    PersonAddComponent,
    PersonDeleteComponent,
    PersonUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'personGet', component:PersonComponent},
      {path:'personUpdate', component:PersonUpdateComponent},
      {path:'personAdd', component:PersonAddComponent},
      {path:'personDelete', component:PersonDeleteComponent},
      {path:'home', component:HomePageComponent},
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'**', component:ErrorComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
