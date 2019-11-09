import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LoginViewComponent } from './login-view/login-view.component';

const loginRoutes: Routes = [
    {path:'', component: LoginComponent, 
    children: [
        {path:'', component: LoginViewComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule{}