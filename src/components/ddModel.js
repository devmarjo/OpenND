// playground requires you to assign document definition to a variable called dd
// const date = (varDate) => {
//   // const d = new Date(varDate)
//   // return ('0' + (d.getDate())).slice(-2) + '/' +
//   //   ('0' + (d.getMonth() + 1)).slice(-2) + '/' +
//   //   new Date().getFullYear()

// }
const toBRL = (val) => parseFloat(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// const toLocaleDateString = str => new Date(str).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' })
const toLocaleDateString = str => str
const produto = (produtos) => {
  const retorno = [
    [
      {
        colSpan: 2,
        text: 'Descrição dos Serviços Prestado',
        bold: true,
        fontSize: 8,
        alignment: 'center'
      },
      ''
    ],
    [
      { text: 'Itens', bold: true, fontSize: 8, alignment: 'center' },
      {
        text: 'Valor',
        bold: true,
        fontSize: 8,
        alignment: 'center',
        margin: [20, 0, 20, 0]
      }
    ]
    // ,
    // [
    //   { text: 'REEMBOLSO DE INSUMOS DE CONSTRUCAO CIVIL', fontSize: 9, alignment: 'center' }, { text: 'R$ 683,35', fontSize: 9, alignment: 'center' }
    // ]
  ]
  produtos.forEach((el) => {
    retorno.push([
      {
        text: el.label,
        fontSize: 9,
        alignment: 'center'
      },
      {
        text: parseFloat(el.valor).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        fontSize: 9,
        alignment: 'center'
      }
    ])
  })
  return retorno
}

const referencias = (vars) => {
  const refencia = [
    [
      {
        colSpan: 3,
        text: 'Referências',
        fontSize: 8,
        bold: true,
        alignment: 'center'
      },
      '',
      ''
    ]
  ]
  refencia.push([
    {
      text: [
        {
          text: 'Contrato\n',
          fontSize: 8
        },
        {
          text: vars.contrato,
          fontSize: 9
        }
      ]
    },
    {
      text: [
        {
          text: 'Período\n',
          fontSize: 8
        },
        {
          text: `De ${toLocaleDateString(vars.dataInicial)} à ${toLocaleDateString(vars.dataFinal)}`,
          fontSize: 9
        }
      ]
    },
    {
      text: [
        {
          text: 'Observações\n',
          fontSize: 8
        },
        {
          text: vars.observacao,
          fontSize: 9
        }
      ]
    }
  ])
  if (vars.secretaria) {
    refencia.push([
      {
        colSpan: 3,
        text: [
          {
            text: 'Secretaria\n',
            fontSize: 8
          },
          {
            text: vars.secretaria,
            fontSize: 9
          }
        ]
      },
      '',
      ''
    ])
  }
  if (vars.departamento) {
    refencia.push([
      {
        colSpan: 3,
        text: [
          {
            text: 'Departamento\n',
            fontSize: 8
          },
          {
            text: vars.departamento,
            fontSize: 9
          }
        ]
      },
      '',
      ''
    ])
  }

  if (vars.empenho) {
    refencia.push([
      {
        colSpan: 3,
        text: [
          {
            text: 'Empenho\n',
            fontSize: 8
          },
          {
            text: vars.empenho,
            fontSize: 9
          }
        ]
      },
      '',
      ''
    ])
  }
  return refencia
}
const logo = (logo) => {
  if (logo) {
    return {
      margin: 15,
      image: logo,
      italics: true,
      width: 120,
      border: [true, true, false, true]
    }
  } else {
    return {
      margin: 15,
      text: 'NOTA DÉBITO',
      width: 120,
      border: [true, true, false, true]
    }
  }
}
const pix = (pix) => {
  if (pix) {
    return {
      rowSpan: 2,
      margin: [10, 0, 10, 0],
      // image: pix,
      type: 'none',
      ul: [
        {
          text: 'PIX',
          alignment: 'center'
        },
        {
          image: pix,
          width: 70
        }
      ],
      width: 80,
      fontSize: 8
    }
  } else {
    return {
      rowSpan: 2,
      margin: [20, 20, 20, 0],
      text: [
        'Nota de débito\n'
      ],
      fontSize: 8
    }
  }
}
const makeND = (vars) => {
  return [
    {
      style: 'tableBranch',
      table: {
        widths: ['*', 350],
        body: [
          [
            logo(vars.logo),
            {
              margin: 15,
              border: [false, true, true, true],
              text: [
                {
                  text: vars.header,
                  fontSize: 10,
                  bold: true
                },
                {
                  text: '\n\n' + vars.headerDados,
                  fontSize: 8
                }
              ],
              italics: true,
              width: 120
            }
          ]
        ]
      }
    },
    {
      style: 'tableBranch',
      table: {
        widths: ['*', 'auto', 'auto'],
        heights: [10, 35, 35],
        body: [
          [
            {
              colSpan: 3,
              text: 'Identificacao da Nota de Débito',
              fontSize: 8.5,
              bold: true,
              alignment: 'center'
            },
            {},
            ''
          ],
          [
            {
              text: [
                {
                  text: 'Natureza da Operação\n\n',
                  fontSize: 8
                },
                {
                  text: vars.natureza,
                  bold: true,
                  fontSize: 10
                }
              ]
            },
            pix(vars.pix),
            {
              rowSpan: 2,
              alignment: 'center',
              margin: [20, 20, 20, 0],
              text: [
                {
                  text: 'NOTA Nº\n',
                  fontSize: 8
                },
                {
                  text: `${vars.fc}`,
                  bold: true,
                  fontSize: 20
                }
              ]
            }
          ],
          [
            {
              text: [
                'Data de Emissão\n\n',
                { text: toLocaleDateString(vars.dataEmissao), fontSize: 10, bold: true }
              ],
              // alignment: 'center',
              fontSize: 8.5
            },
            '',
            ''
          ]
        ]
      }
    },
    {
      style: 'tableBranch',
      table: {
        widths: [130.75, 130.75, 130.75, '*'],
        // heights:[10,20,20,20],
        body: [
          [
            {
              colSpan: 4,
              fontSize: 8.5,
              bold: true,
              alignment: 'center',
              text: 'Dados do Tomador de Serviços'
            },
            '',
            '',
            ''
          ],
          [
            {
              colSpan: 1,
              text: [
                {
                  text: 'CNPJ/CPF\n',
                  fontSize: 8
                },
                {
                  text: vars.cliente.cnpj,
                  fontSize: 8
                }
              ]
            },
            {
              colSpan: 3,
              text: [
                {
                  text: 'Razão social\n',
                  fontSize: 8
                },
                {
                  text: vars.cliente.razaoSocial,
                  fontSize: 10
                }
              ]
            },
            '',
            ''
          ],
          [
            {
              text: [
                {
                  text: 'Telefone\n',
                  fontSize: 8
                },
                {
                  text: '',
                  fontSize: 9
                }
              ]
            },
            {
              text: [
                {
                  text: 'e-mail\n',
                  fontSize: 8
                },
                {
                  text: '',
                  fontSize: 9
                }
              ]
            },
            {
              colSpan: 2,
              text: [
                {
                  text: 'Endereço\n',
                  fontSize: 8
                },
                {
                  text: vars.cliente.endereco,
                  fontSize: 9
                }
              ]
            },
            ''
          ],
          [
            {
              colSpan: 1,
              text: [
                {
                  text: 'Complemento\n',
                  fontSize: 8
                }
              ]
            },
            {
              colSpan: 1,
              text: [
                {
                  text: 'Bairro\n',
                  fontSize: 8
                },
                {
                  text: vars.cliente.bairro,
                  fontSize: 9
                }
              ]
            },
            {
              text: [
                {
                  text: 'Cidade/UF\n',
                  fontSize: 8
                },
                {
                  text: vars.cliente.cidade,
                  fontSize: 9
                }
              ]
            },
            {
              text: [
                {
                  text: 'CEP\n',
                  fontSize: 8
                },
                {
                  text: vars.cliente.cep,
                  fontSize: 9
                }
              ]
            }
          ]
        ]
      }
    },
    {
      style: 'tableBranch',
      table: {
        widths: ['auto', 'auto', '*'],
        heights: [10, 20],
        body: referencias(vars)
      }
    },
    {
      style: 'tableBranch',
      table: {
        widths: ['*', 'auto'],
        heights: [10, 10],
        body: produto(vars.produtos)
      }
    },
    {
      style: 'tableBranch',
      table: {
        widths: ['*', 70.85, 70.85, 70.85, 70.85, 70.85, 70.85],
        heights: [10, 15, 15, 40, 20],
        body: [
          [
            {
              colSpan: 7,
              text: 'Informações Complementares',
              bold: true,
              fontSize: 8,
              alignment: 'center'
            },
            '',
            '',
            '',
            '',
            '',
            ''
          ],

          [
            {
              colSpan: 5,
              text: [
                {
                  text: 'Responsável\n',
                  bold: true,
                  fontSize: 8.5
                },
                {
                  text: vars.responsavel,
                  fontSize: 9
                }
              ]
            },
            '',
            '',
            '',
            '',
            {
              margin: 10,
              rowSpan: 3,
              colSpan: 2,
              text: [
                {
                  text: 'Dados para pagamento\n\n',
                  bold: true,
                  fontSize: 8.5,
                  alignment: 'center'
                },
                {
                  text: vars.header.replace(/(.+)\n.+/, '$1'),
                  fontSize: 9,
                  alignment: 'center'
                },
                '\n\n',
                {
                  alignment: 'center',
                  fontSize: 8,
                  text: vars.dadosPagamento
                }
              ]
            },
            ''
          ],
          [
            {
              colSpan: 5,
              text: [
                {
                  text: 'E-mail\n',
                  fontSize: 8.5
                },
                {
                  text: vars.emailResponsavel,
                  // text: '',
                  fontSize: 10
                }
              ]
            },
            '',
            '',
            '',
            ''
          ],
          [
            {
              colSpan: 5,
              text: [
                '\n',
                {
                  text: 'NÃO EXISTE TRIBUTAÇÃO DE IMPOSTO\n',
                  bold: true,
                  fontSize: 10
                },
                {
                  text: 'CONFORME LISTA DE SERVIÇOS DO CÓDIGO TRIBUTÁRIO NACIONAL LEI COMPLEMENTAR Nº 116, DE 31/07/2003. NOSSA ATIVIDADE NÃO ESTA RELACIONADA AO ART. 9º DO DECRETO DE LEI N. 406/1968',
                  fontSize: 10
                }
              ],
              fontSize: 8.5,
              alignment: 'center'
            },
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          // valor bruto
          [
            {
              colSpan: 2,
              text: [
                {
                  text: 'Valor Bruto\n',
                  fontSize: 8
                },
                {
                  text: parseFloat(vars.valorBruto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                  fontSize: 9,
                  alignment: 'right'
                }
              ]
            },
            '',
            {
              text: [
                {
                  text: 'Acréscimo\n',
                  fontSize: 8
                },
                {
                  text: vars.acrescimo,
                  fontSize: 9,
                  alignment: 'right'
                }
              ]
            },
            {
              text: [
                {
                  text: 'Desconto\n',
                  fontSize: 8
                },
                {
                  text: vars.desconto,
                  fontSize: 9,
                  alignment: 'right'
                }
              ]
            },
            {
              colSpan: 3,
              text: [
                {
                  text: 'Valor Liquido\n',
                  fontSize: 8
                },
                {
                  bold: true,
                  text: parseFloat(vars.valorLiquido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                  fontSize: 10,
                  alignment: 'right'
                }
              ]
            },
            '',
            ''
          ]
        ]
      }
    }
  ]
}

const makeReport = (vars) => {
  let qtdItens = 0
  const totalsFornecedores = []
  const relatorio = []
  for (const key in vars.relatorio) {
    if (Object.hasOwnProperty.call(vars.relatorio, key)) {
      const el = vars.relatorio[key]
      relatorio.push([
        {
          fontSize: 10,
          fillColor: 'grey',
          bold: true,
          color: 'white',
          colSpan: 9,
          text: el.transacoes[0].fornecedor
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ])
      el.transacoes.forEach((element) => {
        element.descricao = element.descricao.replaceAll(/\n/gi, ';')
        const descricao = element.descricao.split(';')
        relatorio.push([
          { text: toLocaleDateString(element.data), style: 'texto' },
          { text: element.tipo, style: 'texto' },
          { colSpan: 2, ul: descricao, type: 'none', style: 'texto' },
          '',
          { text: element.marca, style: 'texto' },
          { text: element.quantidade, style: 'texto' },
          {
            text: parseFloat(element.valorUnitario).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          },
          {
            text: parseFloat(element.valorDesconto).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          },
          {
            text: parseFloat(element.valorTotal).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          }
        ])
      })
      relatorio.push([
        {
          bold: true,
          colSpan: 8,
          text: 'TOTAL DO FORNECEDOR ' + el.transacoes[0].fornecedor,
          alignment: 'center',
          style: 'texto'
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
          text: el.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }),
          fillColor: 'black',
          color: 'white'
        }
      ])
      qtdItens += el.transacoes.length
      totalsFornecedores.push([
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.transacoes[0].fornecedor
        },
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }
      ])
    }
  }
  return [
    { pageBreak: 'before', text: '', alignment: 'center', pageOrientation: 'landscape' },
    {
      style: 'tableapre',
      table: {
        widths: ['*', '*', '*'],
        body: [
          [
            {
              alignment: 'center',
              colSpan: 3,
              text: 'Relatório da Nota de débito ' + vars.fc,
              fillColor: 'midnightblue',
              color: 'white',
              style: 'subheader',
              fontSize: 14,
              margin: 2
            },
            {},
            {}
          ],
          [
            { margin: 5, text: '' },
            { margin: 5, text: '' },
            { margin: 5, text: '' }
          ],
          [
            {
              bold: true,
              text: 'QTD. ITENS: ' + qtdItens,
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            },
            {},
            {
              bold: true,
              text: 'VALOR TOTAL: ' + toBRL(vars.valorBruto),
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            }
          ]
        ]
      },
      layout: 'noBorders'
    },
    {
      // layout: 'noBorders',
      fontSize: 10,
      table: {
        widths: ['*', '*'],
        body: [
          [
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'FORNECEDOR',
              fillColor: 'midnightblue',
              color: 'white'
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'VALOR TOTAL',
              fillColor: 'midnightblue',
              color: 'white'
            }
          ],
          ...totalsFornecedores
        ]
      }
    },
    '\n',
    '\n',
    {
      // layout: 'noBorders',
      fontSize: 8,
      table: {
        widths: [

          'auto',
          '*',
          '*',
          '*',
          '*',
          'auto',
          'auto',
          'auto',
          'auto'
        ],
        // heights: [15, 15, 20, 10, 10],
        body: [
          [
            { fontSize: 10, alignment: 'center', text: 'Data' },
            { fontSize: 10, alignment: 'center', text: 'Tipo' },
            {
              colSpan: 2,
              fontSize: 10,
              alignment: 'center',
              text: 'Item/Descrição'
            },
            '',
            { fontSize: 10, alignment: 'center', text: 'Marca' },
            { fontSize: 10, alignment: 'center', text: 'Qtd.' },
            { fontSize: 10, alignment: 'center', text: 'Valor Un.' },
            { fontSize: 10, alignment: 'center', text: 'Desc.' },
            { fontSize: 10, alignment: 'center', text: 'Valor' }
          ],
          ...relatorio
        ]
      }
    }
  ]
}

