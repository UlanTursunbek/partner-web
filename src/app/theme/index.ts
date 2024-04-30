import { extendBaseTheme } from '@chakra-ui/react'

import { buttonTheme } from './components/Button'
import { drawerTheme } from './components/Drawer'
import { inputTheme } from './components/Input'
import { menuTheme } from './components/Menu'
import { tabsTheme } from './components/Tabs'
import { colors } from './colors'

export const customTheme = extendBaseTheme({
  components: {
    Button: buttonTheme,
    Drawer: drawerTheme,
    Input: inputTheme,
    Menu: menuTheme,
    Tabs: tabsTheme,
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
