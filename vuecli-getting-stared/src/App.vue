<template>
  <div>
    <fe-button>Button</fe-button>
    <fe-spacer />
    <temp />
    <fe-spacer />
    <fe-button>
      <div class="icon_box">
        <fect-icon icon="aperture" />
        标签按钮
      </div>
    </fe-button>
  </div>
</template>

<script>
import Temp from './components/Temp'

export default {
  components: {
    Temp,
  },
}
</script>

<style scoped>
.icon_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
