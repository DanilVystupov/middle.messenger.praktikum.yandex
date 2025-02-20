export interface UserInfo {
  uid: number
  name: string
  avatar: string
}

export interface UnreadMessage {
  lastMessage: string
  date: string
  count: number
}

export interface Chat {
  id: number
  userInfo: UserInfo
  unreadMessage?: UnreadMessage
  isOpenChat?: boolean
}

export interface ProfileField {
  title: string
  value: string | number
  name: string
  type: string
  mode?: string
}

export interface ProfileData {
  uid: number
  avatar: string
  displayName: string
  fields: ProfileField[]
  fieldsEditPassword: ProfileField[]
}

export interface PageData {
  user?: ProfileData
  chatList?: Chat[]
  openChat?: Chat
  isActiveModal?: boolean
  svgArrowRight?: string
  svgArrowRightAlt?: string
  isEditData?: boolean
  isEditPassword?: boolean
  number?: number
  message?: string
  link?: {
    text: string
    url: string
  }
}

export interface PagesObject {
  [key: string]: [string, PageData?]
}
