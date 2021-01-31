<template>
  <div class="home">
    <v-alert
      v-model="successAlert"
      dismissible
      type="success"
      border="left"
      dense
      text
      elevation="2"
    >
      You've copied my Discord username <strong>{{ discordUsr }}</strong>!
    </v-alert>
    <v-alert
      v-model="errorAlert"
      dismissible
      type="error"
      border="left"
      dense
      text
      elevation="2"
    >
      There was an issue copying my Discord username 😞Check the console for more info.
    </v-alert>
    <FluidMarginContainer>
      <v-row>
        <v-col
          lg="6"
          xl="6"
          cols="12"
          :order="$vuetify.breakpoint.mdAndDown ? '2': '1'"
          class="mx-auto"
        >
          <div
            class="text-center align-self-center"
          >
            <h1
              id="name"
            >
              Contact
            </h1>
            <br>
            <p
              id="that-line-after-name"
            >
              I'm always open to helping out with any projects, especially open source ones, that peak my interest. If you think my skills could help out feel free to reach out.
            </p>
            <br>
            <v-btn
              id="mailto-button"
              href="mailto:jacobanavisca@gmail.com"
              elevation="2"
              rounded
              x-large
              color="popAccent"
            >
              <v-icon>mdi-email</v-icon>&nbsp;Say Hello!
            </v-btn>

            <br><br>

            <div
              class="hidden-lg-and-up"
            >
              <v-btn
                href="https://github.com/JacobAnavisca"
                icon
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>

              <v-btn
                href="https://t.me/Calcifer_Howl"
                icon
              >
                <v-icon>mdi-telegram</v-icon>
              </v-btn>

              <v-btn
                icon
                @click="copyDiscordUsr"
              >
                <v-icon>mdi-discord</v-icon>
              </v-btn>

              <v-btn
                href="https://www.linkedin.com/in/jacob-anavisca/"
                icon
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </FluidMarginContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import FluidMarginContainer from '@/components/FluidMarginContainer.vue'
import { mainStore } from '~/store'

@Component({
  components: {
    FluidMarginContainer
  }
})
export default class Contact extends Vue {
  discordUsr: string = 'Howl.Calcifer#3602'

  successAlert: boolean = false

  errorAlert: boolean = false

  @Emit()
  async copyDiscordUsr () {
    try {
      await navigator.clipboard.writeText(this.discordUsr)
      mainStore.setSuccessAlert(true)
      this.$log.info(`Copied discord username: ${this.discordUsr}`)
    } catch (err) {
      mainStore.setErrorAlert(true)
      this.$log.error(err)
    }
  }
}
</script>

<style lang="scss">
#content {
  #mailto-button {
    font-family: $secondaryFont;
  }
}
</style>
