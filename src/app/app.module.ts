import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PropertyComponent } from './components/property/list_properties/property.component';
import { AddPropertyComponent } from './components/property/add-property/add-property.component';
import { UpdatePropertyComponent } from './components/property/update-property/update-property.component';
import { DeletePropertyComponent } from './components/property/delete-property/delete-property.component';

import { ListKeywordComponent } from './components/keyword/list-keyword/list-keyword.component';
import { AddKeywordComponent } from './components/keyword/add-keyword/add-keyword.component';
import { UpdateKeywordComponent } from './components/keyword/update-keyword/update-keyword.component';
import { DeleteKeywordComponent } from './components/keyword/delete-keyword/delete-keyword.component';

import { ListAdvantageComponent } from './components/advantage/list-advantage/list-advantage.component';
import { AddAdvantageComponent } from './components/advantage/add-advantage/add-advantage.component';
import { UpdateAdvantageComponent } from './components/advantage/update-advantage/update-advantage.component';
import { DeleteAdvantageComponent } from './components/advantage/delete-advantage/delete-advantage.component';

import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { AddRoleComponent } from './components/role/add-role/add-role.component';
import { UpdateRoleComponent } from './components/role/update-role/update-role.component';
import { DeleteRoleComponent } from './components/role/delete-role/delete-role.component';

import { ListAdvertisementComponent } from './components/advertisement/list-advertisement/list-advertisement.component';
import { DetailAdvertisementComponent } from './components/advertisement/detail-advertisement/detail-advertisement.component';
import { AddAdvertisementComponent } from './components/advertisement/add-advertisement/add-advertisement.component';
import { UpdateAdvertisementComponent } from './components/advertisement/update-advertisement/update-advertisement.component';
import { DeleteAdvertisementComponent } from './components/advertisement/delete-advertisement/delete-advertisement.component';

import { ListUserComponent } from './components/user/list-user/list-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';

import {CdkTableModule} from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { JwtInterceptorInterceptor } from './_helpers/jwt-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyComponent,
    AddPropertyComponent,
    UpdatePropertyComponent,
    DeletePropertyComponent,
    ListKeywordComponent,
    AddKeywordComponent,
    UpdateKeywordComponent,
    DeleteKeywordComponent,
    ListAdvantageComponent,
    AddAdvantageComponent,
    UpdateAdvantageComponent,
    DeleteAdvantageComponent,
    ListRoleComponent,
    AddRoleComponent,
    UpdateRoleComponent,
    DeleteRoleComponent,
    ListAdvertisementComponent,
    DetailAdvertisementComponent,
    AddAdvertisementComponent,
    UpdateAdvertisementComponent,
    DeleteAdvertisementComponent,
    ListUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    LoginUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
