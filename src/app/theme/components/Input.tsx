import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const basic = definePartsStyle({
  field: {
    height: '40px',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #CBD5E1',
    padding: '8px 16px',
  },
})

export const inputTheme = defineMultiStyleConfig({ variants: { basic } })
