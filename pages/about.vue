<template>
  <div class="about">
    <FluidMarginContainer>
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
              color="popAccent"
              elevation="9"
              small
            >Hiking</v-btn>
            is one of my favorite things to do. No feeling beats the feeling of a cloud
            rolling through you at the top of a mountain. I enjoy
            <v-btn
              @mouseover="updateCard('drawing')"
              class="card-hover"
              color="popAccent"
              elevation="9"
              small
            >drawing</v-btn>
            and have enjoyed it since I was a kid making doodles. I love going to punk shows,
            love the smaller venues near Boston, and I enjoy playing
            <v-btn
              @mouseover="updateCard('guitar')"
              class="card-hover"
              color="popAccent"
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
          <AboutCardComp :card="this.card" />
        </v-col>
      </v-row>
    </FluidMarginContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { AboutCard } from '@/types'
import FluidMarginContainer from '@/components/FluidMarginContainer.vue'
import AboutCardComp from '@/components/AboutCardComp.vue'
import { aboutStore } from '~/store'

@Component({
  components: {
    FluidMarginContainer,
    AboutCardComp
  }
})
export default class About extends Vue {
  cards: AboutCard[] | undefined = []
  card: AboutCard | undefined = {}

  @Emit()
  updateCard (content: string): void {
    const newCard = this.cards?.find(card => card.content === content)

    this.card = newCard
  }

  mounted() {
      this.cards = aboutStore.aboutCards
      this.card = aboutStore.aboutCards.find(card => card.content === 'hiking')
  }
}
</script>

<style lang="scss">
.card-hover {
  font-size: 1.3em;
  font-family: $secondaryFont;
  color: $popAccent;
}

#content {
  .v-card {
    video {
      display: block;
      margin: auto;
    }
  }
}
</style>
