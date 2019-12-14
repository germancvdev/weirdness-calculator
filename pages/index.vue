<template>
  <vs-row class="container fluid">
    <vs-col vs-type="flex" vs-lg="6" vs-sm="6" vs-xs="12">
      <search-git />
    </vs-col>
    <vs-col vs-type="flex" vs-lg="6" vs-sm="6" vs-xs="12">
      <span class="body-1">likes</span>
    </vs-col>
  </vs-row>
</template>

<script>
import SearchGit from '@/contents/searchGit';
export default {
  components: { SearchGit }
};
</script>
