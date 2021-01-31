import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'modules/MainStoreModule',
  namespaced: true,
  stateFactory: true
})
export default class MainStoreModule extends VuexModule {
  public showErrorAlert: boolean = false
  public showSuccessAlert: boolean = false

  @Mutation
  public setErrorAlert (val: boolean) {
    this.showErrorAlert = val
  }

  @Mutation
  public setSuccessAlert (val: boolean) {
    this.showSuccessAlert = val
  }
}
