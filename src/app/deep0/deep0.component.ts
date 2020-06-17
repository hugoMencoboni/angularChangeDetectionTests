import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deep0',
  templateUrl: './deep0.component.html',
  styleUrls: ['./deep0.component.scss']
})
export class Deep0Component implements OnInit {
  public id: string;

  private deep = 0;
  get getDeep(): string {
    console.log(`CD - ${this.id} (deep : ${this.deep})`);
    return `Deep ${this.deep}`;
  }

  constructor() { }

  ngOnInit(): void {
    this.id = uuidv4();
  }

}
