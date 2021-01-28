<template>
  <div class="home">
    <FluidMarginContainer>
      <v-row>
        <v-col
          lg="6"
          xl="6"
          cols="12"
          :order="$vuetify.breakpoint.mdAndDown ? '2': '1'"
          class="d-flex"
        >
          <div
            class="text-left align-self-center"
          >
            <h1
              id="name"
            >
              Hi, I'm Jacob.
            </h1>
            <br>
            <p
              id="that-line-after-name"
            >
              I'm a software developer based in Boston, MA<br>Eater of donuts / Builder of APIs<br>Tinkering with anything that sparks an interest.
            </p>
          </div>
        </v-col>
        <v-col
          lg="6"
          xl="6"
          cols="12"
          :order="$vuetify.breakpoint.mdAndDown ? '1': '2'"
        >
          <v-img
            src="https://jla-portfolio-assets.s3-us-west-2.amazonaws.com/images/nbpt.jpg"
            class="mx-auto rounded-circle"
            max-width="20em"
            max-height="20em"
          />
        </v-col>
      </v-row>
    </FluidMarginContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FluidMarginContainer from '@/components/FluidMarginContainer.vue'

@Component({
  components: {
    FluidMarginContainer
  }
})
export default class Home extends Vue {

}
</script>
