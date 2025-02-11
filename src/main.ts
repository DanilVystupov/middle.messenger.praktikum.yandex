import Handlebars from 'handlebars'
import * as Components from './components'
import * as Pages from './pages'
import { CHATS_PAGE, LOGIN_PAGE } from './utils/constants.ts'

const pages = {
  login: [Pages.LoginPage],
  signUp: [Pages.SignUpPage],
  base: [Pages.BasePage],
  profile: [
    Pages.ProfilePage,
    {
      title: 'PROFILE PAGE'
    }
  ],
  404: [Pages.ErrorPage404],
  500: [Pages.ErrorPage500],
  chats: [Pages.ChatsPage]
}

Object.entries(Components).forEach(([name, template]) => {
  Handlebars.registerPartial(name, template)
})

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page]
  const container = document.getElementById('app')!

  const templatingFunction = Handlebars.compile(source)
  container.innerHTML = templatingFunction(context)
}

document.addEventListener('DOMContentLoaded', () => navigate(CHATS_PAGE))

document.addEventListener('click', (e) => {
  //@ts-ignore
  const page = e.target.getAttribute('data-page')
  if (page) {
    navigate(page)

    e.preventDefault()
    e.stopImmediatePropagation()
  }
})
