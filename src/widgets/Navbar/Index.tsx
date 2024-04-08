import { useLocation } from 'react-router-dom'

import { NAVBAR_LINKS } from '@/shared/constants/navbarLinks'
import { HStack } from '@chakra-ui/react'

import { QuickAccess } from '../QuickAccess/Index'

import { NavbarItem } from './Item'

export const Navbar = () => {
  const location = useLocation()

  return (
    <HStack
      width={'100%'}
      boxShadow="dark-lg"
      padding={'8px 0'}
      gap={'8px'}
      justifyContent={'space-evenly'}
    >
      {NAVBAR_LINKS.slice(0, 2).map((it) => (
        <NavbarItem
          key={it.title}
          title={it.title}
          link={it.link}
          icon={it.icon}
          isActive={location.pathname === it.link}
        />
      ))}

      <QuickAccess />

      {NAVBAR_LINKS.slice(2).map((it) => (
        <NavbarItem
          key={it.title}
          title={it.title}
          link={it.link}
          icon={it.icon}
          isActive={location.pathname === it.link}
        />
      ))}
    </HStack>
  )
}
