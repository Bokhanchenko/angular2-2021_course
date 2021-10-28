import {Component, OnInit} from '@angular/core'
import {Observable} from "rxjs";
import {CurrentUserInterface} from "../../../../types/currentUser.interface";
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../../../../types/appState.interface";
import {
  currenUserSelector,
  isAnonymousSelector,
  isLoggedInSelector
} from "../../../../../auth/store/selectors";

@Component({
  selector: 'mc-topBar',
  templateUrl: 'topBar.component.html',
  styleUrls: ['topBar.component.scss'],
})

export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor (private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currenUserSelector))
  }
}
