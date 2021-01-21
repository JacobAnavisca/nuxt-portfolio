<template>
  <div class="work">
    <v-container
      fluid
    >
      <v-row
        justify="center"
      >
        <v-col
          lg="9"
          xl="9"
          cols="12"
        >
          <div
            id="work-content"
          >
            <v-container
              fluid
            >
              <v-row>
                <v-col
                  v-for="card in workCards"
                  :key="card.title"
                  lg="6"
                  xl="6"
                  cols="12"
                  class="mx-auto"
                >
                  <v-card
                    :href="card.link"
                    elevation="9"
                  >
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      height="200px"
                    />
                    <v-card-title v-text="card.title"></v-card-title>
                    <v-card-text>
                      {{card.description}}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { WorkCard } from '@/types'

@Component({
  components: {
  }
})
export default class Work extends Vue {
  workCards: WorkCard[] = [
    {
      title: 'B.O.B. List',
      src: 'https://jla-portfolio-assets.s3-us-west-2.amazonaws.com/images/boblist.png',
      description: 'PWA that shows local Black owned businesses.',
      link: 'https://boblist.resistandassist.io/'
    },
    {
      title: 'Deno Bob API',
      src: 'https://jla-portfolio-assets.s3-us-west-2.amazonaws.com/images/deno-bob-api.png',
      description: 'A Deno Serverless REST API to support the B.O.B. List app.',
      link: 'https://boblist.resistandassist.io/'
    },
    {
      title: 'Hoppscotch',
      src: 'https://jla-portfolio-assets.s3-us-west-2.amazonaws.com/images/hoppscotch.png',
      description: 'A PWA API request builder that I did a decent amount of work on when it was Postwoman.',
      link: 'https://hoppscotch.io'
    }
  ]

  get workTopMargin (): number {
    const margin = this.$vuetify.breakpoint.mdAndDown
      ? 0
      : 0
    return margin
  }
}
</script>

<style lang="scss">

.v-card__title {
  // text-shadow: #000 1px 1px 5px;
  // color: #000;
  font-family: 'Eva-Peron';
}

#work-content .v-card {
  background-color: #7b8dee;
}

#work-content #name {
  font-size: 2em;
  font-family: $mainFont;
  color: $primary;
}
</style>
