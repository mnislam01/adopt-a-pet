<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover v-bind:items="cats">
      <template v-slot:cell(name)="data">
        <router-link v-bind:to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(
      [
        'cats'
      ]
    )
  }
}
</script>
