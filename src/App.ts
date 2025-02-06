import Handlebars from 'handlebars'
import * as Pages from './pages'

import Input from './components/ui/input/Input.ts'
import Button from './components/ui/button/Button.ts'
import { LOGIN_PAGE, SIGN_UP_PAGE } from './utils/constants.ts'

Handlebars.registerPartial('Input', Input)
Handlebars.registerPartial('Button', Button)

export default class App {
  private state: { currentPage: string }
  private readonly appElement: HTMLElement | null

  constructor() {
    this.state = {
      currentPage: LOGIN_PAGE
    }
    this.appElement = document.getElementById('app')
  }

  render() {
    let template
    if (this.state.currentPage === LOGIN_PAGE && this.appElement) {
      template = Handlebars.compile(Pages.LoginPage)
      this.appElement.innerHTML = template({})
    }

    if (this.state.currentPage === SIGN_UP_PAGE && this.appElement) {
      template = Handlebars.compile(Pages.SignUpPage)
      this.appElement.innerHTML = template({})
    }
  }

  changePage(page: string) {
    this.state.currentPage = page
    this.render()
  }
}
