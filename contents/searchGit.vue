<template>
  <vs-row>
    <vs-col>
      <p class="body-1">
        Find out how weird you are by selecting GIFs that make you laugh. We'll
        show you the least weird ones to start, but you can move the slider to
        make them weirder.
      </p>
      <p class="body-1 mt-2">
        When you find a GIF you like, press the like button. Once you like 5
        GIFs, we'll show you how weird are you.
      </p>
    </vs-col>

    <!-- Search gifs by term entered -->
    <vs-col
      class="pa-2 mt-1"
      vs-type="flex"
      vs-justify="center"
      vs-align="flex-end"
    >
      <vs-input
        ref="search"
        @keyup.enter="serachGit"
        v-model="search"
        label-placeholder="Search item"
        size="large"
      />
      <vs-button
        :disabled="search.length < 4"
        @click="serachGit"
        :icon-after="true"
        color="primary"
        size="large"
        icon="send"
      >
        <span>Search</span>
      </vs-button>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center">
      <vs-alert
        :active.sync="show_message"
        color="primary"
        icon="info"
        closable
        class="empty__alert"
      >
        <span class="body-2">{{ search_message }}</span>
      </vs-alert>
    </vs-col>
    <vs-divider color="rgba(0,0,0,.3)">YOUR RESULT</vs-divider>
    <vs-col vs-w="12">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <vs-card v-if="search_active.url" actionable class="git__container">
            <div slot="header" class="text-xs-center primary-text">
              <span>{{ search_active.title }}</span>
            </div>
            <div
              :style="
                'background-image:url(' +
                  search_active.images.preview_webp.url +
                  ')'
              "
              class="git__imagen__container"
            ></div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button
                  @click="addToFavorite"
                  icon="thumb_up"
                  type="filled"
                  color="primary"
                ></vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <vs-alert
            :active.sync="empty_message"
            color="warning"
            icon="hourglass_empty"
            closable
            class="empty__alert"
          >
            <span>{{ empty_text }}</span>
          </vs-alert>
        </vs-col>
      </vs-row>
    </vs-col>
    <!-- change the weirdness by moving a slider -->
    <vs-col v-if="search_list.length" class="slider__content pa-4">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <vs-slider
            :disabled="!search_list.length"
            :min="0"
            :max="10"
            :value="slider_active"
            v-model="slider_active"
            color="primary"
          />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-start">
          <strong :class="search_list.length ? 'primary-text' : 'caption'"
            >Weirdness : {{ slider_active }}</strong
          >
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data: () => ({
    search: '',
    search_active: {},
    search_list: [],
    empty_message: false,
    slider_active: 0,
    show_message: false
  }),
  computed: {
    ...mapState(['empty_text', 'favorites', 'search_message']),
    ...mapGetters(['total_favorites'])
  },
  watch: {
    slider_active() {
      // change the weirdness by moving a slider
      this.search_active = { ...this.search_list[this.slider_active] };
    }
  },
  methods: {
    async serachGit() {
      // Search gifs by term entered
      this.resetInitValues();
      this.$vs.loading();
      await this.$axios
        .get(
          'search?api_key=RIW8pkohtJ4TJmT4cc85xT6rQGcvVbux&q=' +
            this.search +
            '&limit=11&rating=G&lang=es'
        )
        .then((x) => {
          if (x.data.data.length >= 10) {
            this.search_list = x.data.data;
            this.search_active = this.search_list[0];
            this.empty_message = false;
          } else {
            this.empty_message = true;
            this.search = '';
          }
        })
        .catch((e) => {
          this.empty_message = true;
          this.search = '';
        });
      this.$vs.loading.close();
    },
    resetInitValues() {
      this.slider_active = 0;
      this.search_list = [];
      this.search_active = {};
    },
    addToFavorite() {
      const itAlreadyExists = this.favorites.filter(
        (x) => x.id === this.search_active.id
      );
      if (itAlreadyExists.length) {
        this.$vs.notify({
          title: 'Warning!',
          text: 'It is already added in your favorites ',
          color: 'warning'
        });
      } else {
        this.$store.commit('ADD_TO_FAVORITES', {
          data: this.search_active,
          weirdness: this.slider_active
        });
        this.$vs.notify({
          title: 'Success!',
          text: this.search_active.title + ' was added to your favorites',
          color: 'success'
        });
        this.search = '';

        this.resetInitValues();
        this.$refs.search.focusInput();
        if (this.total_favorites < 5) {
          this.show_message = true;
          setTimeout(() => {
            this.show_message = false;
          }, 6000);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.git__container {
  width: 300px;
}
.git__imagen__container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 220px;
}

.empty__alert {
  max-width: 300px;
  min-height: 20px;
}

.slider__content {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
