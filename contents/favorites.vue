<template>
  <vs-row>
    <vs-col class="ma-1" vs-type="flex" vs-justify="center" vs-align="center">
      <span class="title text-xs-center">YOUR LIKES GIFS</span>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center">
      <vs-row>
        <vs-col
          v-for="item in favorites"
          :key="item.id"
          vs-type="flex"
          vs-justify="center"
          vs-align="flex-start"
          vs-lg="4"
          vs-sm="6"
          vs-xs="12"
        >
          <vs-card actionable class="git__container ma-1 elevation-1">
            <div slot="header" class="text-xs-center primary-text">
              <span>{{ item.title }}</span>
            </div>
            <div
              :style="
                'background-image:url(' + item.images.preview_webp.url + ')'
              "
              class="git__imagen__container"
            ></div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button
                  @click="removeFromFavorites(item)"
                  icon="close"
                  type="filled"
                  color="danger"
                ></vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </vs-col>

    <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="mt-2">
      <vs-button
        @click="$router.push('/results')"
        :disabled="total_favorites < 5"
        color="primary"
        type="filled"
      >
        CALCULATE MY WEIRDNESS SCORE</vs-button
      >
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="mt-2">
      <span v-if="total_favorites < 5">{{ score_message_count }}</span>
      <span v-else>{{ score_message }}</span>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data: () => ({}),
  computed: {
    ...mapState(['favorites', 'score_message']),
    ...mapGetters(['total_favorites', 'score_message_count'])
  },
  methods: {
    removeFromFavorites(payload) {
      this.$store.commit('REMOVE_FROM_FAVORIRES', payload);
      this.$vs.notify({
        title: 'Success!',
        text: payload.title + ' removed from favorites',
        color: 'success'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.git__container {
  width: 180px;
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
