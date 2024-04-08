import { extendBaseTheme } from '@chakra-ui/react'

import { buttonStyle } from './components/Button'
import { drawerStyle } from './components/Drawer'
import { inputStyle } from './components/Input'
import { menuStyle } from './components/Menu'
import { colors } from './colors'

export const customTheme = extendBaseTheme({
  components: {
    Button: buttonStyle,
    Drawer: drawerStyle,
    Input: inputStyle,
    Menu: menuStyle,
  },
  colors,
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
})
