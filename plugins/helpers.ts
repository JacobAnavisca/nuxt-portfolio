import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $contentTopMargin: () => number
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $contentTopMargin: () => number
  }

  interface Context {
    $contentTopMargin: () => number
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $contentTopMargin: () => number
  }
}

const logger: Plugin = ({$vuetify}, inject) => {
  inject('contentTopMargin', (): number => {
    const margin = $vuetify.breakpoint.mdAndDown
      ? 0
      : 5
    return margin
  })
}

export default logger
