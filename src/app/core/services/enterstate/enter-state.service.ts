import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterStateService {
  private actionSubject = new Subject<number>();
  actionSubjectInvoked$ = this.actionSubject.asObservable();

  actionNext() {
    this.actionSubject.next(1);
  }

  actionPrevious() {
    this.actionSubject.next(-1);
  }

}
