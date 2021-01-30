import { Middleware } from '@nuxt/types'

const browserDebug: Middleware = () => { // context
  // Do not run on server
  if (process.server) {
    return
  }

  localStorage.setItem('debug', 'PORTFOLIO*')
}

export default browserDebug
