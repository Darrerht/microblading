import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeMX from '@angular/common/locales/es-MX';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material';
import { LoaderComponent } from './shared/pages/loader/loader.component';
import { HeadersService } from './shared/services/headers/headers.service';
import { QuillModule } from 'ngx-quill';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeMX, 'es-MX')
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    QuillModule.forRoot()
  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS, useClass: HeadersService, multi: true
      },
      { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