const makeReport2 = (vars) => {
  let qtdItens = 0
  const totalsFornecedores = []
  const relatorio = []
  for (const key in vars.relatorio) {
    if (Object.hasOwnProperty.call(vars.relatorio, key)) {
      const el = vars.relatorio[key]
      relatorio.push([
        {
          fontSize: 10,
          fillColor: 'grey',
          bold: true,
          color: 'white',
          colSpan: 10,
          text: el.transacoes[0].fornecedor
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ])
      el.transacoes.forEach((element) => {
        relatorio.push([
          { text: toLocaleDateString(element.data), style: 'texto' },
          { text: element.tipo, style: 'texto' },
          { colSpan: 2, text: element.descricao.replaceAll(';', '\n'), style: 'texto' },
          '',
          { text: element.marca, style: 'texto' },
          { text: element.fatura_fornecedor, style: 'texto' },
          { text: element.quantidade, style: 'texto' },
          {
            text: parseFloat(element.valorUnitario).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          },
          {
            text: parseFloat(element.valorDesconto).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          },
          {
            text: parseFloat(element.valorTotal).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          }
        ])
      })
      relatorio.push([
        {
          bold: true,
          colSpan: 9,
          text: 'TOTAL DO FORNECEDOR ' + el.transacoes[0].fornecedor,
          alignment: 'center',
          style: 'texto'
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
          text: el.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }),
          fillColor: 'black',
          color: 'white'
        }
      ])
      qtdItens += el.transacoes.length
      totalsFornecedores.push([
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.transacoes[0].fornecedor
        },
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }
      ])
    }
  }
  return [
    { pageBreak: 'before', text: '', alignment: 'center', pageOrientation: 'landscape' },
    {
      style: 'tableapre',
      table: {
        widths: ['*', '*', '*'],
        body: [
          [
            {
              alignment: 'center',
              colSpan: 3,
              text: 'Relatório da Nota de débito ' + vars.fc,
              fillColor: 'midnightblue',
              color: 'white',
              style: 'subheader',
              fontSize: 14,
              margin: 2
            },
            {},
            {}
          ],
          [
            { margin: 5, text: '' },
            { margin: 5, text: '' },
            { margin: 5, text: '' }
          ],
          [
            {
              bold: true,
              text: 'QTD. ITENS: ' + qtdItens,
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            },
            {},
            {
              bold: true,
              text: 'VALOR TOTAL: ' + toBRL(vars.valorBruto),
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            }
          ]
        ]
      },
      layout: 'noBorders'
    },
    {
      // layout: 'noBorders',
      fontSize: 10,
      table: {
        widths: ['*', '*'],
        body: [
          [
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'FORNECEDOR',
              fillColor: 'midnightblue',
              color: 'white'
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'VALOR TOTAL',
              fillColor: 'midnightblue',
              color: 'white'
            }
          ],
          ...totalsFornecedores
        ]
      }
    },
    '\n',
    '\n',
    {
      // layout: 'noBorders',
      fontSize: 8,
      table: {
        widths: [

          'auto',
          '*',
          '*',
          '*',
          '*',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto'
        ],
        // heights: [15, 15, 20, 10, 10],
        body: [
          [
            { fontSize: 10, alignment: 'center', text: 'Data' },
            { fontSize: 10, alignment: 'center', text: 'Tipo' },
            {
              colSpan: 2,
              fontSize: 10,
              alignment: 'center',
              text: 'Item/Descrição'
            },
            '',
            { fontSize: 10, alignment: 'center', text: 'Marca' },
            { fontSize: 10, alignment: 'center', text: 'Fat. Forn.' },
            { fontSize: 10, alignment: 'center', text: 'Qtd.' },
            { fontSize: 10, alignment: 'center', text: 'Valor Un.' },
            { fontSize: 10, alignment: 'center', text: 'Desc.' },
            { fontSize: 10, alignment: 'center', text: 'Valor' }
          ],
          ...relatorio
        ]
      }
    }
  ]
}

