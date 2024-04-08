import { BudgetChart } from '@/widgets'
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'

export const BudgetPage = () => {
  return (
    <VStack width={'100%'} alignItems={'start'} gap={'24px'}>
      {/* TODO Adjust this in theme */}
      <Text fontSize={'24px'}>Budget</Text>

      <Tabs variant={'basic'}>
        <TabList>
          <Tab>Cost Chart</Tab>
          <Tab>Income</Tab>
          <Tab>Expense</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BudgetChart />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}
