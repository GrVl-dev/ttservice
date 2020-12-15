<template>

  <v-container>
    <v-card
      outlined
      hover
      class="task-card"
    >
      <v-list-item>
        <v-row dense>
          <v-col>
            <v-list-item-content>
              <v-list-item-subtitle
                v-for="item in taskEquipment"
                :key="item.id"
                :class="item.class"
              >
                {{ item.title }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-list-item-content>
              <v-list-item-subtitle
                v-for="item in taskData"
                :key="item.id"
                :class="item.class"
              >
                <v-icon x-small>
                  {{ item.icon }}
                </v-icon>
                {{ item.title }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-subtitle
                v-for="item in taskTiming"
                :key="item.id"
              >
                <v-icon x-small>
                  {{ item.icon }}
                </v-icon>
                {{ item.title }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-col>
        </v-row>
        <v-card-action>
          <v-btn color="primary" icon>
            <v-icon color="rgb(0, 183, 255)">mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-action>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    taskEquipment() {
      return [
        {id: 1, title: this.task.title, class: 'font-weight-medium'},
        {id: 2, title: this.task.description}
      ]
    },
    taskData() {
      return [
        {id: 1, title: this.task.number, icon: 'mdi-clipboard-list-outline'},
        {id: 2, title: this.task.company, icon: 'mdi-briefcase-variant-outline'},
        {id: 3, title: this.task.status, icon: '', class: 'green--text text--accent-4'},
      ]
    },
    taskTiming() {
      return [
        {id: 1, title: this.task.start, icon: 'mdi-archive-arrow-down-outline'},
        {id: 2, title: this.task.term, icon: 'mdi-briefcase-variant-outline'},
        {id: 3, title: this.task.worker, icon: 'mdi-account-circle-outline'},
        {id: 4, title: this.task.end, icon: 'mdi-alarm'},
      ]
    },
  },
  props: [
    'task'
  ]
}
</script>

<style lang="scss" scoped>
.task-card {
  cursor: pointer;
  border-left: 4px solid rgb(0, 183, 255);
  // :hover{
  //   background-color: rgb(231, 249, 255);
  // }
}

</style>