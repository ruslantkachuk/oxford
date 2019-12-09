import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Word} from '../shared/models/word';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnChanges {
  private display: string;
  @Input()
  private state: number;
  @Input()
  private word: Word;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.state === 1 || this.state === 6) {
      this.display = 'none';
    } else if (this.state === 7) {
      this.display = 'grid';
    }
  }
}
