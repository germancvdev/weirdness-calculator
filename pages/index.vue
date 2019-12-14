<template>
  <vs-row class="container fluid">
    <vs-col
      vs-type="flex"
      vs-justify="flex-start"
      vs-align="flex-start"
      vs-lg="6"
      vs-sm="6"
      vs-xs="12"
    >
      <search-git />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="flex-start"
      vs-align="flex-start"
      vs-lg="6"
      vs-sm="6"
      vs-xs="12"
    >
      <favorites />
    </vs-col>
  </vs-row>
</template>

<script>
import SearchGit from '@/contents/searchGit';
import Favorites from '@/contents/favorites';
export default {
  components: { SearchGit, Favorites }
};
</script>
