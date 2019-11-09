import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { HomeViewComponent } from './home-view/home-view.component';

const homeRoutes: Routes = [
    {path:'', component: HomeComponent, 
    children: [
        {path:'', component: HomeViewComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule{}