const makeReportBack = (vars) => {
  let qtdItens = 0
  const totalsFornecedores = []
  const relatorio = []
  for (const key in vars.relatorio) {
    if (Object.hasOwnProperty.call(vars.relatorio, key)) {
      const el = vars.relatorio[key]
      relatorio.push([
        {
          fontSize: 10,
          fillColor: 'grey',
          bold: true,
          color: 'white',
          colSpan: 9,
          text: el.transacoes[0].fornecedor
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ])
      el.transacoes.forEach((element) => {
        relatorio.push([
          { text: toLocaleDateString(element.data), style: 'texto' },
          { text: element.tipo, style: 'texto' },
          { colSpan: 2, text: element.descricao.replaceAll(';', '\n'), style: 'texto' },
          '',
          { text: element.marca, style: 'texto' },
          { text: element.quantidade, style: 'texto' },
          {
            text: parseFloat(element.valorUnitario).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          },
          {
            text: parseFloat(element.valorDesconto).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          },
          {
            text: parseFloat(element.valorTotal).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }),
            style: 'texto'
          }
        ])
      })
      relatorio.push([
        {
          bold: true,
          colSpan: 8,
          text: 'TOTAL DO FORNECEDOR ' + el.transacoes[0].fornecedor,
          alignment: 'center',
          style: 'texto'
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
          text: el.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }),
          fillColor: 'black',
          color: 'white'
        }
      ])
      qtdItens += el.transacoes.length
      totalsFornecedores.push([
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.transacoes[0].fornecedor
        },
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }
      ])
    }
  }
  return [
    { pageBreak: 'before', text: '', alignment: 'center' },
    {
      style: 'tableapre',
      table: {
        widths: ['*', '*', '*'],
        body: [
          [
            {
              alignment: 'center',
              colSpan: 3,
              text: 'Relatório da Nota de débito ' + vars.fc,
              fillColor: 'midnightblue',
              color: 'white',
              style: 'subheader',
              fontSize: 14,
              margin: 2
            },
            {},
            {}
          ],
          [
            { margin: 5, text: '' },
            { margin: 5, text: '' },
            { margin: 5, text: '' }
          ],
          [
            {
              bold: true,
              text: 'QTD. ITENS: ' + qtdItens,
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            },
            {},
            {
              bold: true,
              text: 'VALOR TOTAL: ' + toBRL(vars.valorBruto),
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            }
          ]
        ]
      },
      layout: 'noBorders'
    },
    {
      // layout: 'noBorders',
      fontSize: 10,
      table: {
        widths: ['*', '*'],
        body: [
          [
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'FORNECEDOR',
              fillColor: 'midnightblue',
              color: 'white'
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'VALOR TOTAL',
              fillColor: 'midnightblue',
              color: 'white'
            }
          ],
          ...totalsFornecedores
        ]
      }
    },
    '\n',
    '\n',
    {
      // layout: 'noBorders',
      fontSize: 8,
      table: {
        widths: [

          'auto',
          '*',
          '*',
          '*',
          '*',
          'auto',
          'auto',
          'auto',
          'auto'
        ],
        // heights: [15, 15, 20, 10, 10],
        body: [
          [
            { fontSize: 10, alignment: 'center', text: 'Data' },
            { fontSize: 10, alignment: 'center', text: 'Tipo' },
            {
              colSpan: 2,
              fontSize: 10,
              alignment: 'center',
              text: 'Item/Descrição'
            },
            '',
            { fontSize: 10, alignment: 'center', text: 'Marca' },
            { fontSize: 10, alignment: 'center', text: 'Qtd.' },
            { fontSize: 10, alignment: 'center', text: 'Valor Un.' },
            { fontSize: 10, alignment: 'center', text: 'Desc.' },
            { fontSize: 10, alignment: 'center', text: 'Valor' }
          ],
          ...relatorio
        ]
      }
    }
  ]
}

