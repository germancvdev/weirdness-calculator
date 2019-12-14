<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="flex-start"
      vs-align="center"
      vs-w="12"
      class="primary pt-3 pb-3 pl-2 pr-2"
    >
      <span class="display-1">{{ title }}</span>
    </vs-col>
    <vs-col vs-type="flex" vs-w="12">
      <nuxt />
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({}),
  computed: {
    ...mapState(['title'])
  }
};
</script>
<style>
html {
  font-family: 'Source Sans Pro';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
