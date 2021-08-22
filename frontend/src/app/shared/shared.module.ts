import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from '../modules/api/api.module';
import {CommonModule} from '@angular/common';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {NouisliderModule} from 'ng2-nouislider';
import { GenderPipe } from './pipes/gender.pipe';
import { ActivePipe } from './pipes/active.pipe';

@NgModule({
    exports: [
        CommonModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        ApiModule,
        RouterModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        ActivePipe,
        GenderPipe,
    ],
    declarations: [GenderPipe, ActivePipe],
})
export class SharedModule {}
