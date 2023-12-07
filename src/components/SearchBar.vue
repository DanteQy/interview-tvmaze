<template>
  <div class="search-container">
    <input type="search" v-model="searchInput" @change="fetchSearchedData" @input="handleSearch" placeholder="Search shows" />
  </div>
</template>
  
<script lang="ts">
import { useGetShow } from '../composables/useGetShow';
import type { Show } from '../types/types';
export default {
  name: 'SearchBar',
  emits: ['fetched-search-results'],
  data() {
    return {
      showDetails: null as Show | null,
      searchResults: [] as Show[],
      genreAndRatingResults: [] as Show[],
      showDetailsError: null,
      searchError: null,
      genreAndRatingError: null,
      loading: false,
      searchInput: '',
    };
  },
  watch: {
    async searchInput() {
      if(this.searchInput !== '') {
        this.fetchSearchedData();
      }
    }
  },
  methods: {
    handleSearch(event: Event) {
      const el = event.target as HTMLInputElement
      this.searchInput = el.value;

    },
    async fetchSearchedData() {
      const data = (await useGetShow()).getSearchedShows(this.searchInput);
      data.then((result) => {
        this.searchResults = result;
        
        this.$parent?.$emit('fetched-search-results', this.searchResults);
      })
    }
  }
};
</script>
  
<style scoped>
.search-container {
  display: flex;
  align-items: center;
}

.topnav .search-container {
  display: flex;
  align-items: center;
}

.topnav input {
  padding: 6px;
  font-size: 17px;
  border: none;
  margin-right: 10px;
}

.topnav .search-container input {
  padding: 6px 10px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container input:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {

  .topnav input,
  .topnav .search-container {
    width: 100%;
    margin: 0;
    padding: 14px;
  }

  input {
    border: 1px solid #ccc;
    margin-right: 0;
  }
}
</style>
  