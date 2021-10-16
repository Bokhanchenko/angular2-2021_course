import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from "../../../../types/backendErrors.interface";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})

export class BackendErrorMessagesComponent implements OnInit{
  // @Input() backendErrors: BackendErrorsInterface
  // It alias for rename props to understand it like props
  // how i can remove any?
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | any

  errorMessages: string[]

  constructor() {}

  ngOnInit(): void {
    console.log(this.backendErrorsProps);

    this.errorMessages = Object
      .keys(this.backendErrorsProps)
      .map((name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')
        return `${name} ${messages}`
      })
  }
}
