<template>
  <v-container
    fluid
  >
    <v-row
      :style="[topMargin ? { 'margin-top': this.$contentTopMargin() + 'em' } : {}]"
      justify="center"
    >
      <v-col
        lg="9"
        xl="9"
        cols="12"
      >
        <div
          id="content"
        >
          <v-container
            fluid
          >
            <slot />
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FluidMarginContainer extends Vue {
  @Prop({ default: true }) readonly topMargin!: boolean
}
</script>

<style lang="scss">
img {
  height: 10em;
  width: 10em;
  border-radius: 50%;
}

#content {

  .v-card {
    background-color: $popAccent;

    video {
      display: block;
      margin: auto;
    }
  }

  #name {
    font-size: 2em;
    font-family: $mainFont;
    color: $primary;
  }
}
</style>
