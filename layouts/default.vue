<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="flex-start"
      vs-align="center"
      vs-w="12"
      class="primary pt-3 pb-3 pl-2 pr-2"
    >
      <span class="display-1 white-text">{{ title }}</span>
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
<style></style>
