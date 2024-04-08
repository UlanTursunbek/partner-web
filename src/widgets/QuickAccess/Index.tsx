import { AddTodoItem } from '@/app/features'
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

export const QuickAccess = () => {
  return (
    <Menu variant={'quickAccess'} defaultIsOpen placement={'auto'}>
      <MenuButton
        variant={'primary'}
        borderRadius={'50%'}
        padding={'0'}
        paddingBottom={'4px'}
        width={'45px'}
        height={'45px'}
        fontSize={'32px'}
        fontWeight={'400'}
        textAlign={'center'}
        marginBottom={'16px'}
        as={Button}
      >
        +
      </MenuButton>

      <MenuList backgroundColor={'transparent'}>
        <MenuItem as={Box}>
          <AddTodoItem />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
