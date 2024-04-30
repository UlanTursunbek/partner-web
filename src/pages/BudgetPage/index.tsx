import _ from 'lodash'

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

const MOCK_EXPENSES = [
  { category: 'Food', value: 1000, color: 'red' },
  { category: 'Bar', value: 140, color: 'green' },
  { category: 'Car', value: 1000, color: 'black' },
  { category: 'Baby', value: 500, color: 'purple' },
  { category: 'Cafe', value: 100, color: 'blue' },
  { category: 'Food', value: 200, color: 'violet' },
]

const chunks = _.chunk(MOCK_EXPENSES, 2)

const normalizedData = {
  datasets: [
    {
      data: chunks[0].map((it) => it.value),
      backgroundColor: chunks[0].map((it) => it.color),
    },
    {
      data: chunks[1].map((it) => it.value),
      backgroundColor: chunks[1].map((it) => it.color),
    },
  ],
  labels: MOCK_EXPENSES.map((it) => it.category),
}

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
            <BudgetChart
              data={normalizedData}
              totalValue={_.sumBy(MOCK_EXPENSES, 'value')}
            />
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
