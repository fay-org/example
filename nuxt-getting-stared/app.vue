<template>
  <div>
    <fe-spacer />
    <fe-button>Action</fe-button>
    <fe-spacer />
    <fe-tabs hide-border hide-divider>
      <fe-tab title="A">Hello</fe-tab>
      <fe-tab title="B">Fect</fe-tab>
    </fe-tabs>
  </div>
</template>

<script lang="ts">
import '@fect-ui/themes'
import { defineComponent } from 'vue'
import { Button, Spacer, Tab, Tabs } from '@fect-ui/vue'
export default defineComponent({
  components: {
    [Button.name]: Button,
    [Spacer.name]: Spacer,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  setup() {},
})
</script>
