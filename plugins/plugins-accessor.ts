import { Plugin } from '@nuxt/types'
import { initializeAxios, initializeLog } from '~/utils/pluginsInitializer'

const accessor: Plugin = ({ $axios, $log }) => {
  initializeAxios($axios),
  initializeLog($log)
}

export default accessor
