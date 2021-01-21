<template>
  <div class="skills">
    <v-container
      fluid
    >
      <v-row
        :style="{ 'margin-top': skillsTopMargin + 'em' }"
        justify="center"
      >
        <v-col
          lg="9"
          xl="9"
          cols="12"
        >
          <div
            id="skill-content"
          >
            <v-container
              fluid
            >
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
                            label="languages/frameworks"
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
                        <v-chip-group
                          column
                        >
                        <v-chip
                          v-for="(skillItem, index) in skillItems"
                          :key="skillItem + index"
                          :active="selectedCategories.length === 0 || includesSingleOrMulti(selectedCategories, skillItem.category)"
                          v-html="skillItem.title"
                          color="background"
                        >
                        </v-chip>
                      </v-chip-group>
                    </v-row>
                  </v-container>
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
import { Component, Vue } from 'vue-property-decorator'
import { SkillsItem } from '@/types'

@Component({
  components: {
  }
})
export default class Skills extends Vue {
  selectedCategories: string[] = []

  skillItems: SkillsItem[] = [
    { title: 'Javascript', category: 'languages' },
    { title: 'Typescript', category: 'languages' },
    { title: 'Nodejs', category: 'languages' },
    { title: 'Vuejs', category: 'languages' },
    { title: 'Deno', category: 'languages' },
    { title: 'Lua', category: 'languages' },
    { title: 'PHP', category: 'languages' },
    { title: 'PostgreSQL', category: 'databases' },
    { title: 'MySQL', category: 'databases' },
    { title: 'DynamoDB', category: 'databases' },
    { title: 'HTML', category: 'languages' },
    { title: 'CSS', category: 'languages' },
    { title: 'Sass/Scss', category: 'languages' },
    { title: 'Java &ast;', category: 'languages' },
    { title: 'Kotlin &ast;', category: 'languages' },
    { title: 'C# &ast;', category: 'languages' },
    { title: 'OOP', category: 'concepts' },
    { title: 'Bash', category: 'languages' },
    { title: 'Git', category: 'tools' },
    { title: 'Github', category: 'tools' },
    { title: 'Gitflow workflow', category: 'concepts' },
    { title: 'Sublime', category: 'tools' },
    { title: 'Atom', category: 'tools' },
    { title: 'AWS', category: 'tools' },
    { title: 'SDLC', category: 'concepts' },
    { title: 'CI/CD', category: 'concepts' },
    { title: 'OpenAPI/Swagger', category: 'concepts' },
    { title: 'Postman', category: 'tools' },
    { title: 'Terminal', category: 'tools' },
    { title: 'REST', category: 'concepts' },
    { title: 'GraphQL', category: 'concepts' },
    { title: 'Expressjs', category: 'languages' },
    { title: 'Serverless', category: ['languages', 'concepts'] }
  ]

  get skillsTopMargin (): number {
    const margin = this.$vuetify.breakpoint.mdAndDown
      ? 0
      : 5
    return margin
  }

  includesSingleOrMulti (arrayToCheck: string[], valuesToFind: string | string[]): boolean {
    if (typeof valuesToFind === 'string') {
      return arrayToCheck.includes(valuesToFind)
    } else {
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
}
</script>

<style lang="scss">

#skill-content .v-card {
  background-color: #7b8dee;
}

#skill-content #name {
  font-size: 2em;
  font-family: $mainFont;
  color: $primary;
}
</style>
