
export type GroupName =
  | 'Example'
  | 'Others'

export type AppRoute = {
  path: string
  text?: string
  icon?: string
  element: any
  group?: GroupName
  showMenu?: boolean
}
export type AppRouterKey = 'INDEX' | 'CREATE' | 'DETAIL'

export type AppRouter = {
  [key in AppRouterKey]?: AppRoute
}
