<template>
  <nav>
    <v-container class="py-2 pt-12 px-10">
      <v-row>
        <v-toolbar-title class="ml-5 font-weight-black"
          >MyModernLab</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <div v-if="isAuthenticated">
          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" text>
                <v-avatar color="accent" size="24" class="mr-1"></v-avatar>
                {{ profile.name }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click.prevent="logout">
                <v-list-item-title>Log out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn color="primary mt-1" small depressed rounded to="/project/new">
            <v-icon left>
              mdi-plus
            </v-icon>
            New project
          </v-btn>
        </div>

        <div v-else>
          <v-btn
            color="primary mt-1"
            small
            depressed
            rounded
            @click.prevent="login"
          >
            <v-icon left>
              mdi-plus
            </v-icon>
            Sign in
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  beforeCreate() {
    this.$auth.renewTokens()
  },
  methods: {
    login() {
      this.$auth.login()
    },
    logout() {
      this.$auth.logOut()
      this.$router.push({ path: '/' })
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn
      this.profile = data.profile
    },
  },
  data() {
    return {
      isAuthenticated: false,
      profile: {},
    }
  },
}
</script>
