import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deep1',
  templateUrl: './deep1.component.html',
  styleUrls: ['./deep1.component.scss']
})
export class Deep1Component implements OnInit {

  private deep = 1;
  get getDeep(): string {
    console.log(`CD - deep : ${this.deep}`);
    return `Deep ${this.deep}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
