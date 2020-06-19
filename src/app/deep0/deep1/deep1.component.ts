import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from 'src/app/store.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep1',
  templateUrl: './deep1.component.html',
  styleUrls: ['./deep1.component.scss']
})
export class Deep1Component implements OnInit {
  public id: string;

  private deep = 1;
  get title(): Observable<string> {
    console.log(`%cCD - ${this.id} :`, 'color: #389390');
    console.log(this.elRef.nativeElement);
    return this.storeService.newSufix$().pipe(map(newSufix => `Deep ${this.deep}${newSufix ? ` - ${newSufix}` : ''}`));
  }

  constructor(private elRef: ElementRef, private storeService: StoreService) { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

  click(): void { }
}
