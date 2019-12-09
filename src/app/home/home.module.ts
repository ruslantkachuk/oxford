import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { DisplayComponent} from '../display/display.component';
import { SharedModule } from '../shared/shared.module';
import {ExampleComponent} from '../example/example.component';
import {DownloadRoutingModule} from '../download/download-routing.module';
import {DownloadComponent} from '../download/download.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [HomeComponent, DisplayComponent, ExampleComponent, DownloadComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, DownloadRoutingModule, NgxSpinnerModule]
})
export class HomeModule {}
