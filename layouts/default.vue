<template>
  <v-app>
    <!-- <v-system-bar></v-system-bar> -->

    <v-navigation-drawer
      :app="$vuetify.breakpoint.mdAndDown ? false: true"
      permanent
      mini-variant
      class="primary hidden-md-and-down"
    >
      <v-list
        nav
        rounded
        dense
      >
        <v-list-item-group>
          <v-list-item link>
            <router-link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            </router-link>
          </v-list-item>

          <v-list-item link>
            <router-link to="/about">
              <v-list-item-icon>
                <v-icon>mdi-coffee</v-icon>
              </v-list-item-icon>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/skills">
              <v-list-item-icon>
                <v-icon>mdi-sword</v-icon>
              </v-list-item-icon>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/work">
              <v-list-item-icon>
                <v-icon>mdi-code-json</v-icon>
              </v-list-item-icon>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/contact">
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false
  })
})
</script>

<style lang="scss">
.v-list-item a {
  text-decoration: none;
}

.v-navigation-drawer .v-list {
  margin-top: 33vh;
}
</style>
