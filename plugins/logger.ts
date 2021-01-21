import { Plugin } from '@nuxt/types'
import debug from 'debug'

const debugLog = debug('PORTFOLIO')

declare module 'vue/types/vue' {
  interface Vue {
    $logger(message: string): void
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $logger(message: string): void
  }

  interface Context {
    $logger(message: string): void
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $logger(message: string): void
  }
}

const logger: Plugin = (context, inject) => {
  inject('logger', (message: string) => debugLog(message))
}

export default logger
