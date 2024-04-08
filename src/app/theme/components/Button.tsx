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

const outline = defineStyle({
  backgroundColor: 'transparent',
  color: 'black',
  borderRadius: '6px',
  border: '1px solid #CBD5E1',
  padding: '8px 16px',
  margin: '0',
  fontWeight: '700',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const md = defineStyle({
  fontSize: '14px',
  fontWeight: '700',
  borderRadius: '6px',
  padding: '8px 16px',
})

export const buttonStyle = defineStyleConfig({
  variants: { primary, outline },
  sizes: { md },
})
