import { AppRoute } from '@/types/Route'
import EXAMPLE_ROUTES, { EXAMPLE } from './example'
import EXAMPLE1_ROUTES, { EXAMPLE1 } from './example1'
import OTHER_ROUTES, { OTHER } from './other'

const APP_ROUTE = {
  EXAMPLE,
  EXAMPLE1,
  OTHER
}
export default APP_ROUTE

export const ROUTES: AppRoute[] = [
  ...EXAMPLE_ROUTES,
  ...EXAMPLE1_ROUTES,
  ...OTHER_ROUTES
]
