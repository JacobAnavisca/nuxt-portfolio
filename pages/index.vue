<template>
  <div class="home">
    <v-container
      fluid
    >
      <v-row
        :style="{ 'margin-top': homeTopMargin + 'em' }"
        justify="center"
      >
        <v-col
          lg="7"
          xl="7"
          cols="12"
        >
          <div
            id="home-content"
          >
            <v-container
              fluid
            >
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
                      I'm a software developer and a literal donut.
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
            </v-container>
          </div>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  get homeTopMargin (): number {
    const margin = this.$vuetify.breakpoint.mdAndDown
      ? 0
      : 5
    return margin
  }
}
</script>

<style lang="scss">

#home-content img {
  height: 10em;
  width: 10em;
  border-radius: 50%;
}

#home-content #name {
  font-size: 2em;
  font-family: $mainFont;
  color: $primary;
}

#home-content #that-line-after-name {
  // margin-left: 10em;
}
</style>
