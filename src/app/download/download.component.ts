import {Component, OnInit} from '@angular/core';
import {DownloadService} from '../core/services/download/download.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  private fileArchive = 'words.zip';
  private fileName = 'words.json';
  private navigatePath = '/home';

  constructor(
    private downloadService: DownloadService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    if (this.downloadService.isFileExists(this.fileName)) {
      this.router.navigate([this.navigatePath]);
    }
  }

  downloadCollection() {
    this.spinner.show('sp1');
    this.downloadService.downloadCollection(this.fileArchive, this.navigatePath);
  }
}
