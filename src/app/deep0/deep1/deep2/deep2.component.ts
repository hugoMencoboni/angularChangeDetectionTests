import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from 'src/app/store.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep2',
  templateUrl: './deep2.component.html',
  styleUrls: ['./deep2.component.scss']
})
export class Deep2Component implements OnInit {
  public id: string;
  protected sufix;

  private deep = 2;
  get title(): Observable<string> {
    console.log(`%cCD - ${this.id} :`, 'color: #f2bf5c');
    console.log(this.elRef.nativeElement);
    return this.storeService.newSufix$().pipe(map(newSufix => `Deep ${this.deep}${newSufix ? ` - ${newSufix}` : ''}`));
  }

  @Input() triggerStore = false;

  constructor(private elRef: ElementRef, private storeService: StoreService) { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

  click(): void {
    if (this.triggerStore) {
      this.storeService.changeSufix(`store update fire by ${this.id}`);
    }
  }
}
