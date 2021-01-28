import { Plugin } from '@nuxt/types'
import debug from 'debug'

export interface Log {
  info: (message: string) => void, error: (message: string) => void
}

declare module 'vue/types/vue' {
  interface Vue {
    $log: Log
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $log: Log
  }

  interface Context {
    $log: Log
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $log: Log
  }
}

const logger: Plugin = (context, inject) => {
  inject('log', {
    info: (message: string) => debug('PORTFOLIO::DEBUG')(message),
    error: (message: string) => debug('PORTFOLIO::ERROR')(message)
  })
}

export default logger
