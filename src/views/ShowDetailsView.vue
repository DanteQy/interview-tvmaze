<template>
  <div class="wrapper">
    <HeaderBar  @fetched-search-results="fetchedSearch($event)"></HeaderBar>
    <div>
      <DetailShow v-if="searchResults.length == 0" :show-id="$route.params" class="detail-show"></DetailShow>
      <SearchResults v-else-if="searchResults.length > 0" :results="searchResults"></SearchResults>
    </div>
  </div>

  <router-view :key="$route.fullPath"></router-view>
</template>

<script lang="ts">
import HeaderBar from '../components/HeaderBar.vue'
import DetailShow from '@/components/DetailShow.vue';
import SearchResults from '@/components/SearchResults.vue';
import type { Show } from '@/types/types';

export default {
  name: "ShowDetailsView",
  components: { HeaderBar, DetailShow, SearchResults},
  data() {
    return {
      searchResults: [] as Show[]
    };
  },
  methods: {
    fetchedSearch(searchResults: any) {
      this.searchResults = searchResults;
    },
  }
}
</script>

<style scoped>
.detail-show {
  margin-top: 10vh;
}
</style>
