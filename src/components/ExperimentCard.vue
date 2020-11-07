<template>
  <v-card :loading="loading" class="mx-auto my-8" flat outlined>
    <template slot="progress">
      <v-progress-linear height="10" indeterminate></v-progress-linear>
    </template>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          Test experiment
        </v-list-item-title>
        <v-list-item-subtitle>January 10, 2020</v-list-item-subtitle>
      </v-list-item-content>
      <v-spacer></v-spacer>
      <div class="reviewers">
        <v-avatar color="accent" size="24"></v-avatar>
        <v-avatar color="accent" size="24"></v-avatar>
        <v-avatar color="accent" size="24"></v-avatar>
        <v-avatar color="accent" size="24"></v-avatar>
      </div>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="pb-8">
      Experiment description
    </v-card-text>
  </v-card>
</template>

<style lang="sass" scoped>
.reviewers
  .v-avatar
    margin-right: 3px
</style>
