import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'some-widget',
  template: `
   some widget input counter: {{ inputCounter }}
   <button (click)="tick()">trigger widget CD</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomeWidgetComponent implements OnChanges {
  @Input() inputCounter: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnChanges(): void {
    /* this.changeDetectorRef.markForCheck(); */
  }

  public tick(): void {
  }
}