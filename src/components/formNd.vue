<template>
  <div>
    <q-card class="q-mt-lg" flat bordered>
      <q-card-section>
        <div class="text-h5 q-py-md">Dados Da intermediadora</div>
        <q-input class="q-pa-sm" dense outlined v-for="(item, i ) in dataND.Intermediador " :label="i" v-model="dataND.Intermediador[i]" :key="'inputIntermediador'+i" />
        <q-file class="q-pa-sm" dense outlined v-model="logoInput" label="Logo" @update:model-value="loadLogo" />
      </q-card-section>
    </q-card>
    <q-card class="q-mt-lg" flat bordered>
      <q-card-section>
        <div class="text-h5 q-py-md">Dados Do Cliente </div>
        <q-input class="q-pa-sm" dense outlined v-for="(item, i ) in dataND.Cliente " :label="i" v-model="dataND.Cliente[i]" :key="'inputCliente'+i" />
      </q-card-section>
    </q-card>
    <q-card class="q-mt-lg" flat bordered>
      <q-card-section>
        <div class="text-h5 q-py-md">Dados Da Nota Débito </div>
        <div class="row">
          <q-input class=" col-12 col-md-6 col-xl-3 q-pa-sm" dense outlined v-for="(item, i ) in dataND.ND " :label="i" v-model="dataND.ND[i]" :key="'inputND'+i" />
          <q-file class="col-12 col-md-6 col-xl-3 q-pa-sm" dense outlined v-model="pixInput" label="QrCode PIX" @update:model-value="loadPix" />
        </div>
        <div class="q-pa-md text-red text-bold">
          DIGITAR VALORES UTILIZANDO APENAS NUMEROS E PONTO (PARA DECIMAIS). <br/>
          EX: <br/>
          PARA R$ 1.000,10 (UM MIL REAIS E DEZ CENTAVOS) <br/>
          DIGITE APENAS: 1000.10
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-mt-lg" flat bordered>
      <q-card-section>
        <div class="row">
          <div class="text-h5 q-py-md">
            Produtos Da Nota Débito
          </div>
          <q-space></q-space>
          <q-btn icon="add" flat label="add item" @click="novoProduto" />
        </div>
        <div class="row">
          <div class="col-12" v-for="(item, i ) in dataND.produtos " :key="'Produto'+i">
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <q-btn color="red" flat dense icon="close" @click="removeProduto(i)" />
                  <div class="text-h6">Produto {{ i+1 }}</div>
                </div>
              </div>
              <div class="col-6">
                <q-input class="q-ma-sm" dense outlined  label="Descricao" v-model="dataND.produtos[i].label"/>
              </div>
              <div class="col-6">
                <q-input class="q-ma-sm" dense outlined  label="Valor" v-model="dataND.produtos[i].valor"/>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="text-right q-pa-md">
      <q-btn color="green" label="gerar" icon-right="send" @click="gerar" />
    </div>
  </div>
  <div style="height: 30vh;"></div>
</template>

<script>
import { reactive, ref } from 'vue'
import NDmodel from './NDmodel'
export default {
  emits: ['gerar'],
  setup (props, { emit }) {
    const dataND = reactive({})
    const logo = ref(null)
    const logoInput = ref(null)
    const pix = ref(null)
    const pixInput = ref(null)
    const novoProduto = () => {
      dataND.produtos.push({
        label: '',
        value: 0
      })
    }

    const removeProduto = (i) => {
      dataND.produtos.splice(i, 1)
    }
    Object.assign(dataND, NDmodel.openND)
    const gerar = () => {
      const data = { ...dataND }
      if (logo.value !== null) {
        data.logo = logo.value
      }
      if (pix.value !== null) {
        data.pix = pix.value
      }
      console.log('PIX', data)
      emit('gerar', data)
    }
    const loadLogo = (val) => {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        const srcData = fileReader.result
        logo.value = srcData
      }
      fileReader.readAsDataURL(val)
    }
    const loadPix = (val) => {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        const srcData = fileReader.result
        pix.value = srcData
      }
      fileReader.readAsDataURL(val)
    }
    return {
      dataND,
      novoProduto,
      removeProduto,
      gerar,
      logoInput,
      loadLogo,
      pixInput,
      loadPix
    }
  }
}
</script>
