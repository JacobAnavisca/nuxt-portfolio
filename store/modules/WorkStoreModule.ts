import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
// import { IncomingMessage } from 'connect'
import { WorkCard } from '@/types'
import { $axios, $log } from '~/utils/pluginsInitializer'

@Module({
  name: 'modules/WorkStoreModule',
  namespaced: true,
  stateFactory: true
})
export default class WorkStoreModule extends VuexModule {
  public workCards: WorkCard[] = []

  @Mutation
  private setWorkCards (val: WorkCard[]) {
    this.workCards = val
  }

  @Action
  async serverInit () { // server: { req: IncomingMessage; app: Vue }
    try {
      $axios.setHeader('Content-Type', 'application/json')
      $axios.setHeader('x-api-key', process.env.APPSYNC_API_KEY)

      $log.info('Making request for work data')
      const workCards = (await $axios.$post('https://iwp2lauwg5e3dlespaft2ebjpq.appsync-api.us-west-2.amazonaws.com/graphql', {
        query: 'query listWorkCards {\n  listWorkCards {\n    items {\n      id\n      title\n      src\n      description\n      link\n    }\n  }\n}\n',
        variables: {}
      })).data.listWorkCards.items

      this.setWorkCards(workCards)
    } catch (error) {
      $log.error(error)
    }
  }
}
