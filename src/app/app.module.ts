import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DatasComponent } from './datas/datas.component';
import { DatashComponent } from './datash/datash.component';

@NgModule({
    declarations: [AppComponent, TestComponent, DatasComponent, DatashComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
