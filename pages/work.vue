<template>
  <div class="work">
    <FluidMarginContainer :topMargin="false">
      <WorkCardsComp :workCards="this.workCards" />
    </FluidMarginContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { WorkCard } from '@/types'
import FluidMarginContainer from '@/components/FluidMarginContainer.vue'
import WorkCardsComp from '@/components/WorkCardsComp.vue'
import { workStore } from '~/store'

@Component({
  components: {
    FluidMarginContainer,
    WorkCardsComp
  }
})
export default class Work extends Vue {
  workCards: WorkCard[] = []

  mounted() {
      this.workCards = workStore.workCards
  }
}
</script>

<style lang="scss">
.v-card__title {
  font-family: $mainFont;
}
</style>
