import Handlebars from 'handlebars'
import * as Components from './components'
import * as Pages from './pages'
import {
  CHATS_PAGE,
  ERROR_404_PAGE,
  ERROR_500_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE
} from './utils/constants.ts'

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
  404: [
    Pages.ErrorPage404,
    {
      number: 404,
      message: 'Не туда попали',
      link: {
        text: 'Назад к чатам',
        url: PROFILE_PAGE
      }
    }
  ],
  500: [
    Pages.ErrorPage500,
    {
      number: 500,
      message: 'Мы уже фиксим',
      link: {
        text: 'Назад к чатам',
        url: PROFILE_PAGE
      }
    }
  ],
  chats: [
    Pages.ChatsPage,
    {
      chatList: [
        {
          id: 1,
          userInfo: {
            uid: 1,
            name: 'Андрей',
            avatar: ''
          },
          unreadMessage: {
            lastMessage: 'Последнее непрочитанное сообщение',
            date: '10:20',
            count: 2
          },
          isOpenChat: true
        },
        {
          id: 2,
          userInfo: {
            uid: 2,
            name: 'Илья',
            avatar: ''
          },
          unreadMessage: {
            lastMessage: 'Друзья, у меня для вас особенный выпуск новостей!',
            date: '15:12',
            count: 4
          },
          isOpenChat: false
        },
        {
          id: 3,
          userInfo: {
            uid: 3,
            name: 'Марк',
            avatar: ''
          },
          unreadMessage: {
            lastMessage: 'В 2008 году художник Jon Rafman начал собирать',
            date: '17:12',
            count: 0
          },
          isOpenChat: false
        }
      ],
      openChat: {
        id: 1,
        userInfo: {
          uid: 1,
          name: 'Андрей',
          avatar: ''
        }
      }
    }
  ]
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
