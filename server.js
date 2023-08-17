const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const teams = {
  'Cartões': [],
  'Empréstimos': [],
  'Outros Assuntos': [],
};

function distributeRequest(request) {
  const { assunto } = request;
  let time = '';
  if (assunto == 'Problemas com cartão') {
    time = 'Cartões';
  } else if (assunto == 'Contratação de empréstimo') {
    time = 'Empréstimos';
  } else {
    time = 'Outros Assuntos';
  }

  teams[time].push({ ...request, time, assunto }); 
  return 'Solicitação recebida e enfileirada para atendimento.';
}



app.post('/solicitar-atendimento', (req, res) => {
  const request = req.body;
  const response = distributeRequest(request);
  res.json({ message: response });
});

function processRequests(team) {
  if (team.length === 0) {
    return;
  }
  
  const atendentesDisponiveis = 3;
  const requestsToProcess = Math.min(team.length, atendentesDisponiveis);
  
  for (let i = 0; i < requestsToProcess; i++) {
    const request = team.shift();
    console.log(`Atendendo solicitação (${request.assunto}) do time ${request.time}`);
  }
}

app.get('/processar-atendimentos', (req, res) => {
  processRequests(teams['Cartões']);
  processRequests(teams['Empréstimos']);
  processRequests(teams['Outros Assuntos']);
  
  res.json({ message: 'Processamento de atendimentos concluído.' });
});

app.get('/listar-atendimentos/:time', (req, res) => {
  const time = req.params.time;
  if (teams.hasOwnProperty(time)) {
    res.json(teams[time]);
  } else {
    res.status(404).json({ message: 'Time não encontrado.' });
  }
});

app.get('/listar-atendimentos', (req, res) => {
  const todasSolicitacoes = [];
  for (const time in teams) {
    todasSolicitacoes.push(...teams[time].map(request => ({ ...request, time: time })));
  }
  res.json(todasSolicitacoes);
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
