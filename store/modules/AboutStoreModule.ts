import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { IncomingMessage } from 'connect'
import { AboutCard } from '@/types'
import { $axios, $log } from '~/utils/pluginsInitializer'

@Module({
  name: 'modules/AboutStoreModule',
  namespaced: true,
  stateFactory: true,
})
export default class AboutStoreModule extends VuexModule {
  public aboutCards: AboutCard[] = []

  @Mutation
  private setAboutCard(val: AboutCard[]) {
    this.aboutCards = val
  }

  @Action
  async serverInit(server: { req: IncomingMessage; app: Vue }) {
    try {
      $axios.setHeader('Content-Type', 'application/json')
      $axios.setHeader('x-api-key', process.env.APPSYNC_API_KEY)

      $log.info('Making request for about data')
      const aboutCards = (await $axios.$post('https://iwp2lauwg5e3dlespaft2ebjpq.appsync-api.us-west-2.amazonaws.com/graphql', {
        query: "query listAboutards {\n  listAboutCards {\n    items {\n      id\n      title\n      src\n      content\n      contentType\n      subtitle\n      width\n      height\n    }\n  }\n}\n",
        variables: {}
      })).data.listAboutCards.items

      this.setAboutCard(aboutCards)
    } catch(error) {
      $log.error(error)
    }
  }
}
