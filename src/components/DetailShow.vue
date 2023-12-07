<template>
    <div class="detail-show">
      <div class="image-container">
        <img :src="show.image?.medium" :alt="show.name" class="show-image" />
      </div>
      <div class="details-container">
        <h1 class="show-title">{{ show.name }}</h1>
        <br>
        <p>{{ show.rating?.average * 10 }}%</p>
        <p>{{ show.runtime }} minutes</p>
        <div class="show-description" v-html="show.summary"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { useGetShow } from '../composables/useGetShow';
  import type { Show } from '../types/types';
  
  export default {
    name: "DetailShow",
  
    data() {
      return {
        show: {} as Show
      };
    },
    props: ['showId'],
    mounted() {
      this.fetchShow();
    },
    methods: {
      async fetchShow() {
        const data = (await useGetShow()).getShowDetails(this.showId.id);
        data.then((result) => {
          this.show = result;
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .detail-show {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
  
  .image-container {
    flex: 1;
    max-width: 100%;
    margin-bottom: 15vh;
  }
  
  .show-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .details-container {
    flex: 2;
    max-width: 800px;
    padding: 0 20px;
  }
  
  .show-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  .show-description {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
  }
  
  @media only screen and (max-width: 767px) {
    .detail-show {
      flex-direction: column; /* Stack elements vertically on small screens */
      align-items: center; /* Center align items on small screens */
    }
  
    .image-container,
    .details-container {
      flex: auto; /* Take full width on small screens */
      max-width: 100%;
      margin-bottom: 20px;
    }
  }
  </style>
  