import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SomeModuleWidget } from "./some-widget/some-widget.module";

@NgModule({
  imports: [BrowserModule, SomeModuleWidget],
  providers: [],
})
export class AppModule {
  ngDoBootstrap(): void {}
}
