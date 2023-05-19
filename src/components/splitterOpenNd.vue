<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: calc(100vh - 50px); width: 100vw; "
    >

      <template v-slot:before>
       <div class="q-pa-md">
          <form-nd @gerar="render"/>
       </div>
      </template>

      <template v-slot:after>
       <div class="q-pa-md">
        <pdf-nd v-if="renderObject !== null" :dd="renderObject" :key="pdfControl" />
        <!-- <pre>{{ renderObject }}</pre> -->
       </div>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import { ref } from 'vue'
import formNd from './formNd.vue'
import { ddFCmake } from './ddModel'
import PdfNd from './pdfNd.vue'
export default {
  components: { formNd, PdfNd },
  setup () {
    const pdfControl = ref(0)
    const render = (data) => {
      const vars = {
        cliente: {
          key: 0,
          label: data.Cliente['nome fantasia'],
          razaoSocial: data.Cliente['nome fantasia'],
          endereco: data.Cliente.endereco,
          cnpj: data.Cliente['nome fantasia'].cnpj,
          bairro: data.Cliente.bairro,
          cep: data.Cliente.cep,
          cidade: data.Cliente.cidade,
          nomeFantasia: data.Cliente.nomeFantasia,
          uf: data.Cliente.uf
        },
        fc: data.ND.numero,
        logo: data.logo || false,
        pix: data.pix || false,
        header: data.Intermediador['nome fantasia'],
        headerDados: `${data.Intermediador.endereco}, ${data.Intermediador.bairro} - ${data.Intermediador.cidade} - ${data.Intermediador.cep} - ${data.Intermediador.uf} | CNPJ: ${data.Intermediador.cnpj}`,
        natureza: data.ND.natureza,
        dataEmissao: data.ND.dataEmissao,
        contrato: data.ND.contrato,
        dataInicial: data.ND.dataInicial,
        dataFinal: data.ND.dataFinal,
        observacao: data.ND.observacao,
        dadosPagamento: data.ND.dadosPagamento,
        responsavel: data.ND.responsavel,
        emailResponsavel: data.ND.emailResponsavel,
        valorBruto: data.ND.valorBruto,
        acrescimo: data.ND.acrescimo,
        desconto: data.ND.desconto,
        valorLiquido: data.ND.valorLiquido,
        produtos: data.produtos,
        secretaria: data.ND.secretaria || false,
        departamento: data.ND.departamento || false,
        empenho: data.ND.empenho || false,
        nfLinks: []
      }
      // renderObject.value = vars
      renderObject.value = ddFCmake(vars) || null
      pdfControl.value += 1
    }
    const renderObject = ref(null)
    return {
      splitterModel: ref(50), // start at 50%
      renderObject,
      render,
      pdfControl
    }
  }
}
</script>
