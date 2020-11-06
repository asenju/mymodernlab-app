<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-card class="mx-auto py-3 px-4">
      <v-list-item class="pt-6">
        <v-list-item-content>
          <v-list-item-title class="headline text-h5">
            Review
          </v-list-item-title>
        </v-list-item-content>

        <v-btn color="accent" rounded depressed outlined class="mx-3">
          <v-icon left>
            mdi-download
          </v-icon>
          Download
        </v-btn>
      </v-list-item>

      <v-divider class="my-5"></v-divider>

      <v-alert text color="accent" border="left" dense>
        <v-col class="grow">
          <div class="subtitle text-overline">
            Note to reviewers
          </div>
          Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam
          imperdiet imperdiet orci.
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="shrink">
          <v-btn color="accent" depressed>
            <v-icon left>
              mdi-text-box-check-outline
            </v-icon>
            Submit review
          </v-btn>
        </v-col>
      </v-alert>

      <v-list subheader two-line>
        <v-subheader inset class="font-weight-bold">Documents</v-subheader>

        <v-list-item
          v-for="documentFile in documentFiles"
          :key="documentFile.title"
        >
          <v-list-item-avatar>
            <v-icon
              :class="documentFile.color"
              dark
              v-text="documentFile.icon"
            ></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="documentFile.title"></v-list-item-title>

            <v-list-item-subtitle
              v-text="documentFile.subtitle"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-download</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-divider inset class="my-3"></v-divider>

        <v-subheader inset class="font-weight-bold">Files</v-subheader>

        <v-list-item v-for="dataFile in dataFiles" :key="dataFile.title">
          <v-list-item-avatar>
            <v-icon
              :class="dataFile.color"
              dark
              v-text="dataFile.icon"
            ></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="dataFile.title"></v-list-item-title>

            <v-list-item-subtitle
              v-text="dataFile.subtitle"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-download</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-divider inset class="my-3"></v-divider>

        <v-subheader inset class="font-weight-bold">Assets</v-subheader>

        <v-list-item v-for="assetFile in assetFiles" :key="assetFile.title">
          <v-list-item-avatar>
            <v-icon
              :class="assetFile.color"
              dark
              v-text="assetFile.icon"
            ></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="assetFile.title"></v-list-item-title>

            <v-list-item-subtitle
              v-text="assetFile.subtitle"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-download</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
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
}
</script>
