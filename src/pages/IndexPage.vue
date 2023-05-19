<template>
  <q-page class="flex flex-center">
    <splitter-open-nd />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SplitterOpenNd from '../components/splitterOpenNd.vue'
export default defineComponent({
  name: 'IndexPage',
  components: { SplitterOpenNd }
})
</script>
