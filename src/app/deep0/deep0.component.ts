import { Component, ElementRef, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep0',
  templateUrl: './deep0.component.html',
  styleUrls: ['./deep0.component.scss']
})
export class Deep0Component implements OnInit {
  public id: string;
  protected sufix;

  private deep = 0;
  get title(): string {
    console.log(`%cCD - ${this.id} :`, 'color: #f05b5f');
    console.log(this.elRef.nativeElement);
    return `Deep ${this.deep}${this.sufix ? ` - ${this.sufix}` : ''}`;
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

  click(): void { }
}
