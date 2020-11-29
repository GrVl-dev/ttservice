<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>

import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'

export default {
  name: 'App',
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  
  data: () => (
    { drawer: null }
  )
}
</script>

<style lang="scss">

</style>
