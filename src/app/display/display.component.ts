import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Word} from '../shared/models/word';
import {Audio} from '../shared/constants/audio';
import {AudioService} from '../core/services/audio/audio.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges {
  private displayMap: Map<number, string> = new Map();
  @Input()
  private state: number;
  @Input()
  word: Word;

  constructor(
    private audioService: AudioService,
  ) {
  }

  initDisplayMap() {
    for (let i = 1; i <= 7; i++) {
      this.displayMap.set(i, 'none');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.state) {
      case 1: {
        this.initDisplayMap();
        this.updateState(this.state);
        break;
      }
      case 2: {
        this.updateState(this.state);
        this.playAudio(Audio.UK);
        break;
      }
      case 3: {
        this.updateState(this.state);
        this.playAudio(Audio.USA);
        break;
      }
      case 4:
      case 5:
      case 6: {
        this.updateState(this.state);
        break;
      }
    }
  }

  private updateState(state: number): void {
    this.displayMap.set(state, 'grid');
    this.displayMap.set(state + 1, 'none');
  }
  private playAudio(audio: Audio): void {
    switch (audio) {
      case Audio.UK: {
        this.audioService.play(this.word.audioUK);
        break;
      }
      case Audio.USA: {
        this.audioService.play(this.word.audioUSA);
        break;
      }
    }
  }
}
