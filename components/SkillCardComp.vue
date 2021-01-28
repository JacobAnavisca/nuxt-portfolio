<template>
  <client-only placeholder="Loading...">
    <v-card
      color="basil"
      elevation="9"
    >
      <v-container fluid>
        <v-row class="mx-auto">
          <v-col
            cols="6"
          >
            <v-checkbox
              v-model="selectedCategories"
              :label="languagesFrameworksLabel"
              color="background"
              value="languages"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="selectedCategories"
              label="databases"
              color="background"
              value="databases"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="6"
          >
            <v-checkbox
              v-model="selectedCategories"
              label="tools/services"
              color="background"
              value="tools"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="selectedCategories"
              label="concepts"
              color="background"
              value="concepts"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
        <br>
        <v-divider></v-divider>
        <br>
        <v-row class="mx-auto">
          <v-col>
            <v-chip-group
              column
            >
              <v-chip
                v-for="(skillItem, index) in skillItems"
                :key="skillItem + index"
                :active="selectedCategories.length === 0 || categoryCheck(selectedCategories, skillItem.categories)"
                v-html="skillItem.title"
                color="background"
              >
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { SkillsItem } from '@/types'

@Component
export default class SkillCardComp extends Vue {
  @Prop({ default: [] }) readonly selectedCategories!: string[]
  @Prop({ default: [] }) readonly skillItems!: SkillsItem[]

  get languagesFrameworksLabel() {
    const label = this.$vuetify.breakpoint.mdAndDown ?
      'langs/fwks' :
      'languages/frameworks'
    return label
  }

  @Emit()
  categoryCheck (arrayToCheck: string[], valuesToFind: string[]): boolean {
    const numberOfValues = valuesToFind.length
    let matchingValue = false

    for (const value of valuesToFind) {
      if (arrayToCheck.includes(value)) {
        matchingValue = true
      }
    }

    return matchingValue
  }
}
</script>
