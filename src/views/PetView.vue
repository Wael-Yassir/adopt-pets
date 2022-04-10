<template>
  <div>
    <h1> {{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Bread: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    // a second way to import data from state
    // cats() {
    //   return this.$store.state.cats
    // }
    ...mapState([
      'cats', 'dogs'
    ])
  },
  mounted () {
    this.animal = this[this.$route.params.species][this.$route.params.id]
  }
}
</script>
