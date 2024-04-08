import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys
)

const basic = {
  button: {},
  list: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
    padding: '16px',
  },
  item: { height: '24px', padding: '8px 16px' },
  groupTitle: {},
  command: {},
  divider: {},
}

const quickAccess = {
  button: {},
  list: {
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    borderRadius: '6px',
    padding: '16px',
  },
  item: { backgroundColor: 'transparent' },
  groupTitle: {},
  command: {},
  divider: {},
}

export const menuTheme = defineMultiStyleConfig({
  variants: { basic, quickAccess },
})
