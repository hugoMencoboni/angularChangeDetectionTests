import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/store.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep1',
  templateUrl: './deep1.component.html',
  styleUrls: ['./deep1.component.scss']
})
export class Deep1Component implements OnInit, OnDestroy {
  public id: string;
  protected sufix;
  protected subscriptions = new Subscription();

  private deep = 1;
  get title(): string {
    console.log(`%cCD - ${this.id} :`, 'color: #389390');
    console.log(this.elRef.nativeElement);
    return `Deep ${this.deep}${this.sufix ? ` - ${this.sufix}` : ''}`;
  }

  constructor(private elRef: ElementRef, private storeService: StoreService) { }

  ngOnInit(): void {
    this.id = uuidv4();

    this.subscriptions.add(this.storeService.newSufix$().subscribe(newSufix => this.sufix = newSufix));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  click(): void { }
}
