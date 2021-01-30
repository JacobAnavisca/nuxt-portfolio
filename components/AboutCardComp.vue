<template>
  <v-card
    class="mx-auto"
    max-width="600"
    max-height="600"
    elevation="9"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ card.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ card.subtitle }}</v-list-item-subtitle>
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AboutCard } from '@/types'

@Component
export default class AboutCardComp extends Vue {
  @Prop({ default: {} }) readonly card: AboutCard | undefined
}
</script>
