<template>
    <div class="show-list">
        <div v-for="result in results" :key="result.show.id" class="show-card">
            <RouterLink :to="{ path: `/show/${result.show.id}`}" :key="result.show.id">
                <img :src="result.show?.image?.medium ? result.show.image.medium : placeholderImage" 
                @click="goToShowPage(result.show.id)" 
                :alt="result.show.name"
                class="show-image" />
            </RouterLink>
            <div class="show-details">
                <h3 class="show-title" @click="goToShowPage(result.show.id)">{{ result.show.name }}</h3>
                <p class="show-runtime">{{ result.show.runtime }} min</p>
                <p class="show-year">{{ result.show.premiered }}</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import router from '@/router';
export default {
    name: "SearchResults",
    data() {
        return {
            placeholderImage: 'https://placehold.co/210x295'
        };
    },
    props: ['results'],
    mounted() {
    },
    methods: {
        goToShowPage(id: string) {
            router.push({ path: `/show/${id}`, replace: true })
        }
    }
    
}
</script>
  
<style scoped>
.show-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10vh;
}

.show-card {
    width: 100%;
    max-width: 300px;
    margin: 10px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.show-image {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.show-details {
    padding: 15px;
}

.show-title {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.show-runtime,
.show-year {
    font-size: 1rem;
    color: #555;
}
</style>
  