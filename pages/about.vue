<template>
  <div class="about">
    <v-container
      fluid
    >
      <v-row
        :style="{ 'margin-top': aboutTopMargin + 'em' }"
        justify="center"
      >
        <v-col
          lg="9"
          xl="9"
          cols="12"
        >
          <div
            id="about-content"
          >
            <v-container
              fluid
            >
              <v-row>
                <v-col
                  lg="7"
                  xl="7"
                  cols="12"
                >
                  <h1
                    class="text-left"
                    id="name"
                  >
                    About Me
                  </h1>
                  <p
                    class="text-left"
                  >
                    Sudoku puzzles have always been fun for me and I exceled in math classes as a kid,
                    math felt like another type of puzzle. This love of solving puzzles led me to dip
                    my toes into programming, it's like a never ending puzzle. I try to help out with
                    open source projects when I can and I love learning new tools and new programming
                    languages.
                  <br><br>
                    <v-btn
                      @mouseover="updateCard('hiking')"
                      class="card-hover"
                      color="#7b8dee"
                      elevation="9"
                      small
                    >Hiking</v-btn>
                    is one of my favorite things to do. No feeling beats the feeling of a cloud
                    rolling through you at the top of a mountain. I enjoy
                    <v-btn
                      @mouseover="updateCard('drawing')"
                      class="card-hover"
                      color="#7b8dee"
                      elevation="9"
                      small
                    >drawing</v-btn>
                    and have enjoyed it since I was a kid making doodles. I love going to punk shows,
                    love the smaller venues near Boston, and I enjoy playing
                    <v-btn
                      @mouseover="updateCard('guitar')"
                      class="card-hover"
                      color="#7b8dee"
                      elevation="9"
                      small
                    >guitar</v-btn>
                  </p>
                </v-col>
                <v-col
                  lg="5"
                  xl="5"
                  cols="12"
                >
                  <v-card
                    class="mx-auto"
                    max-width="600"
                    max-height="600"
                    elevation="9"
                  >
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title class="headline">
                          {{ this.card.title }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ this.card.subtitle }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <div
                      v-if="card.contentType === 'video'"
                    >
                      <video
                        controls
                        autoplay
                        loop
                        muted
                        :width="card.width"
                        class="rounded-lg"
                      >
                      <source
                        :src="card.src"
                        type="video/mp4"
                      >
                      </video>
                      <br>
                    </div>
                    <div
                      v-else-if="card.contentType === 'image'"
                    >
                      <v-img
                        :src="card.src"
                        class="mx-auto rounded-lg"
                        :max-width="card.width"
                        :max-height="card.height"
                        contain
                      />
                      <br>
                    </div>
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
import { Store } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators';
import { AboutCard } from '@/types'
// import CardsModule from '~/store/modules/cards'
// import { cardsStore } from '~/store'
import debug from 'debug'

const logger = debug('portfolio')

@Component({
  components: {
  },
  // async fetch () {
  //   const dbResponse = await fetch('https://iwp2lauwg5e3dlespaft2ebjpq.appsync-api.us-west-2.amazonaws.com/graphql', {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-api-key': 'da2-p2cwzfbrxna6zpfwrryraoyzfi'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify({
  //       query: "query listAboutards {\n  listAboutCards {\n    items {\n      id\n      title\n      src\n      content\n      contentType\n      subtitle\n      width\n      height\n    }\n  }\n}\n",
  //       variables: {}
  //     }) // body data type must match "Content-Type" header
  //   })
  //   logger(dbResponse)
  //   const CardsModuleInstance = getModule(CardsModule, this.$store)
  //   const cards = await CardsModuleInstance.about
  //   this.cards = cards
  //   this.card = cards?.[0]
  // }
  async asyncData({ app, res, store, $axios }: { app: any, res: any, store: Store<any>, $axios: any}) {
    try {
      logger('Hey this is a log')
      $axios.setHeader('Content-Type', 'application/json')
      $axios.setHeader('x-api-key', process.env.APPSYNC_API_KEY)
      const cards = (await $axios.$post('https://iwp2lauwg5e3dlespaft2ebjpq.appsync-api.us-west-2.amazonaws.com/graphql', {
        query: "query listAboutards {\n  listAboutCards {\n    items {\n      id\n      title\n      src\n      content\n      contentType\n      subtitle\n      width\n      height\n    }\n  }\n}\n",
        variables: {}
      })).data.listAboutCards.items
      // {
      //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'x-api-key': 'da2-p2cwzfbrxna6zpfwrryraoyzfi'
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   redirect: 'follow', // manual, *follow, error
      //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   body: JSON.stringify({
      //     query: "query listAboutards {\n  listAboutCards {\n    items {\n      id\n      title\n      src\n      content\n      contentType\n      subtitle\n      width\n      height\n    }\n  }\n}\n",
      //     variables: {}
      //   }) // body data type must match "Content-Type" header
      // })
      // app.$logger(dbResponse)
      // const CardsModuleInstance = getModule(CardsModule, store.state)
      // logger(CardsModuleInstance)
      // cardsStore.setAboutCards(cards)
      // const cards = await CardsModuleInstance.about
      const card = cards?.[0]
      return {cards, card}
      // logger(res.locals)
      // const CardsModuleInstance = getModule(CardsModule, store)
      // CardsModuleInstance.setAboutCards(res.locals.aboutCards)
      // const cards = await CardsModuleInstance.about
      // const card = cards?.[0]
      // logger(card)
      // return { cards, card }
    } catch(error) {
      logger(error)
    }
  }
})
export default class About extends Vue {
  cards: AboutCard[] | undefined = []
  card: AboutCard | undefined = {}

  updateCard (content: string): void {
    const newCard = this.cards?.find(card => card.content === content)

    this.card = newCard
  }

  get aboutTopMargin (): number {
    const margin = this.$vuetify.breakpoint.mdAndDown
      ? 0
      : 5
    return margin
  }
}
</script>

<style lang="scss">
.card-hover {
  font-size: 1.3em;
  font-family: 'EVA-Duarte';
  color: $popAccent;
}

#about-content .v-card {
  background-color: #7b8dee;
}

#about-content video {
  display: block;
  margin: auto;
}

#about-content img {
  height: 10em;
  width: 10em;
  border-radius: 50%;
}

#about-content #name {
  font-size: 2em;
  font-family: $mainFont;
  color: $primary;
}

#about-content #that-line-after-name {
  // margin-left: 10em;
}
</style>
