<template>
  <div class="wrapper">
    <HeaderBar @fetched-search-results="fetchedSearch($event)"></HeaderBar>
    <Dashboard v-if="searchResults.length == 0"></Dashboard>
    <SearchResults v-else-if="searchResults.length > 0" :results="searchResults"></SearchResults>
  </div>
  <router-view :key="$route.fullPath"></router-view>

</template>

<script lang="ts">
import HeaderBar from '../components/HeaderBar.vue'
import Dashboard from '../components/Dashboard.vue'
import SearchResults from '@/components/SearchResults.vue';
import type { Show } from '@/types/types';

export default {
  name: "HomeView",
  components: { HeaderBar, Dashboard, SearchResults },
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
