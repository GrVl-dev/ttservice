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
    
    <TaskCard v-for="i in 5" :key="i"/>
  </v-container>
</template>

<script>
import TaskCard from '../components/task/TaskCard.vue'

export default {
  components: { TaskCard },

}
</script>

<style lang="scss" scoped>

</style>