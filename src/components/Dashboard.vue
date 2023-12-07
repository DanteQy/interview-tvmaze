<template>
  <div v-for="genre in genres" :key="genre" class="dashboard">
    <h2 v-if="getShowsByGenre(genre).length > 0">{{ genre }}</h2>
    <ShowList v-if="getShowsByGenre(genre).length > 0" :shows="getShowsByGenre(genre)" :genre="genre"></ShowList>
  </div>
</template>

<script lang="ts">
import { useGetShow } from '../composables/useGetShow';
import ShowList from './ShowList.vue';
import config from '@/config/config';

import { type Show } from '../types/types';

export default {
  name: "HeaderBar",
  components: { ShowList },
  data() {
    return {
      shows: [] as Show[],
      genres: config.Genres
    };
  },
  mounted() {
    this.getShows();
  },
  methods: {
    async getShows() {
      try {
        const data = (await useGetShow()).getShows();
        data.then((result) => {
          this.shows = result;
        })
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    },
    getShowsByGenre(genre: string) {
      const result = this.shows.filter((show) => {
        return show.genres.includes(genre);
      });
      return result;
    }
  }
};

</script>

<style scoped>
.dashboard {
  margin-top: 10vh;
}

@media only screen and (max-width: 1000px) {
  :root {
    --show-width: 25vw;
  }
}

@media only screen and (min-width: 900px) {
  .show:hover {
    transform: scale(1.3);
    z-index: 2;
  }

  /* Make description visible when show is hovered */
  .show:hover>.description {
    display: block;
  }

  .show:hover>img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}


div.scroll-container {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
}

div.scroll-container img {
  padding: 10px;
}

@media only screen and (max-width: 900px) {
  .btn-nav {
    display: none;
  }
}

@media only screen and (min-width: 901px) {

  .scroll-container :hover .btn-nav,
  .scroll-container :hover {
    visibility: visible;
  }
}
</style>

