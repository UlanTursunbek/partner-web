import { ReactNode } from 'react'

import { Grid, GridItem } from '@chakra-ui/react'

import { Navbar } from '../Navbar/Index'

interface Props {
  children: ReactNode
}

export const LayoutMain = ({ children }: Props) => {
  return (
    <Grid height={'100%'} gridTemplateRows={'1fr auto'} width={'100%'}>
      <GridItem paddingX={'16px'}>{children}</GridItem>

      <GridItem>
        <Navbar />
      </GridItem>
    </Grid>
  )
}
