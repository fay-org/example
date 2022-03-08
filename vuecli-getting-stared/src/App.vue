<template>
  <div>
    <Github />
    <fe-spacer />
    <fe-avatar text="Avatar" />
    <fe-spacer />
    <fe-button loading />
    <fe-spacer />
  </div>
</template>

<script>
import { Github } from '@fect-ui/vue-icons'
import { Avatar, Button, Spacer } from '@fect-ui/vue'

export default {
  components: {
    Github,
    [Avatar.name]: Avatar,
    [Button.name]: Button,
    [Spacer.name]: Spacer,
  },
}
</script>

<style scoped>
.icon_box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
