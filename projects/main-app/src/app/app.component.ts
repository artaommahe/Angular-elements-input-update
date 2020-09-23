import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="counter = counter + 1">inc</button>

    <some-widget [attr.input-counter]="counter"></some-widget>
  `,
  styles: []
})
export class AppComponent {
  public counter = 1;
}
