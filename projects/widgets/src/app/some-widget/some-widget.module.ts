import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SomeWidgetComponent } from './components/some-widget/some-widget.component';

@NgModule({
  declarations: [SomeWidgetComponent],
  exports: [SomeWidgetComponent],
})
export class SomeModuleWidget {
  constructor(injector: Injector) {
    const widgetElement = createCustomElement(SomeWidgetComponent, { injector });

    customElements.define('some-widget', widgetElement);
  }
}