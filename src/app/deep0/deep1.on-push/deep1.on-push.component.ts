import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Deep1Component } from '../deep1/deep1.component';

@Component({
  selector: 'app-deep1-on-push',
  templateUrl: '../deep1/deep1.component.html',
  styleUrls: ['../deep1/deep1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Deep1OnPushComponent extends Deep1Component {
  get title(): string {
    return super.title + ' - onPush';
  }
}
