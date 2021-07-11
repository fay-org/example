import { defineComponent } from 'vue'
import { Image } from '@fect-ui/vue'

export default defineComponent({
  setup() {
    return () => (
      <Image
        src="https://user-images.githubusercontent.com/52351095/118687359-7e809480-b837-11eb-8083-b0504ec79652.png"
        width="540px"
        height="246px"
        useBrowser
        target="__blank"
        url="https://vue.miaya.com"
      />
    )
  },
})
