import { drawerAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const basic = definePartsStyle({
  dialogContainer: {
    maxWidth: '430px',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'transparent',
  },
  dialog: {
    borderTopRadius: '16px',
    maxHeight: '90%',
    backgroundColor: 'white',
    color: 'black',
    padding: '16px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
    display: 'flex',
    gap: '16px',
  },
  header: {
    fontWeight: '500',
    fontSize: '20px',
  },
  body: {
    padding: 0,
  },
  closeButton: {
    width: '40px',
  },
})

export const drawerStyle = defineMultiStyleConfig({
  variants: { basic },
})
