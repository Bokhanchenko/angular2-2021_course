import {NgModule, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TopBarComponent} from "./components/topBar/topBar.component";
import {RouterModule} from "@angular/router";
import {Observable} from "rxjs";
import {CurrentUserInterface} from "../../types/currentUser.interface";
import {select, Store} from "@ngrx/store";
import {
  currenUserSelector,
  isAnonymousSelector,
  isLoggedInSelector
} from "../../../auth/store/selectors";
import {AuthStateInterface} from "../../../auth/types/authState.interface";
import {AppStateInterface} from "../../types/appState.interface";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})

export class TopBarModule {}
