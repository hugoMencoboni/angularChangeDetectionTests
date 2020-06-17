import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deep2',
  templateUrl: './deep2.component.html',
  styleUrls: ['./deep2.component.scss']
})
export class Deep2Component implements OnInit {

  private deep = 2;
  get getDeep(): string {
    console.log(`CD - deep : ${this.deep}`);
    return `Deep ${this.deep}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
