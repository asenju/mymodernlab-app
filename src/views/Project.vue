<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-card class="mx-auto py-3 px-4 pb-15">
      <v-list-item class="pt-6">
        <v-list-item-content>
          <v-list-item-title class="headline text-h5">
            Test project
          </v-list-item-title>
        </v-list-item-content>

        <v-btn color="accent" rounded depressed>
          <v-icon left>
            mdi-share
          </v-icon>
          Share
        </v-btn>
      </v-list-item>

      <v-divider class="my-5"></v-divider>

      <v-alert text color="accent" border="left" dense>
        <v-col class="grow">
          <div class="subtitle text-overline">
            Description
          </div>
          Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam
          imperdiet imperdiet orci.
        </v-col>
      </v-alert>

      <experiment-card />

      <!-- 
          <v-timeline dense clipped class="experiments my-5">
              <v-timeline-item color="grey" small>
                  <v-row justify="space-between">
                      <v-col cols="7">
                          5 days ago
                      </v-col>
                  </v-row>
              </v-timeline-item>

              <v-timeline-item class="mb-4" hide-dot>
                  <v-row>
                      <v-col class="col-10">
                          <experiment-card />
                      </v-col>
                  </v-row>
              </v-timeline-item>
          </v-timeline> -->
    </v-card>
  </v-container>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import ExperimentCard from '@/components/ExperimentCard.vue'

export default {
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
  components: {
    ExperimentCard,
  },
}
</script>
