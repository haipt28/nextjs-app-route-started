export interface IProfile {
  exp: number
  iat: number
  iss: string
  sub: string
  aud: string | string[]
  name: string
  email: string
  [key: string]: any
  realm_access: {
    roles: string[]
  }
  roleTransfer: {
    create: boolean
    read: boolean
    update: boolean
    delete: boolean
  }
}
