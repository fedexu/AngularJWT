import { NgModule } from '@angular/core';
import { AppCommonModule } from '../app-common/common.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginViewComponent } from './login-view/login-view.component';

@NgModule({
  imports: [
    AppCommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginViewComponent,
    LoginComponent
  ]
})
export class LoginModule { constructor() { console.info('LoginModule loaded') } }
