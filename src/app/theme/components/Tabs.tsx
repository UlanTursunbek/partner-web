import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

const basic = definePartsStyle({
  root: {
    width: '100%',
  },
  tab: {
    width: '100%',
    padding: '8px 16px',
    borderRadius: '10px',
    fontWeight: '500',
    color: 'gray.500',

    _selected: {
      backgroundColor: 'white',
      height: '36px',
      color: 'black',
    },
  },
  tablist: {
    height: '40px',
    backgroundColor: '#E2E8F0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
    borderRadius: '12px',
  },
  tabpanel: {
    marginTop: '16px',
  },
})

export const tabsTheme = defineMultiStyleConfig({ variants: { basic } })
