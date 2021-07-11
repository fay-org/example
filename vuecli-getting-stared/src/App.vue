<template>
  <div>
    <temp />
    <fe-spacer />
    <github />
    <activity size="23" />
    <fe-avatar text="888" />
    <fe-button>Buton Test</fe-button>
  </div>
</template>

<script>
import Temp from './components/Temp'
import { github, activity } from '@fect-ui/vue-icons'
import { Avatar, Button, Spacer } from '@fect-ui/vue'

export default {
  components: {
    Temp,
    github,
    activity,
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
