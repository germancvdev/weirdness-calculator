<template>
  <vs-row class="container fluid">
    <vs-col vs-type="flex" vs-justify="center" class="mb-5 mt-3">
      <span class="display-1 text-xs-center">{{ result_message }}</span>
    </vs-col>
    <vs-col>
      <span class="title">The GIFs you liked</span>
    </vs-col>
    <vs-col>
      <vs-row vs-type="flex" vs-justify="space-around" vs-align="flex-start">
        <vs-col
          v-for="item in favorites"
          :key="item.id"
          vs-type="flex"
          vs-justify="center"
          vs-lg="2"
          vs-sm="3"
          vs-xs="12"
        >
          <vs-card actionable class="git__container elevation-1 ma-2">
            <div slot="header" class="text-xs-center primary-text">
              <span>{{ item.title }}</span>
            </div>
            <div
              :style="
                'background-image:url(' + item.images.preview_webp.url + ')'
              "
              class="git__imagen__container"
            ></div>
            <div slot="footer" class="text-xs-center ">
              <div class="title primary-text">{{ item.weirdness }}/10</div>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </vs-col>

    <vs-col vs-type="flex" vs-justify="center" class="mt-4">
      <vs-button @click="startOver" color="primary" type="filled">
        START OVER</vs-button
      >
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  middleware: 'score',
  data: () => ({}),
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['result_message'])
  },
  methods: {
    startOver() {
      this.$store.commit('START_OVER');
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.git__container {
  min-width: 180px;
}

.git__imagen__container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  min-height: 100px;
}

@media only screen and (max-width: 600px) {
  .git__imagen__container {
    height: 280px;
  }

  .git__container {
    width: 300px;
  }
}
</style>
