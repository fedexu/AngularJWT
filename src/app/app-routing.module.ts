import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'private', loadChildren: './private/private.module#PrivateModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }