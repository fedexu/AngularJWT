import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateComponent } from './private/private.component';
import { PrivateViewComponent } from './private-view/private-view.component';

const privateRoutes: Routes = [
    {path:'', component: PrivateComponent, 
    children: [
        {path:'', component: PrivateViewComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(privateRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PrivateRoutingModule{}