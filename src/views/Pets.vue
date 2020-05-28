<template>
  <div>
    <h1>{{ animal.name }} ({{ animal.species }})</h1>
    <p>{{ animal.age }} years</p>
    <p>{{ animal.breed }}</p>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["cats", "dogs"])
  },
  // methods: {
  //   pet() {
  //     // const animal = this.cats
  //     const animal = this[this.$route.params.species][this.$route.params.id]
  //     // const animal = this['cats']
  //     console.log(animal)
  //     return animal
  //   }
  // }
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  }
};
</script>