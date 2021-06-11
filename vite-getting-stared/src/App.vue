<template>
  <fe-button>按钮1</fe-button>
  <Spacer />
  <fe-button>按钮2</fe-button>
  <Spacer />
  <fe-button>
    <div class="icon_box">
      <aperture-icon />带图标的按钮
    </div>
  </fe-button>
</template>

<script>
import {defineComponent} from 'vue'
import { Button, Spacer } from '@fect-ui/vue'
import {aperture} from '@fect-ui/vue-icons'
import '@fect-ui/vue/lib/Button/index.css'
import '@fect-ui/vue/lib/spacer/index.css'

export default defineComponent({
  name: 'App',
  components: {
    'fe-button': Button,
    Spacer,
    'aperture-icon': aperture
  }
})
</script>

<style scoped>
.icon_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
