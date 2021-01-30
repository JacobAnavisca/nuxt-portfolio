<template>
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
        <v-card-title v-text="card.title" />
        <v-card-text>
          {{ card.description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { WorkCard } from '@/types'

@Component
export default class SkillCardComp extends Vue {
  @Prop({ default: [] }) readonly workCards!: WorkCard[]
}
</script>
