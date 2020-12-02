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
    <v-list-item-group
      v-model="selectedItem"
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-card>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      items: [
        { title: 'Заявки', icon: 'mdi-clipboard-list-outline', link: '/' },
        { title: 'Объекты | оборудование', icon: 'mdi-domain', link: '/objects' },
        { title: 'Компании', icon: 'mdi-briefcase-variant-outline', link: '/company' },
        { title: 'Сотрудники', icon: 'mdi-account-group-outline', link: '/workers' },
        { title: 'Материалы', icon: 'mdi-cog', link: '/materials' },
        { title: 'Аналитика', icon: 'mdi-chart-line', link: '/analitics' },
      ],
      right: null,
    }
  }
}
</script>

<style>

</style>