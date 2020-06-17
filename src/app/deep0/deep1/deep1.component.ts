import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep1',
  templateUrl: './deep1.component.html',
  styleUrls: ['./deep1.component.scss']
})
export class Deep1Component implements OnInit {
  public id: string;

  private deep = 1;
  get getDeep(): string {
    console.log(`CD - ${this.id} (deep : ${this.deep})`);
    return `Deep ${this.deep}`;
  }

  constructor() { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

}
