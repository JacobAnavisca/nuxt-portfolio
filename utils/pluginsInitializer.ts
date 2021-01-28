import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Log } from '@/plugins/logger'

let $axios: NuxtAxiosInstance
let $log: Log

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export function initializeLog(logInstance: Log) {
  $log = logInstance
}

export { $axios, $log }
