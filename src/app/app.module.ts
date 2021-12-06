import {NgModule} from '@angular/core'
import {StoreModule} from "@ngrx/store"
import {StoreDevtoolsModule} from "@ngrx/store-devtools"
import {BrowserModule} from '@angular/platform-browser'
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {TopBarModule} from "./shared/modules/topBar/topBar.module";
import {PersistenceService} from "./shared/services/persistence.service";
import {AuthInterceptor} from "./shared/services/authInterseptor.service";
import {GlobalFeedModule} from "./globalFeed/globalFeed.module";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {YourFeedModule} from "./yourFeed/yourFeed.module";
import {TagFeedModule} from "./tagFeed/tagFeed.module";
import {ArticleModule} from "./article/article.module";
import {CreateArticleModule} from "./createArticle/createArticle.module";
import {EditArticleModule} from "./editArticle/editArticle.module";
import {SettingsModule} from "./settings/settings.module";
import {UserProfileModule} from "./userProfile/userProfile.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    TagFeedModule,
    YourFeedModule,
    // CreateArticleModule need to be first, because articles/new - new can take like :slug
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
    SettingsModule,
    UserProfileModule
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
