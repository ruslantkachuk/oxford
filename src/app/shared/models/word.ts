import {OxfordType} from '../constants/oxford-type';
import {LexicalCategory} from '../constants/lexical-category';
import {Level} from '../constants/level';
import {WordDefinition} from './word-definition';
import {TranslationDetailed} from './translation-detailed';

export class Word {
  id: number;
  word: string;
  levels: Level[];
  lexicalCategory: LexicalCategory [];
  oxfordType: OxfordType;
  translation: string;
  translationDetailed: TranslationDetailed [];
  definitions: WordDefinition [];
  examples: string[];
  transcriptionUK: string;
  transcriptionUSA: string;
  audioUK: string;
  audioUSA: string;
}
