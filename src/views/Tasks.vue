<template>
  <v-container>
    <v-card flat>
      <v-toolbar flat>
        <h3>Все заявки</h3>
         <v-spacer></v-spacer>
        <v-btn
          x-small
          rounded
          color="primary"
        >Создать заявку</v-btn>
      </v-toolbar>
    </v-card>
    
    <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
  </v-container>
</template>

<script>
import TaskCard from '../components/task/TaskCard.vue'

export default {
  components: { TaskCard },
  data: () => ({
    icons: {
      numberIcon: 'mdi-clipboard-list-outline',
      companyIcon: 'mdi-briefcase-variant-outline',
      startIcon: 'mdi-archive-arrow-down-outline',
      termIcon: 'mdi-briefcase-variant-outline',
      workerIcon: 'mdi-account-circle-outline',
      endIcon: 'mdi-alarm'
    },
    tasks: [
      {
        id: 1,
        equipment: {
          title: 'Тестовое оборудование',
          description: 'Не работает какая-то херь'
        },
        data: [
          {id: 1, title: 'O1230231', icon: 'mdi-clipboard-list-outline'},
          {id: 2, title: 'ТоргТехникаСервис',icon: 'mdi-briefcase-variant-outline'},
          {id: 3, status: 'Назначена'}
        ],
        timing: {
          start: '11.12.2020 12:12',
          term: '1 год до завершения',
          worker: 'Пупкин П.П.',
          end: '11.12.2020 12:12'
        }
      },
      {
        id: 2,
        equipment: {
          title: 'Новое оборудование',
          description: 'Не работает что-то'
        },
        data: [
          {id: 1, title: 'O1230231', icon: 'mdi-clipboard-list-outline'},
          {id: 2, title: 'ТоргТехникаСервис',icon: 'mdi-briefcase-variant-outline'},
          {id: 3, status: 'Назначена'}
        ],
        timing: {
          start: '11.12.2020 12:12',
          term: '1 год до завершения',
          worker: 'Пупкин П.П.',
          end: '11.12.2020 12:12'
        }
      },
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>