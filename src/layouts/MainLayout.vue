<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      class="grey darken-3"
    >
      <NavigationMenu/>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Название в разработке</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavigationMenu from '../components/NavigationMenu.vue'

export default {
  components: { NavigationMenu },
  name: 'App',
  data: () => (
    { drawer: null }
  )
}
</script>

<style lang="scss">

</style>