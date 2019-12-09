import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DownloadComponent} from './download.component';

const routes: Routes = [
  {
    path: 'download',
    component: DownloadComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadRoutingModule {}
