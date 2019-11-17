import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true
};

@Component({
  selector: 'app-pizza-toppings',
  providers: [PIZZA_TOPPINGS_ACCESSOR],
  styleUrls: ['./pizza-toppings.component.scss'],
  templateUrl: './pizza-toppings.component.html'
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  toppings = [
    'anchovy',
    'bacon',
    'basil',
    'chili',
    'mozzarella',
    'mushroom',
    'olive',
    'onion',
    'pepper',
    'pepperoni',
    'sweetcorn',
    'tomato'
  ];

  value: string[] = [];
  focused: string;

  private onTouch: () => void;
  private onModelChange: (val: any) => void;

  registerOnChange(fn: (val: any) => void) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouch = fn;
  }

  writeValue(value: any) {
    this.value = value;
  }

  updateTopping(topping: string) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter((x: string) => topping !== x);
    } else {
      this.value = this.value.concat([topping]);
    }
    this.onModelChange(this.value);
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
