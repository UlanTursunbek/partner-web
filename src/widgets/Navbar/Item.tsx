import { NavLink } from 'react-router-dom'

import { ComponentWithAs, Icon, IconProps, Link, Text } from '@chakra-ui/react'

interface Props {
  title: string
  link: string
  icon: ComponentWithAs<'svg', IconProps>
  isActive?: boolean
}

export const NavbarItem = ({ title, link, icon, isActive }: Props) => {
  return (
    <Link
      as={NavLink}
      to={link}
      display={'flex'}
      height={'100%'}
      width={'24px'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={'2px'}
      color={isActive ? 'black' : 'gray.500'}
    >
      <Icon as={icon} />

      {/* TODO change to variant  */}
      <Text fontWeight={'400'} fontSize={'10px'}>
        {title}
      </Text>
    </Link>
  )
}
