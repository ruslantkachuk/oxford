import {Injectable} from '@angular/core';
import {Word} from '../../../shared/models/word';
import {ElectronService} from '..';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  words: Word [];
  private wordMap: Map<number, Word> = new Map();

  constructor(private electronService: ElectronService) {
    this.words = JSON.parse(this.electronService.getFile('words.json').toString());
    this.words.forEach(value => this.wordMap.set(value.id, value));
  }

  getWords() {
    return this.words;
  }

  getWordById(id: number) {
    return this.wordMap.get(id);
  }
}
