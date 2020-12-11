<template>

  <v-container>
    <v-card
      elevation="2"
      outlined
      class="task-card d-flex flex-wrap"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>
            {{ task.equipment.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ task.equipment.description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-spacer></v-spacer>
        <v-list-item-content >
          <v-list-item-subtitle
            class="d-flex align-center"
            v-for="data in task.data"
            :key="data.title"
          >
            <v-icon
              small
              :class="data.class"
            >
              {{ data.icon }}
            </v-icon>
            <div>{{ data.title }}</div>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-subtitle class="d-flex align-center">
            <v-icon
              small
              class="pr-2"
            >
              mdi-archive-arrow-down-outline
            </v-icon>
            <div>11.12.2020 22:00</div>
          </v-list-item-subtitle>
          <v-list-item-subtitle class="d-flex align-center">
            <v-icon
              small
              class="pr-2"
            >
              mdi-briefcase-variant-outline
            </v-icon>
            <div>До крайнего срока 1 год</div>
          </v-list-item-subtitle>
          <v-list-item-subtitle class="d-flex align-center">
            <v-icon
              small
              class="pr-2"
            >
              mdi-account-circle-outline
            </v-icon>
            <div>Пупкин И.И.</div>
          </v-list-item-subtitle>
          <v-list-item-subtitle class="d-flex align-center">
            <v-icon
              small
              class="pr-2"
            >
              mdi-alarm
            </v-icon>
            <div>11.12.2021 22:00</div>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="rgb(0, 183, 255)">mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </v-container>

</template>

<script>
export default {
  data: () => ({

  }),
  props: [
    'task'
  ]
}
</script>

<style lang="scss" scoped>
.task-card {
  border-left: 4px solid rgb(0, 183, 255);
  :hover {
    background-color: rgb(223, 245, 253);
    cursor: pointer;
  }
}

</style>