const makeReportFF = (vars) => {
  let qtdItens = 0
  const totalsClientes = []
  const relatorio = []
  for (const key in vars.relatorio) {
    if (Object.hasOwnProperty.call(vars.relatorio, key)) {
      const el = vars.relatorio[key]
      relatorio.push([
        {
          fontSize: 10,
          fillColor: 'grey',
          bold: true,
          color: 'white',
          colSpan: 10,
          text: el.transacoes[0].cliente
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ])
      el.transacoes.forEach((element) => {
        relatorio.push([
          { text: toLocaleDateString(element.data), style: 'texto' },
          { text: element.tipo, style: 'texto' },
          { text: element.descricao.replaceAll(';', '\n'), style: 'texto' },
          { text: element.marca, style: 'texto' },
          { text: element.quantidade, style: 'texto' },
          {
            text: toBRL(element.valorUnitario),
            style: 'texto'
          },
          {
            text: toBRL(element.valorDesconto),
            style: 'texto'
          },
          {
            text: toBRL(element.valorTotal),
            style: 'texto'
          },
          {
            text: `${element.taxaFornecedor}%`,
            style: 'texto'
          },
          {
            text: toBRL(element.valorLiquido),
            style: 'texto'
          }
        ])
      })
      relatorio.push([
        {
          bold: true,
          colSpan: 7,
          text: 'TOTAL DO CLIENTE ' + el.transacoes[0].cliente,
          alignment: 'center',
          style: 'texto'
        },
        '',
        '',
        '',
        '',
        '',
        '',
        {
          text: toBRL(el.total),
          fillColor: 'black',
          color: 'white'
        },
        '',
        {
          text: toBRL(el.totalLiquido),
          fillColor: 'black',
          color: 'white'
        }
      ])
      qtdItens += el.transacoes.length
      totalsClientes.push([
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.transacoes[0].cliente
        },
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: toBRL(el.total)
        },
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: toBRL(el.totalLiquido)
        }
      ])
    }
  }
  return [
    {
      style: 'tableapre',
      table: {
        widths: ['*', '*', '*'],
        body: [
          [
            {
              alignment: 'center',
              colSpan: 3,
              text: 'Relatório da Fatura Fornecedor ' + vars.ff,
              fillColor: 'midnightblue',
              color: 'white',
              style: 'subheader',
              fontSize: 14,
              margin: 2
            },
            {},
            {}
          ],
          [
            { margin: 5, text: '' },
            { margin: 5, text: '' },
            { margin: 5, text: '' }
          ],
          [
            {
              bold: true,
              text: 'QTD. ITENS: ' + qtdItens,
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            },
            {
              bold: true,
              text: 'VALOR BRUTO: ' + toBRL(vars.valorBruto),
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            },
            {
              bold: true,
              text: 'VALOR LIQUIDO: ' + toBRL(vars.valorLiquido),
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            }
          ]
        ]
      },
      layout: 'noBorders'
    },
    {
      // layout: 'noBorders',
      fontSize: 10,
      table: {
        widths: ['*', '*', 'auto'],
        body: [
          [
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'CLIENTE',
              fillColor: 'midnightblue',
              color: 'white'
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'VALOR BRUTO',
              fillColor: 'midnightblue',
              color: 'white'
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'VALOR LIQUIDO',
              fillColor: 'midnightblue',
              color: 'white'
            }
          ],
          ...totalsClientes
        ]
      }
    },
    '\n',
    '\n',
    {
      // layout: 'noBorders',
      fontSize: 8,
      table: {
        widths: [
          'auto',
          'auto',
          '*',
          '*',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto'
        ],
        // heights: [15, 15, 20, 10, 10],
        body: [
          [
            { fontSize: 10, alignment: 'center', text: 'Data' },
            { fontSize: 10, alignment: 'center', text: 'Tipo' },
            {
              fontSize: 10,
              alignment: 'center',
              text: 'Item\nDescrição'
            },
            { fontSize: 10, alignment: 'center', text: 'Marca' },
            { fontSize: 10, alignment: 'center', text: 'Qtd.' },
            { fontSize: 10, alignment: 'center', text: 'Valor\nUn.' },
            { fontSize: 10, alignment: 'center', text: 'Desc.' },
            { fontSize: 10, alignment: 'center', text: 'Valor\nBruto' },
            { fontSize: 10, alignment: 'center', text: 'Taxa' },
            { fontSize: 10, alignment: 'center', text: 'Valor\nLiquido' }
          ],
          ...relatorio
        ]
      }
    }
  ]
}

