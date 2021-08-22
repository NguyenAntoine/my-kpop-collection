import { NgModule } from '@angular/core';

import { BandsRoutingModule } from './bands-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListBandComponent } from './components/list-band/list-band.component';


@NgModule({
  declarations: [ListBandComponent],
  imports: [
    SharedModule,
    BandsRoutingModule
  ]
})
export class BandsModule { }
