import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UsersComponent } from './admin-layout/users/users.component';
import { GroupsComponent } from './admin-layout/groups/groups.component';
import { GroupsDetailsComponent } from './admin-layout/groups/groups-details/groups-details.component';
import { GroupsFormComponent } from './admin-layout/groups/groups-form/groups-form.component';
import { UsersDetailsComponent } from './admin-layout/users/users-details/users-details.component';
import { UsersFormComponent } from './admin-layout/users/users-form/users-form.component';
import {UsersService} from "./admin-layout/users/users.service";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'admin', component: AdminLayoutComponent, children: [
        { path: 'users', component: UsersComponent },
        { path: 'users/new', component: UsersFormComponent },
        { path: 'users/:id', component: UsersDetailsComponent },
        { path: 'users/:id/edit', component: UsersFormComponent },
        { path: 'groups', component: GroupsComponent },
        { path: 'groups/new', component: GroupsFormComponent },
        { path: 'groups/:id', component: GroupsDetailsComponent },
        { path: 'groups/:id/edit', component: GroupsFormComponent }
    ]},
    { path: '**', redirectTo: 'login'}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomCardComponent,
    LoginComponent,
    AdminLayoutComponent,
    UsersComponent,
    GroupsComponent,
    GroupsDetailsComponent,
    GroupsFormComponent,
    UsersDetailsComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      ReactiveFormsModule,
    HttpModule,
      AngularFontAwesomeModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
