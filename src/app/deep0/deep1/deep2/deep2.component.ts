import { Component, OnInit } from '@angular/core';
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
    console.log(`CD - ${this.id} (deep : ${this.deep})`);
    return `Deep ${this.deep}`;
  }

  constructor() { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

  click(): void {

  }
}
