<template>
  <v-app>
    <v-navigation-drawer
      :app="$vuetify.breakpoint.mdAndDown ? false: true"
      permanent
      mini-variant
      class="primary hidden-md-and-down"
    >
      <v-list />
      <v-list
        nav
        rounded
        dense
      >
        <v-list-item-group>
          <v-list-item link>
            <NuxtLink to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
            </NuxtLink>
          </v-list-item>

          <v-list-item link>
            <NuxtLink to="/about">
              <v-list-item-icon>
                <v-icon>mdi-coffee</v-icon>
              </v-list-item-icon>
            </NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink to="/skills">
              <v-list-item-icon>
                <v-icon>mdi-sword</v-icon>
              </v-list-item-icon>
            </NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink to="/work">
              <v-list-item-icon>
                <v-icon>mdi-code-json</v-icon>
              </v-list-item-icon>
            </NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink to="/contact">
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
            </NuxtLink>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template #append>
        <v-list
          nav
          rounded
          dense
        >
          <v-list-item-group>
            <v-list-item>
              <a href="https://github.com/JacobAnavisca">
                <v-list-item-icon>
                  <v-icon>mdi-github</v-icon>
                </v-list-item-icon>
              </a>
            </v-list-item>

            <v-list-item>
              <a href="https://t.me/Calcifer_Howl">
                <v-list-item-icon>
                  <v-icon>mdi-telegram</v-icon>
                </v-list-item-icon>
              </a>
            </v-list-item>

            <v-list-item>
              <a @click="copyDiscordUsr">
                <v-list-item-icon>
                  <v-icon>mdi-discord</v-icon>
                </v-list-item-icon>
              </a>
            </v-list-item>

            <v-list-item>
              <a href="https://www.linkedin.com/in/jacob-anavisca/">
                <v-list-item-icon>
                  <v-icon>mdi-linkedin</v-icon>
                </v-list-item-icon>
              </a>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-bottom-navigation
      class="primary hidden-lg-and-up"
      dark
      shift
      :app="$vuetify.breakpoint.mdAndDown ? true: false"
      grow
    >
      <v-btn
        link
        to="/"
        x-large
      >
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn
        link
        to="/about"
        x-large
      >
        <span>About</span>

        <v-icon>mdi-coffee</v-icon>
      </v-btn>

      <v-btn
        link
        to="/skills"
        x-large
      >
        <span>Skills</span>

        <v-icon>mdi-sword</v-icon>
      </v-btn>

      <v-btn
        link
        to="/work"
        x-large
      >
        <span>Work</span>

        <v-icon>mdi-code-json</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-main class="background">
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
      <v-btn
        v-show="this.$route.path !== '/contact'"
        class="hidden-lg-and-up"
        fab
        color="secondary"
        top
        right
        fixed
        nuxt
        to="/contact"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mainStore } from '~/store'

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
    discordUsr: 'Howl.Calcifer#3602',
    showContactButton: false
  }),
  computed: {
    successAlert: {
      get: () => {
        return mainStore.showSuccessAlert
      },
      set: () => {
        return mainStore.setSuccessAlert(false)
      }
    },
    errorAlert: {
      get: () => {
        return mainStore.showErrorAlert
      },
      set: () => {
        return mainStore.setErrorAlert(false)
      }
    }
  },
  methods: {
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
})
</script>

<style lang="scss">
.v-list-item a {
  text-decoration: none;
}

.v-navigation-drawer .v-list {
  height: 33%;
}
</style>
