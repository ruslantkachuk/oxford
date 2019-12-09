import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StorageService} from '../core/services/storage/storage.service';
import {Word} from '../shared/models/word';
import {EnterStateService} from '../core/services/enterstate/enter-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeWord: Word;
  activeState: number;

  constructor(private storageService: StorageService,
              private cd: ChangeDetectorRef,
              private enterStateService: EnterStateService) {
    this.enterStateService.actionSubjectInvoked$.subscribe(value => {
      this.activeState += value;
      if (this.activeState <= 0 ) {
        this.newWord(-1);
        this.activeState = 1;
      } else if (this.activeState > 7) {
        this.newWord(1);
        this.activeState = 1;
      }
      this.cd.detectChanges();
    });
  }

  ngOnInit(): void {
    this.activeWord = this.storageService.getWordById(1);
    this.activeState = 1;
    this.cd.detectChanges();
  }

  getWords() {
    return this.storageService.getWords();
  }

  onActiveWord(activeWord: Word) {
    this.activeWord = activeWord;
    this.activeState = 1;
  }

  newWord(idAdd: number) {
    const newWord = this.storageService.getWordById(this.activeWord.id + idAdd);
    this.activeWord = newWord
      ? newWord
      : this.activeWord;
  }
}
