import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
  backgroundColor: '#0F172A',
  color: '#F8FAFC',
  borderRadius: '6px',
  padding: '8px 16px',
  margin: '0',
  fontWeight: '700',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const buttonStyle = defineStyleConfig({
  variants: { primary },
})
