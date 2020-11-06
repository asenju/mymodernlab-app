<template>
  <v-container>
    <v-row>
      <v-col class="col-8 offset-2">
        <div>tst {{ projects }}</div>
        <div v-for="project in projects" :key="project.id">
          {{ project.id }}. {{ project.name }}
        </div>
        <project-card />
        <project-card />
        <project-card />
        <project-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'home',
  methods: {
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn
      this.isLoading = false
    },
  },
  beforeCreate() {
    this.isLoading = true
  },
  mounted() {
    this.isLoading = false
  },
  data() {
    return {
      isAuthenticated: false,
      isLoading: true,
    }
  },
  apollo: {
    projects: gql`
      query {
        projects {
          id
          name
          created_at
        }
      }
    `,
    components: {
      ProjectCard,
    },
  },
}
</script>

<style lang="sass">
.logo
  width: 120px
  height: 31px
  background: rgba(255, 255, 255, 0.2)
  margin: 16px 28px 16px 0
  float: left
</style>
