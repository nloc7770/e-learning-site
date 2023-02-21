import React from "react"

export type GroupName =
  | 'Example'
  | 'Others'

export type AppRoute = {
  path: string
  text?: string
  icon?: string
  element: JSX.Element
  group?: GroupName
  showMenu?: boolean
}
export type AppRouterKey = 'INDEX' | 'CREATE' | 'DETAIL'

export type AppRouter = {
  [key in AppRouterKey]?: AppRoute
}
 declare global {
  namespace JSX {
    interface IntrinsicElements {
      item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}