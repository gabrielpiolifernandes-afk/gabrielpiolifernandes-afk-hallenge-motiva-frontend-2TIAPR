
import PainelGraficos from '../components/PainelGraficos.jsx'

export default function Dashboard() {
  return (
    <section>
      <h2>Painel de Monitoramento</h2>
      <p className="intro">
        Acompanhe os indicadores, estatísticas e dados
        apresentados nos gráficos. Consulte as informações
        para analisar resultados e identificar padrões.
      </p>
      <PainelGraficos />
    </section>
  )
}
