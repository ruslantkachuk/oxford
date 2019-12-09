import {Injectable, NgZone} from '@angular/core';
import {app, ipcRenderer, remote, webFrame} from 'electron';
import * as childProcess from 'child_process';
import * as https from 'https';
import * as fs from 'fs';
import * as unzip from 'unzip-stream';
import * as path from 'path';
import {EnterStateService} from '../enterstate/enter-state.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  userDataPath: string;
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;
  unzip: typeof unzip;
  path: typeof path;

  get isElectron() {
    return window && window.process && window.process.type;
  }

  constructor(
    private enterStateService: EnterStateService,
    private ngZone: NgZone,
    private router: Router
  ) {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;
      this.path = window.require('electron').path;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
      this.unzip = window.require('unzip-stream');
    }
    this.userDataPath = (app || this.remote.app).getPath('userData');
    this.addShortcuts();
  }

  addShortcuts(): void {
    const Menu = this.remote.Menu;
    const application = this.remote.app;
    const isMac: boolean = process.platform === 'darwin';

    const template: any[] = [

      ...(isMac ? [{
        label: application.name,
        submenu: [
          {role: 'about'}
        ]
      }] : []),
      {
        label: 'Hotkeys',
        submenu: [
          {
            label: 'Next',
            accelerator: 'Enter',
            click: () => {
              this.enterStateService.actionNext();
            }
          },
          {
            label: 'Previous',
            accelerator: 'Shift+Enter',
            click: () => {
              this.enterStateService.actionPrevious();
            }
          }

        ]
      }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }

  isFileExists(fileName: string): boolean {
    return this.fs.existsSync(this.userDataPath + '/' + fileName);
  }

  getFile(fileName: string): Buffer {
    return this.fs.readFileSync(this.userDataPath + '/' + fileName);
  }

  saveFile(url: string, navigatePath: string) {
    const zipFile = this.unzip.Extract({ path: this.userDataPath });
    https.get(url, res => {
      res.pipe(zipFile).on('close', args => {
        this.ngZone.run(() => this.router.navigate([navigatePath]));
      });
    });
  }
}

