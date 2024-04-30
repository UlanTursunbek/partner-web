import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

const options = {
  responsive: true,
}

interface Props {
  data: {
    datasets: { data: number[]; backgroundColor: string[] }[]
    labels: string[]
  }
  totalValue: number
}

export const BudgetChart = ({ data, totalValue }: Props) => {
  return <Doughnut data={data} options={options} />
}
