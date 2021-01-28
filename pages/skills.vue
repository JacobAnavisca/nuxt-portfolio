<template>
  <div class="skills">
    <FluidMarginContainer>
      <v-row>
        <v-col
          lg="6"
          xl="6"
          cols="12"
        >
          <h1
            class="text-left"
            id="name"
          >
            Skills
          </h1>
          <p
            class="text-left"
          >
            Recently, I started using Lua to create a small text based video game. Still
            getting used to it but it's been fun learning about lua. I've also been getting
            more and more familiar with Deno. I think eventually it will replace Node, I like
            the out of the box Typescript support, and how third party packages are handled.
            Typescript is pretty sweet and helps catch issues before ever deploying to
            production. I've worked with one other NoSQL databse but I wanted to get more
            familiar with DynamoDB as it pairs well with Serverless APIs.
            <br><br>
            I've had a lot of experience debugging, implementing custom and product code for
            PHP applications. I've also had a lot of experience with debugging and
            implementing APIs using the Serverless framework, Express.js, and Node.js.
          </p>
        </v-col>
        <v-col
          lg="6"
          xl="6"
          cols="12"
        >
          <SkillCardComp
            :selectedCategories="this.selectedCategories"
            :skillItems="this.skillItems"
          />
        </v-col>
      </v-row>
    </FluidMarginContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SkillsItem } from '@/types'
import FluidMarginContainer from '@/components/FluidMarginContainer.vue'
import SkillCardComp from '@/components/SkillCardComp.vue'
import { skillStore } from '~/store'

@Component({
  components: {
    FluidMarginContainer,
    SkillCardComp
  }
})
export default class Skills extends Vue {
  selectedCategories: string[] = []

  skillItems: SkillsItem[] = []

  mounted() {
      this.skillItems = skillStore.skillItems
  }
}
</script>
