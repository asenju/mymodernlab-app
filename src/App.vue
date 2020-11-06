<template>
  <v-app>
    <NavBar />
    <v-main class="pb-16">
      <v-container color="grey">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="sass"></style>
