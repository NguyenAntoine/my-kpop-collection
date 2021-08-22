import { NgModule } from '@angular/core';

import { IdolsRoutingModule } from './idols-routing.module';
import { ListIdolComponent } from './components/list-idol/list-idol.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [ListIdolComponent],
  imports: [
    SharedModule,
    IdolsRoutingModule
  ]
})
export class IdolsModule { }
