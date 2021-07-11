<template>
  <fe-button>按钮1</fe-button>
  <fe-spacer />
  <fe-button>按钮2</fe-button>
  <fe-spacer />
  <fe-button @click="handleClick">
    <div class="icon_box"><aperture />带图标的按钮</div>
  </fe-button>
  <fe-modal title="Hello Vite" v-model:visible="show" />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Button, Modal, Spacer } from '@fect-ui/vue'
import { aperture } from '@fect-ui/vue-icons'

export default defineComponent({
  name: 'App',
  components: {
    [Button.name]: Button,
    [Spacer.name]: Spacer,
    [Modal.name]: Modal,
    aperture,
  },
  setup() {
    const show = ref(false)
    const handleClick = () => (show.value = !show.value)
    return {
      show,
      handleClick,
    }
  },
})
</script>

<style scoped>
.icon_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
