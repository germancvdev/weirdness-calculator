<template>
  <div class="container">
    <button @click="increment">ADD</button>
    <span>Hello{{ storage.counter }}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  components: {},
  computed: {
    ...mapState(['storage'])
  },
  mounted() {
    console.log(this.$store.state);
    console.log(this.$storage.getUniversal('counter'));
  },
  methods: {
    increment() {
      console.log(this.$storage.getUniversal('counter'));
      window.localStorage.get('counter');
      this.$storage.setUniversal('counter', 10);
    },
    ...mapMutations({
      // increment: 'increment'
    })
  }
};
</script>
<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro';
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
