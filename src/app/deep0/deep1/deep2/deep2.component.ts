import { Component, ElementRef, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep2',
  templateUrl: './deep2.component.html',
  styleUrls: ['./deep2.component.scss']
})
export class Deep2Component implements OnInit {
  public id: string;

  private deep = 2;
  get getDeep(): string {
    console.log(`%cCD - ${this.id} :`, 'color: #f2bf5c');
    console.log(this.elRef.nativeElement);
    return `Deep ${this.deep}`;
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

  click(): void { }
}
