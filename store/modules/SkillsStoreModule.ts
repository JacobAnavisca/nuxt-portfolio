import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { IncomingMessage } from 'connect'
import { SkillsItem } from '@/types'
import { $axios, $log } from '~/utils/pluginsInitializer'

@Module({
  name: 'modules/SkillsStoreModule',
  namespaced: true,
  stateFactory: true,
})
export default class SkillsStoreModule extends VuexModule {
  public skillItems: SkillsItem[] = []

  @Mutation
  private setSkillItems(val: SkillsItem[]) {
    this.skillItems = val
  }

  @Action
  async serverInit(server: { req: IncomingMessage; app: Vue }) {
    try {
      $axios.setHeader('Content-Type', 'application/json')
      $axios.setHeader('x-api-key', process.env.APPSYNC_API_KEY)

      $log.info('Making request for skills data')
      const skillItems = (await $axios.$post('https://iwp2lauwg5e3dlespaft2ebjpq.appsync-api.us-west-2.amazonaws.com/graphql', {
        query: "query MyQuery {\n  listSkillItems(limit: 100) {\n    items {\n      categories\n      id\n      title\n    }\n  }\n}",
        variables: {}
      })).data.listSkillItems.items

      this.setSkillItems(skillItems)
    } catch(error) {
      $log.error(error)
    }
  }
}
