import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  isSubmittingSelector,
  validationErrorsSelector
} from "../../store/selectors";
import {AppStateInterface} from "../../../shared/types/appState.interface";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {LoginRequestInterface} from "../../types/loginRequest.interface";
import {loginAction} from "../../store/actions/login.action";

@Component({
  selector: 'mc-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})

export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))

    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = { user: this.form.value }
    this.store.dispatch(loginAction({ request }))
  }
}
