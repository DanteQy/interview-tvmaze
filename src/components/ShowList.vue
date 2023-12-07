<template>
  <div class="container">
    <button type="button" :id="leftButtonId" class="btn-nav">
      ᐊ
    </button>

    <div class="carousel" :id="genre">
      <div v-for="show in shows" :key="show.id">
        <router-link :to="{ path: `/show/${show.id}`}" :key="show.id">
          <ShowListItem :key="show.id" :genre="genre" :show="show"></ShowListItem>
        </router-link>
      </div>
    </div>
    <button type="button" :id="rightButtonId" class="btn-nav">
      ᐅ
    </button>
  </div>
</template>

<script lang="ts">
import ShowListItem from './ShowListItem.vue';

export default {
  name: "ShowList",
  components: { ShowListItem },
  props: [
    'shows',
    'genre'
  ],
  data() {
    return {
      leftButtonId: `left-button-${this.genre}`,
      rightButtonId: `right-button-${this.genre}`
    };
  },
  mounted() {
    const carousel = document.querySelector(`#${this.genre}`) as HTMLElement;
    const scrollLeftButton = document.getElementById(this.leftButtonId) as HTMLElement;
    const scrollRightButton = document.getElementById(this.rightButtonId) as HTMLElement;

    scrollLeftButton.style.left = '0';
    scrollRightButton.style.right = '0';

    scrollLeftButton.addEventListener("click", () => {
      let showWidth = document.querySelector(`.${this.genre}`)?.getBoundingClientRect().width || 0;
      let scrollDistance = showWidth * 6; 

      carousel.scrollBy({
        behavior: "smooth",
        top: 0,
        left: -scrollDistance,
      });
    });

    scrollRightButton.addEventListener("click", () => {
      let showWidth = document.querySelector(`.${this.genre}`)?.getBoundingClientRect().width || 0;
      let scrollDistance = showWidth * 6;

      carousel.scrollBy({
        top: 0,
        left: scrollDistance,
        behavior: "smooth",
      });
    });
  },
  methods: {
  }
};




</script>

<style> 
:root {
  --show-width: 15.5vw;
  --show-height: 200px;
  --arrow-width-big: 15px;
  --arrow-width-small: 5px;
  --carousel-py: 20vh;
}
@media only screen and (max-width: 1000px) {
  :root {
    --show-width: 25vw;
  }
}

body {
  background-color: #c9f3e1;
  font-family: "Heebo", sans-serif;
}

.container {
  display: flex;
  position: relative;
}

/* Carousel */
.carousel {
  width: 100%;
  display: inline-flex;
  overflow-x: scroll;
  overflow-y: visible;
  white-space: nowrap;
  position: relative;
  padding-top: 4vh;
  padding-bottom: var(--carousel-py);
}

.carousel::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.carousel {
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
}


/* BUTTON */
.btn-nav {
  width: var(--arrow-width-big);
  height: var(--show-height);
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  color: white;
  top: 2vh;
  z-index: 5;
  visibility: hidden;
}


@media only screen and (max-width: 900px) {
  .btn-nav {
    display: none;
  }
}

@media only screen and (min-width: 901px) {
  .container:hover .btn-nav,
  .container:hover .container-indicators {
    visibility: visible;
  }
}
</style>