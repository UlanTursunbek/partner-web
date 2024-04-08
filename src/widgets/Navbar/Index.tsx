import { useLocation } from 'react-router-dom'

import { NAVBAR_LINKS } from '@/shared/constants/navbarLinks'
import { Button, HStack, Text, VStack } from '@chakra-ui/react'

import { NavbarItem } from './Item'

export const Navbar = () => {
  const location = useLocation()

  return (
    <HStack
      width={'100%'}
      boxShadow="dark-lg"
      padding={'16px 0'}
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

      <VStack spacing={'2px'} marginTop={'-4px'} alignItems={'center'}>
        <Button
          variant={'primary'}
          borderRadius={'50%'}
          padding={'0'}
          paddingBottom={'4px'}
          width={'24px'}
          height={'24px'}
          fontSize={'24px'}
          fontWeight={'400'}
          textAlign={'center'}
        >
          +
        </Button>

        {/* TODO change to variant  */}
        <Text fontWeight={'400'} fontSize={'10px'}>
          Add
        </Text>
      </VStack>

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
