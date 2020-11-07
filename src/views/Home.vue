<template>
  <v-container>
    <v-row>
      <v-col class="col-8 offset-2" v-if="!isLoading">
        <div>projects: {{ $apollo.queries.projects }} - {{ error }}</div>
        <div v-for="project in projects" :key="project.id">
          {{ project.id }}. {{ project.name }}
        </div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'home',
  apollo: {
    projects: gql`
      query {
        projects {
          id
          name
        }
      }
    `,
    result ({ data, loading, networkStatus }) {
      console.log('We got some result!', data, loading, networkStatus)
    },
    error(error) {
      this.error = JSON.stringify(error.message)
    },
  },
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
      projects: [],
      error: null,
    }
  },
  components: {
    ProjectCard,
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
