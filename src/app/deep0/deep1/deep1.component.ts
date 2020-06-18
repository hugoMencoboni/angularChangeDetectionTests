import { Component, ElementRef, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep1',
  templateUrl: './deep1.component.html',
  styleUrls: ['./deep1.component.scss']
})
export class Deep1Component implements OnInit {
  public id: string;
  protected sufix;

  private deep = 1;
  get title(): string {
    console.log(`%cCD - ${this.id} :`, 'color: #389390');
    console.log(this.elRef.nativeElement);
    return `Deep ${this.deep}${this.sufix ? ` - ${this.sufix}` : ''}`;
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

  click(): void { }
}