const makeReportFF2 = (vars) => {
  let qtdItens = 0
  const totalsClientes = []
  const relatorio = []
  for (const key in vars.relatorio) {
    if (Object.hasOwnProperty.call(vars.relatorio, key)) {
      const el = vars.relatorio[key]
      relatorio.push([
        {
          fontSize: 10,
          fillColor: 'grey',
          bold: true,
          color: 'white',
          colSpan: 11,
          text: el.transacoes[0].cliente
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ])
      el.transacoes.forEach((element) => {
        relatorio.push([
          { text: toLocaleDateString(element.data), style: 'texto' },
          { text: element.tipo, style: 'texto' },
          { text: element.descricao.replaceAll(';', '\n'), style: 'texto' },
          { text: element.marca, style: 'texto' },
          { text: element.faturaCliente, style: 'texto' },
          { text: element.quantidade, style: 'texto' },
          {
            text: toBRL(element.valorUnitario),
            style: 'texto'
          },
          {
            text: toBRL(element.valorDesconto),
            style: 'texto'
          },
          {
            text: toBRL(element.valorTotal),
            style: 'texto'
          },
          {
            text: `${element.taxaFornecedor}%`,
            style: 'texto'
          },
          {
            text: toBRL(element.valorLiquido),
            style: 'texto'
          }
        ])
      })
      relatorio.push([
        {
          bold: true,
          colSpan: 8,
          text: 'TOTAL DO CLIENTE ' + el.transacoes[0].cliente,
          alignment: 'center',
          style: 'texto'
        },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
          text: toBRL(el.total),
          fillColor: 'black',
          color: 'white'
        },
        '',
        {
          text: toBRL(el.totalLiquido),
          fillColor: 'black',
          color: 'white'
        }
      ])
      qtdItens += el.transacoes.length
      totalsClientes.push([
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: el.transacoes[0].cliente
        },
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: toBRL(el.total)
        },
        {
          border: [false, false, false, true],
          alignment: 'center',
          text: toBRL(el.totalLiquido)
        }
      ])
    }
  }
  return [
    {
      style: 'tableapre',
      table: {
        widths: ['*', '*', '*'],
        body: [
          [
            {
              alignment: 'center',
              colSpan: 3,
              text: 'Relatório da Fatura Fornecedor ' + vars.ff,
              fillColor: 'midnightblue',
              color: 'white',
              style: 'subheader',
              fontSize: 14,
              margin: 2
            },
            {},
            {}
          ],
          [
            { margin: 5, text: '' },
            { margin: 5, text: '' },
            { margin: 5, text: '' }
          ],
          [
            {
              bold: true,
              text: 'QTD. ITENS: ' + qtdItens,
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            },
            {
              bold: true,
              text: 'VALOR BRUTO: ' + toBRL(vars.valorBruto),
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            },
            {
              bold: true,
              text: 'VALOR LIQUIDO: ' + toBRL(vars.valorLiquido),
              style: 'header',
              fontSize: 11,
              alignment: 'center'
            }
          ]
        ]
      },
      layout: 'noBorders'
    },
    {
      // layout: 'noBorders',
      fontSize: 10,
      table: {
        widths: ['*', '*', 'auto'],
        body: [
          [
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'CLIENTE',
              fillColor: 'midnightblue',
              color: 'white'
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'VALOR BRUTO',
              fillColor: 'midnightblue',
              color: 'white'
            },
            {
              border: [false, false, false, true],
              alignment: 'center',
              text: 'VALOR LIQUIDO',
              fillColor: 'midnightblue',
              color: 'white'
            }
          ],
          ...totalsClientes
        ]
      }
    },
    '\n',
    '\n',
    {
      // layout: 'noBorders',
      fontSize: 8,
      table: {
        widths: [
          'auto',
          'auto',
          '*',
          '*',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto'
        ],
        // heights: [15, 15, 20, 10, 10],
        body: [
          [
            { fontSize: 10, alignment: 'center', text: 'Data' },
            { fontSize: 10, alignment: 'center', text: 'Tipo' },
            {
              fontSize: 10,
              alignment: 'center',
              text: 'Item\nDescrição'
            },
            { fontSize: 10, alignment: 'center', text: 'Marca' },
            { fontSize: 10, alignment: 'center', text: 'Fatura\nCliente' },
            { fontSize: 10, alignment: 'center', text: 'Qtd.' },
            { fontSize: 10, alignment: 'center', text: 'Valor\nUn.' },
            { fontSize: 10, alignment: 'center', text: 'Desc.' },
            { fontSize: 10, alignment: 'center', text: 'Valor\nBruto' },
            { fontSize: 10, alignment: 'center', text: 'Taxa' },
            { fontSize: 10, alignment: 'center', text: 'Valor\nLiquido' }
          ],
          ...relatorio
        ]
      }
    }
  ]
}

