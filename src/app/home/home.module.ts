import { NgModule } from '@angular/core';
import { AppCommonModule } from '../app-common/common.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  imports: [
    AppCommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeViewComponent,
    HomeComponent
  ]
})
export class HomeModule { constructor() { console.info('HomeModule loaded') } }
