import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {ElectronService} from '..';


@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  constructor(
    private storage: AngularFireStorage,
    private electronService: ElectronService) {
  }

  isFileExists(fileName: string): boolean {
    return this.electronService.isFileExists(fileName);
  }

  downloadCollection(fileName: string, navigatePath: string) {
    this.storage.ref(fileName).getDownloadURL()
      .subscribe(url => this.electronService.saveFile(url, navigatePath));
  }
}
