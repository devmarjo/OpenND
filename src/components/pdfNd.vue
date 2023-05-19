<template>
  <div ref="iframeContainer" ></div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { onMounted, ref } from 'vue'
pdfMake.vfs = pdfFonts.pdfMake.vfs
export default {
  props: {
    dd: Object
  },
  setup (props) {
    const dd = { ...props.dd }
    console.log(dd)
    const iframeContainer = ref(null)
    onMounted(() => {
      const pdfDocGenerator = pdfMake.createPdf(dd)
      pdfDocGenerator.getDataUrl((dataUrl) => {
        const iframe = document.createElement('iframe')
        iframe.style.border = 'none'
        iframe.style.width = '100%'
        iframe.style.height = '90vh'
        iframe.src = dataUrl
        iframeContainer.value.appendChild(iframe)
      })
    })
    return {
      iframeContainer
    }
  }
}
</script>
