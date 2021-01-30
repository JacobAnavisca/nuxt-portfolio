/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import SkillStore from '~/store/modules/SkillsStoreModule'
import WorkStore from '~/store/modules/WorkStoreModule'
import AboutStore from '~/store/modules/AboutStoreModule'
import MainStore from '~/store/modules/MainStoreModule'

let skillStore: SkillStore
let workStore: WorkStore
let aboutStore: AboutStore
let mainStore: MainStore

function initialiseStores (store: Store<any>): void {
  skillStore = getModule(SkillStore, store)
  workStore = getModule(WorkStore, store)
  aboutStore = getModule(AboutStore, store)
  mainStore = getModule(MainStore, store)
}

export { initialiseStores, skillStore, workStore, aboutStore, mainStore }
