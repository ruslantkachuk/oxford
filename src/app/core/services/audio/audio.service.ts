import {Injectable} from '@angular/core';
import {ElectronService} from '..';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioObj = new Audio();

  play(fileName: string) {
    this.audioObj.src = 'file:' + this.electronService.userDataPath + '/' + fileName;
    this.audioObj.load();
    this.audioObj.play();
  }

  constructor(private electronService: ElectronService) {
  }
}
