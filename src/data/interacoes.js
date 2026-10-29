// Histórico simulado. O agente de voz ainda não existe.
// Cada item é um comando que o operador teria falado, com data e resposta fixa.
export const interacoes = [
  {
    id: 'i-1',
    texto: 'Registrar vegetação alta no km 42',
    data: '2026-10-05T14:32:00',
    resposta:
      'Comando simulado recebido. Vegetação alta anotada no km 42 da SP-280, sentido interior. Nesta sprint a resposta é fixa: ninguém está ouvindo o microfone.',
  },
  {
    id: 'i-2',
    texto: 'Consultar a situação do km 65',
    data: '2026-10-06T09:18:00',
    resposta:
      'Trecho simulado da SP-280, km 61 ao 70, sentido capital. Situação registrada: buraco no acostamento.',
  },
  {
    id: 'i-3',
    texto: 'A placa do km 20 da Raposo está coberta pelo mato',
    data: '2026-10-04T16:12:00',
    resposta:
      'Comando simulado associado à SP-270, km 18 ao 25. Situação: placa de velocidade encoberta.',
  },
  {
    id: 'i-4',
    texto: 'Tem água empoçada no acostamento do km 14 do Rodoanel',
    data: '2026-10-03T11:48:00',
    resposta:
      'Comando simulado associado à SP-021, km 12 ao 16. Situação: drenagem obstruída no acostamento.',
  },
 {
    id: 'i-5',
    texto: 'Registrar buraco na faixa da direita do km 85 da Anhanguera',
    data: '2026-10-07T08:20:00',
    resposta:
      'Comando simulado recebido. Pavimento danificado registrado na SP-330, km 85 ao 92, sentido interior. Nesta sprint, a resposta é fixa.',
  },
  {
    id: 'i-6',
    texto: 'Consultar as condições de iluminação do km 35 da Anchieta',
    data: '2026-10-08T19:10:00',
    resposta:
      'Consulta simulada realizada. Trecho da SP-150, km 32 ao 38, sentido litoral. Situação registrada: iluminação insuficiente no trecho.',
  },
  {
    id: 'i-7',
    texto: 'Tem algum objeto na pista do km 50 da Imigrantes?',
    data: '2026-10-09T07:45:00',
    resposta:
      'Consulta simulada recebida. Não há registro de objetos na pista no trecho consultado da SP-160, km 48 ao 55, sentido capital. Informação fictícia para demonstração.',
  },
  {
    id: 'i-8',
    texto: 'Registrar veículo parado no acostamento do km 72',
    data: '2026-10-10T13:25:00',
    resposta:
      'Comando simulado recebido. Veículo parado anotado na SP-280, km 70 ao 75, sentido interior. Registro fictício, sem envio de ocorrência real.',
  },
  {
    id: 'i-9',
    texto: 'A visibilidade está ruim por causa da neblina no km 110',
    data: '2026-10-11T06:50:00',
    resposta:
      'Comando simulado associado à SP-330, km 105 ao 112. Situação registrada: neblina e baixa visibilidade. Resposta fixa para fins de prototipação.',
  },
  {
    id: 'i-10',
    texto: 'Registrar galhos caídos próximos ao km 28 do Rodoanel',
    data: '2026-10-12T15:40:00',
    resposta:
      'Comando simulado associado à SP-021, km 26 ao 30. Situação: galhos caídos próximos ao acostamento. Nenhuma equipe foi acionada.',
  },
]