export function ddFCmake (vars) {
  console.log(vars)
  return {
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: [
      ...makeND(vars)
      // ...makeReport(vars)
    ],
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10,
        bold: true
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      // s alignment: 'center'
    }
  }
}

export function ddFCmakeLote (lote) {
  console.log('####LOTE', lote)
  const content = []
  Object.values(lote.faturas).forEach(fatura => {
    fatura.logo = lote.credenciadores[fatura.credenciador].logo
    fatura.header = lote.credenciadores[fatura.credenciador].header
    fatura.headerDados = lote.credenciadores[fatura.credenciador].dados
    fatura.dadosPagamento = lote.credenciadores[fatura.credenciador].dados_pagamento
    fatura.responsavel = lote.credenciadores[fatura.credenciador].resp
    fatura.emailResponsavel = lote.credenciadores[fatura.credenciador].email_responsavel
    fatura.cliente = fatura.cliente ? lote.clientes[fatura.cliente] : {}
    fatura.secretaria = fatura.secretaria ? lote.secretarias[fatura.secretaria].label : ''
    fatura.departamento = fatura.departamento ? lote.departamentos[fatura.departamento].label : ''
    fatura.empenho = fatura.empenho ? lote.empenhos[fatura.empenho].label : ''
    content.push(...makeND(fatura), ...makeReport(fatura))
    content.push({ pageBreak: 'after', text: '', alignment: 'center', pageOrientation: 'portrait' })
  })

  return {
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content,
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10,
        bold: true
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      // s alignment: 'center'
    }
  }
}

