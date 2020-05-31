<template>
  <div>
    <div>
      <h1>Dogs for Adoption</h1>
      <b-table striped hover v-bind:items="dogs">
        <template v-slot:cell(name)="data">
          <router-link v-bind:to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
        </template>
      </b-table>
    </div>
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
        'dogs'
      ]
    )
  }
}
</script>
