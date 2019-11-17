import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pizza-summary.component.scss'],
  templateUrl: './pizza-summary.component.html'
})
export class PizzaSummaryComponent {
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;
}
