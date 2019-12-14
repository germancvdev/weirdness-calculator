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

    <vs-col class="pa-2" vs-type="flex" vs-justify="center" vs-align="flex-end">
      <vs-input
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
                  @click="search = ''"
                  :icon="true ? 'favorite_border' : 'search'"
                  type="filled"
                  color="danger"
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
  </vs-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    search: '',
    search_active: {},
    search_list: [],
    empty_message: false
  }),
  computed: {
    ...mapState(['empty_text'])
  },
  methods: {
    async serachGit() {
      this.search_list = [];
      this.search_active = {};
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
      setTimeout(() => {
        this.empty_message = false;
      }, 3000);
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
</style>
