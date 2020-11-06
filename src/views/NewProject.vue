<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-card class="mx-auto py-3 px-4 pb-15">
      <v-list-item class="pt-6">
        <v-list-item-content>
          <v-list-item-title class="headline text-h5">
            New project
          </v-list-item-title>
        </v-list-item-content>

        <v-btn color="accent" rounded depressed>
          <v-icon left>
            mdi-check
          </v-icon>
          Create project
        </v-btn>
      </v-list-item>

      <v-divider class="my-5 mb-10"></v-divider>

      <div class="text-overline accent--text my-5 mx-4">Project details</div>

      <v-text-field
        label="Project name"
        placeholder="Human Genome Project"
        color="accent"
        outlined
      ></v-text-field>

      <v-textarea
        label="Abstract"
        placeholder="The base pairs that make up human DNA."
        color="accent"
        outlined
        auto-grow
      ></v-textarea>

      <div class="text-overline accent--text my-5 mt-2 mx-4">
        First experiment
      </div>

      <v-text-field
        label="Experiment name"
        value="Experiment #1"
        outlined
      ></v-text-field>

      <file-dropzone class="mb-8" />

      <v-text-field
        label="File link"
        placeholder="Google Sheets, Office Online etc."
        color="accent"
      ></v-text-field>

      <v-btn color="accent" rounded outlined depressed>
        <v-icon left>
          mdi-plus
        </v-icon>
        Add link
      </v-btn>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import FileDropzone from '@/components/FileDropzone.vue'

export default {
  data: () => ({
    items: [
      {
        text: 'Projects',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Test',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Experiment #1',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
    documentFiles: [
      {
        color: 'blue',
        icon: 'mdi-file',
        subtitle: 'Jan 20, 2014',
        title: 'Vacation itinerary',
      },
      {
        color: 'blue',
        icon: 'mdi-file',
        subtitle: 'Jan 10, 2014',
        title: 'Kitchen remodel',
      },
    ],
    dataFiles: [
      {
        color: 'green',
        icon: 'mdi-table',
        subtitle: 'Jan 20, 2014',
        title: 'Vacation itinerary',
      },
      {
        color: 'green',
        icon: 'mdi-table',
        subtitle: 'Jan 10, 2014',
        title: 'Kitchen remodel',
      },
    ],
    assetFiles: [
      {
        color: 'yellow',
        icon: 'mdi-image',
        subtitle: 'Jan 20, 2014',
        title: 'Vacation itinerary',
      },
      {
        color: 'amber',
        icon: 'mdi-image',
        subtitle: 'Jan 10, 2014',
        title: 'Kitchen remodel',
      },
    ],
  }),
  components: {
    FileDropzone,
  },
}
</script>