export function ddFCmake2 (vars) {
  console.log(vars)
  return {
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: [...makeND(vars), ...makeReport2(vars)],
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10,
        bold: true
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      // s alignment: 'center'
    }
  }
}

export function ddFCmakeBack (vars) {
  makeReportBack()
  console.log(vars)
  return {
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: [...makeND(vars), ...makeReport(vars)],
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10,
        bold: true
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      // s alignment: 'center'
    }
  }
}
export function ddFFmake (vars) {
  console.log(vars)
  return {
    pageOrientation: 'landscape',
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: [...makeReportFF(vars)],
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10,
        bold: true
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
    }
  }
}

export function ddFFmake2 (vars) {
  console.log(vars)
  return {
    pageOrientation: 'landscape',
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: [...makeReportFF2(vars)],
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10,
        bold: true
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
    }
  }
}

export function makeDocPagamento (vars, sistema = 'indefinido') {
  console.log(vars)
  const rows = {}
  const labels = {}
  vars.forEach(el => {
    if (typeof rows[el.credenciador] === 'undefined') {
      rows[el.credenciador] = []
      labels[el.credenciador] = el.credenciadorLabel
    }
    // rows[el.credenciador].push([
    //   { colSpan: 5, text: el.fatura, alignment: 'left' },
    //   '',
    //   '',
    //   '',
    //   ''
    // ])
    rows[el.credenciador].push([
      el.fatura,
      el.fornecedor,
      el.dadosBancarios,
      el.valorBruto,
      el.taxa,
      el.valorLiquido,
      el.valor
    ])
    rows[el.credenciador].push([
      { colSpan: 7, text: 'Observações: ' + el.observacao + ' \n\n\n', alignment: 'left', height: '200' },
      '',
      '',
      '',
      '',
      '',
      ''
    ])
  })
  let i = 0
  const tabelas = Object.entries(rows).map(([k, v]) => {
    let pageBreak = ''
    if (i > 0) {
      pageBreak = 'before'
    }
    i++
    return [
      { text: sistema + ' - Pagamentos da ' + labels[k], alignment: 'center', style: 'header', pageBreak },
      {
        style: 'tableapre',
        layout: 'pagarDoc',
        table: {
          widths: ['*', 'auto', 'auto', '*', '*', '*', '*'],
          body: [
            [
              {
                bold: true,
                text: 'FATURA',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'FORNECEDOR',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'DADOS BANCARIOS',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'Valor\nBruto',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'Taxa',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'Valor\nLiquido',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'VALOR À PAGAR',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              }
            ],
            ...v
          ]
        }
      }
    ]
  })

  return {
    footer: { alignment: 'center', text: new Date().toLocaleString() },
    pageOrientation: 'landscape',
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: tabelas,
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10,
        bold: true
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
    }
  }
}

