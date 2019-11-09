import { NgModule } from '@angular/core';
import { AppCommonModule } from '../app-common/common.module';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private/private.component';
import { PrivateViewComponent } from './private-view/private-view.component';

@NgModule({
  imports: [
    AppCommonModule,
    PrivateRoutingModule
  ],
  declarations: [
    PrivateViewComponent,
    PrivateComponent
  ]
})
export class PrivateModule { constructor() { console.info('PrivateModule loaded') } }
