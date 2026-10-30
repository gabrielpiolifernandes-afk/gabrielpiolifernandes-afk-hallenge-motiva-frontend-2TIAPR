
import { Pie } from 'react-chartjs-2'
import { registrarCharts } from '../utils/charts.js'

registrarCharts()

const CORES = ['#c1121f', '#000000', '#e63946', '#999999']

export default function GraficoPizza({ titulo, labels, valores }) {
  const dados = {
    labels,
    datasets: [
      {
        data: valores,
        backgroundColor: labels.map((_, indice) => CORES[indice % CORES.length]),
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  }

  const opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          padding: 14,
          color: '#000000',
        },
      },
    },
  }

  return (
    <figure className="grafico">
      <figcaption>{titulo}</figcaption>
      <div className="grafico-area">
        <Pie data={dados} options={opcoes} />
      </div>
    </figure>
  )
}
