export default {
  vars: {
    cliente: {
      key: 1515,
      label: 'POCONE GABINETE PREFEITO',
      razaoSocial: 'MUNICIPIO DE POCONE',
      endereco: 'PRAÇA DA MATRIZ - S/Nº',
      cnpj: '03162872000144',
      bairro: 'CENTRO',
      cep: '78175000',
      cidade: 'POCONÉ',
      credenciador: 87,
      nomeFantasia: 'SEC. MEIO AMBIENTE',
      uf: 'MT'
    },
    fc: 153238,
    header: 'CENTRO AMERICA COMERCIO, SERVICO, GESTAO TECNOLOGICA LTDA\nCAT - CENTRO AMERICA TECNOLOGIA',
    headerDados: 'AV. PRAINHA (LOTE CONSIL) N 9 SALA B QUADRA 02 LOTE 9, ALVORADA - CUIABA -MT (65)999720368 - ADMINISTRACAO@CENTROAMERICAFROTAS.COM.BR CNPJ:09.179.444/0001-00',
    natureza: 'REEMBOLSO DE DESPESAS',
    dataEmissao: '2023-05-05T03:00:00.000Z',
    contrato: '005/2021',
    dataInicial: '2023-04-01T03:00:00.000Z',
    dataFinal: '2023-04-30T03:00:00.000Z',
    observacao: null,
    dadosPagamento: 'SICREDI - AG: 0810 - CC: 61238-7\nBB - AG: 3325-1 - CC: 125.974-1',
    responsavel: 'Vanda do Amaral Santos',
    emailResponsavel: 'financeiro@centroamericatecnologia.com.br',
    valorBruto: '4900.00',
    acrescimo: '0.00',
    desconto: '0.00',
    valorLiquido: '4900.00',
    secretaria: 'SEC. MEIO AMBIENTE',
    departamento: false,
    empenho: 'O.F 144 - MEIO AMBIENTE '
  },

  openND: {
    Cliente: {
      'nome fantasia': '',
      endereco: '',
      cnpj: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: 'MT'
    },
    Intermediador: {
      'nome fantasia': '',
      endereco: '',
      cnpj: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: 'MT'
    },
    ND: {
      numero: (new Date().getTime() / 1000).toFixed(0),
      dataEmissao: new Date().toLocaleDateString(),
      contrato: '',
      dataInicial: '',
      dataFinal: '',
      secretaria: 'SEC. MEIO AMBIENTE',
      departamento: false,
      empenho: 'O.F 144 - MEIO AMBIENTE ',
      natureza: 'REEMBOLSO DE DESPESAS',
      observacao: null,
      dadosPagamento: 'Dados Bancarios',
      responsavel: '',
      emailResponsavel: '',
      valorBruto: 0,
      acrescimo: 0,
      desconto: 0,
      valorLiquido: 0
    },
    produtos: [{
      valor: 0,
      label: 'REEMBOLSO DE DESPESAS COM '
    }]
  }
}
