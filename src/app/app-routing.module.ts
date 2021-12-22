import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdvantageComponent } from './components/advantage/add-advantage/add-advantage.component';
import { ListAdvantageComponent } from './components/advantage/list-advantage/list-advantage.component';
import { UpdateAdvantageComponent } from './components/advantage/update-advantage/update-advantage.component';
import { AddAdvertisementComponent } from './components/advertisement/add-advertisement/add-advertisement.component';
import { DetailAdvertisementComponent } from './components/advertisement/detail-advertisement/detail-advertisement.component';
import { ListAdvertisementComponent } from './components/advertisement/list-advertisement/list-advertisement.component';
import { UpdateAdvertisementComponent } from './components/advertisement/update-advertisement/update-advertisement.component';
import { AddKeywordComponent } from './components/keyword/add-keyword/add-keyword.component';
import { ListKeywordComponent } from './components/keyword/list-keyword/list-keyword.component';
import { UpdateKeywordComponent } from './components/keyword/update-keyword/update-keyword.component';
import { AddPropertyComponent } from './components/property/add-property/add-property.component';
import { PropertyComponent } from './components/property/list_properties/property.component';
import { UpdatePropertyComponent } from './components/property/update-property/update-property.component';
import { AddRoleComponent } from './components/role/add-role/add-role.component';
import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { UpdateRoleComponent } from './components/role/update-role/update-role.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';

const routes: Routes = [
  {path: '', 'component':ListAdvertisementComponent},
  {path: 'advertisement/add', 'component':AddAdvertisementComponent},
  {path: 'advertisement/:id', 'component':DetailAdvertisementComponent},
  {path: 'advertisement/edit/:id', 'component':UpdateAdvertisementComponent},

  {path: 'properties', 'component':PropertyComponent},
  {path: 'property/add', 'component':AddPropertyComponent},
  {path: 'property/edit/:id', 'component':UpdatePropertyComponent},

  {path: 'keywords', 'component':ListKeywordComponent},
  {path: 'keyword/add', 'component':AddKeywordComponent},
  {path: 'keyword/edit/:id', 'component':UpdateKeywordComponent},

  {path: 'advantages', 'component':ListAdvantageComponent},
  {path: 'advantage/add', 'component':AddAdvantageComponent},
  {path: 'advantage/edit/:id', 'component':UpdateAdvantageComponent},

  {path: 'roles', 'component':ListRoleComponent},
  {path: 'role/add', 'component':AddRoleComponent},
  {path: 'role/edit/:id', 'component':UpdateRoleComponent},

  {path: 'login', 'component':LoginUserComponent},
  {path: 'users', 'component':ListUserComponent},
  {path: 'user/add', 'component':AddUserComponent},
  {path: 'user/edit/:id', 'component':UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
