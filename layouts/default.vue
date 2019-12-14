<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="flex-start"
      vs-align="center"
      vs-w="12"
      class="primary pt-3 pb-3 pl-2 pr-2 layout_header"
    >
      <span class="display-1 white-text">{{ title }}</span>
    </vs-col>
    <vs-col vs-type="flex" vs-w="12" class="page_content">
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
.layout_header {
  position: fixed;
  z-index: 100000000;
}

.page_content {
  margin-top: 80px;
}
</style>
