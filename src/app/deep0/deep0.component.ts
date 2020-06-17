import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deep0',
  templateUrl: './deep0.component.html',
  styleUrls: ['./deep0.component.scss']
})
export class Deep0Component implements OnInit {

  private deep = 0;
  get getDeep(): string {
    console.log(`CD - deep : ${this.deep}`);
    return `Deep ${this.deep}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