export function makeDocPagamento2 (vars, sistema = 'indefinido') {
  console.log(vars)
  const rows = {}
  const labels = {}
  vars.forEach(el => {
    if (typeof rows[el.credenciador] === 'undefined') {
      rows[el.credenciador] = []
      labels[el.credenciador] = el.credenciadorLabel
    }
    // rows[el.credenciador].push([
    //   { colSpan: 5, text: el.fatura, alignment: 'left' },
    //   '',
    //   '',
    //   '',
    //   ''
    // ])
    const regexCNPJ = el.dadosBancarios.match(/[\d]{14}/g)
    if (regexCNPJ !== null) {
      const cnpj = regexCNPJ[0].replace(/(\d\d)(\d\d\d)(\d\d\d)(\d\d\d\d)(\d\d)/, '$1.$2.$3/$4-$5')
      el.dadosBancarios = el.dadosBancarios.replace(/[\d]{14}/g, cnpj)
    }
    const regexCPF = el.dadosBancarios.match(/[\d]{11}/g)
    if (regexCPF !== null) {
      const cpf = regexCPF[0].replace(/(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/, '$1.$2.$3-$5')
      el.dadosBancarios = el.dadosBancarios.replace(/[\d]{11}/g, cpf)
    }
    const dadosFornecedoro = [
      { text: el.fornecedor, bold: true },
      { text: ' - ' },
      { text: el.dadosBancarios }
    ]
    rows[el.credenciador].push([
      el.fatura,
      // el.fornecedor,
      // el.dadosBancarios,
      { text: dadosFornecedoro, alignment: 'center' },
      el.valorBruto,
      el.taxa,
      el.valorLiquido,
      { text: el.valor + '\n' + el.observacao, alignment: 'center' }
    ])
    // rows[el.credenciador].push([
    //   { colSpan: 7, text: 'Observações: ' + el.observacao + ' \n\n\n', alignment: 'left', height: '200' },
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   ''
    // ])
  })
  let i = 0
  const tabelas = Object.entries(rows).map(([k, v]) => {
    let pageBreak = ''
    if (i > 0) {
      pageBreak = 'before'
    }
    i++
    return [
      { text: sistema + ' - Pagamentos da ' + labels[k], alignment: 'center', style: 'header', pageBreak },
      {
        style: 'tableapre',
        layout: 'lightHorizontalLines',
        // layout: 'pagarDoc',
        // layout: 'headerLineOnly',
        table: {
          widths: ['*', 350, '*', '*', '*', '*'],
          body: [
            [
              {
                bold: true,
                text: 'Fatura',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'Dados Fornecedor',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              // {
              //   bold: true,
              //   text: 'DADOS BANCARIOS',
              //   style: 'header',
              //   fontSize: 11,
              //   alignment: 'center'
              // },
              {
                bold: true,
                text: 'Valor\nBruto',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'Desconto',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'Valor\nLiquido',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              },
              {
                bold: true,
                text: 'Anotaçõs',
                style: 'header',
                fontSize: 11,
                alignment: 'center'
              }
            ],
            ...v
          ]
        }
      }
      // { text: '', alignment: 'center', pageBreak: 'after' }
    ]
  })

  return {
    footer: { alignment: 'center', text: new Date().toLocaleString() },
    pageOrientation: 'landscape',
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: tabelas,
    styles: {
      header: {
        fontSize: 19,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        // bold: true,
        margin: [0, 10, 0, 5]
      },
      tableBranch: {
        margin: [0, 0, 0, 5]
      },
      tableapre: {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        fontSize: 10
        // bold: true
      },
      tableHeader: {
        // bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      // font: 'Montserrat'
    }
  }
}

export function ddImg (img) {
  return {
    // pageOrientation: 'landscape',
    pageMargins: [0, 0, 0, 0],
    pageSize: {
      width: img.width,
      height: img.height
    },
    content: [
      {
        image: 'img',
        width: img.width,
        height: img.height
      }
    ],
    images: {
      img: img.src
    }
  }
}
