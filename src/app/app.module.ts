import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ConvertInterceptor } from "./core/interceptors/convert.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { PeopleDialogComponent } from './components/people-dialog/people-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { TableModule } from "./modules/table/table.module";
import { SelectModule } from "./modules/selector/select.module";

@NgModule({
  declarations: [
    AppComponent,
    PeopleDialogComponent,
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      SelectModule,
      MatSelectModule,
      FormsModule,
      TableModule,
      MatDialogModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConvertInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
