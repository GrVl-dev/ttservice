<template>
<v-card
  class="grey darken-3"
  flat
>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="title">
        Рога и копыта
      </v-list-item-title>
      <v-list-item-subtitle>
        и немного хвостов
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
  <v-divider></v-divider>
  <v-list
    dense
    nav
  >
    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Заявки', icon: 'mdi-clipboard-list-outline' },
        { title: 'Объекты', icon: 'mdi-cog' },
        { title: 'Компании', icon: 'mdi-briefcase-variant-outline' },
        { title: 'Работники', icon: 'mdi-account-group-outline' },
        { title: 'Аналитика', icon: 'mdi-chart-line' },
      ],
      right: null,
    }
  }
}
</script>

<style>

</style>