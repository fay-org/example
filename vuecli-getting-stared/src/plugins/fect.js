import { Button, Spacer } from '@fect-ui/vue'

const components = [Button, Spacer]

const install = (vue) => components.map((c) => c.install(vue))

export default { install }
