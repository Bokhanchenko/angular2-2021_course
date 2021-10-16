import {NgModule} from '@angular/core'
import {StoreModule} from "@ngrx/store"
import {StoreDevtoolsModule} from "@ngrx/store-devtools"
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/aunt.modue'
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
