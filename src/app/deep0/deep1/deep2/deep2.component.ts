import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/store.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep2',
  templateUrl: './deep2.component.html',
  styleUrls: ['./deep2.component.scss']
})
export class Deep2Component implements OnInit, OnDestroy {
  public id: string;
  protected sufix;
  protected subscriptions = new Subscription();

  private deep = 2;
  get title(): string {
    console.log(`%cCD - ${this.id} :`, 'color: #f2bf5c');
    console.log(this.elRef.nativeElement);
    return `Deep ${this.deep}${this.sufix ? ` - ${this.sufix}` : ''}`;
  }

  @Input() triggerStore = false;

  constructor(private elRef: ElementRef, private storeService: StoreService) { }

  ngOnInit(): void {
    this.id = uuidv4();

    this.subscriptions.add(this.storeService.newSufix$().subscribe(newSufix => this.sufix = newSufix));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  click(): void {
    if (this.triggerStore) {
      this.storeService.changeSufix(`store update fire by ${this.id}`);
    }
  }
}
