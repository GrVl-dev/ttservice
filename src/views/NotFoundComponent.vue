<template>
  <v-container d-flex justify-center align-center>
    <v-card
      elevation="6"
      outlined
    >
      <v-card-title class="text-center">Упс, такой страницы не существует</v-card-title>
      <v-card-text class="text-center">
        <router-link to="/">
          Гоу хоум, чувак
        </router-link>
      </v-card-text>

    </v-card>
  </v-container>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.v-card {
  height: fit-content;
  width: fit-content;
  padding: 20px;
}
</style>