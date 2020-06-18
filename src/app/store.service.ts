import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  protected newSufix = new Subject<string>();
  newSufix$ = () => this.newSufix.asObservable();
  changeSufix = (newSufix: string) => this.newSufix.next(newSufix);
}
