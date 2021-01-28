import { ActionTree, Store } from 'vuex'
import Vue from 'vue'
import { RootState } from '@/types'
import { IncomingMessage } from 'connect'

import {
  initialiseStores,
  skillStore,
  workStore,
  aboutStore
} from '~/utils/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit(_context, server: { req: IncomingMessage; app: Vue }) {
    await Promise.all([
      skillStore.serverInit(server),
      workStore.serverInit(server),
      aboutStore.serverInit(server)
    ])
  },

  // async nuxtClientInit(context) {
  //   await skillStore.clientInit()
  // },
}

export * from '~/utils/store-accessor'
