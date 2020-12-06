<template>
  <v-container d-flex justify-center align-center>
    <v-card
      elevation="13"
      outlined
    >
      <v-card-title>Название в разработке</v-card-title>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Имя"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          :rules="passwordRules"
          :counter="6"
          label="Пароль"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="indigo accent-4 white--text"
          elevation="6"
          class="mr-4"
          @click="submit"
        >
          войти
        </v-btn>
        <v-btn
          color="orange darken-3 white--text"
          elevation="6"
          @click="reset"
        >
          очистить
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>


  export default {

    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Введите имя'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          const user = {
            name: this.name,
            password: this.password
          }
          console.log(user)
          this.$router.push('/')
        }
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style lang="scss" scoped>

.v-card {
  height: fit-content;
  width: 400px;
  padding: 20px;
}
.container {
  height: 100%;
}
</style>