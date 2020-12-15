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
        title: 'Тестовое оборудование',
        description: 'Не работает какая-то херь',
        number: 'O1230231',
        company: 'ТоргТехникаСервис',
        status: 'Назначена',
        start: '11.12.2020 12:12',
        term: '1 год до завершения',
        worker: 'Пупкин П.П.',
        end: '11.12.2020 12:12'
        
      },
      {
        id: 2,
        title: 'Новое оборудование',
        description: ' А уже не работает какая-то херь',
        number: 'O12243441',
        company: 'Какая-то фирмешка',
        status: 'Назначена',
        start: '15.12.2020 12:12',
        term: '1 год до завершения',
        worker: 'Пупкин П.П.',
        end: '15.12.2020 12:12'
      },
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>