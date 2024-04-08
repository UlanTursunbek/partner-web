import { IconGear } from '../Icons/IconGear'
import { IconHome } from '../Icons/IconHome'
import { IconList } from '../Icons/IconList'
import { IconWallet } from '../Icons/IconWallet'

import { ROUTES } from './routes'

export const NAVBAR_LINKS = [
  {
    title: 'Home',
    link: ROUTES.home,
    icon: IconHome,
  },
  {
    title: 'List',
    link: ROUTES.list,
    icon: IconList,
  },
  {
    title: 'Budget',
    link: ROUTES.budget,
    icon: IconWallet,
  },
  {
    title: 'Settings',
    link: ROUTES.settings,
    icon: IconGear,
  },
]
