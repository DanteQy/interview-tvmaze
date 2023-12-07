<template>
  <div :class="genre" class="show">
    <img :src="show?.image?.medium" :alt="show?.name">
    <div class="description">
      <div class="description-text-container">
        <label class="title">{{ show?.name }}</label>
        <p><span class="description-match">{{ show?.rating.average * 10 }}%</span>
          <span class="description-length">   -   &lt;{{ show?.runtime }}min&gt;</span></p>
        <div v-for="genre in show?.genres" :key="genre">
          <span>{{ genre }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: "ShowListItem",
  inheritAttrs: false,
  props: [
    'show',
    'genre'
  ],
  data() {
    return {};
    //getShowsByGenreAndRating
  },
  mounted() {

  },
  methods: {

  }
};

</script>
  
<style scoped>
.show {
  width: var(--show-width);
  height: var(--show-height);
  display: inline-block;
  position: relative;
  color: white;
  padding: 0 2px;
  font-size: 0.8rem;
  transition: all 0.8s ease-in-out;
}

.show:nth-of-type(1) {
  margin-left: var(--arrow-width-big);
}

.show img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

.description {
  position: absolute;
  display: none;
  z-index: 999;
  background-color: #272727;
  width: var(--show-width);
  margin-top: -10px;
  padding: 10px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media only screen and (max-width: 900px) {
  .show:nth-of-type(1) {
    margin-left: var(--arrow-width-small);
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

.title {
  color: grey;
  font-size: 18px;
}

.description-buttons-container {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.description-text-container {
  padding: 10px;
}

.description-match {
  color: green;
}

.description-rating {
  outline: 1px solid white;
  padding: 0 3px;
  margin: 0 5px;
}

.description-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  text-align: center;
  font-size: 8px;
  margin-right: 5px;
  border-radius: 100%;
}

.description-button:hover {
  border-color: grey;
  color: grey;
  cursor: pointer;
}

.description-button:nth-of-type(5) {
  margin-left: auto;
  margin-right: 0;
}</style>