<template>
  <v-container d-flex justify-center align-center>
    <v-card
      elevation="13"
      outlined
    >
      <v-card-title>Название в разработке</v-card-title>
      <v-form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="Имя"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          :counter="6"
          label="Пароль"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-btn
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
          @click="clear"
        >
          очистить
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      password: { required, minLength: minLength(6) }
    },

    data: () => ({
      name: '',
      password: ''
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Введите имя')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Пароль должен быть не меньше 6 символов')
        !this.$v.password.required && errors.push('Введите пароль.')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.password = ''
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