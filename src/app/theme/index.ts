import { extendBaseTheme } from '@chakra-ui/react'

import { buttonStyle } from './components/Button'
import { colors } from './colors'

export const customTheme = extendBaseTheme({
  components: {
    Button: buttonStyle,
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
