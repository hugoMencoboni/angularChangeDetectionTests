import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  protected newSufix = new BehaviorSubject<string>('');
  newSufix$ = () => this.newSufix.asObservable();
  changeSufix = (newSufix: string) => this.newSufix.next(newSufix);
}
