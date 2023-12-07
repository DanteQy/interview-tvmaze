<template>
    <div class="topnav">
        <div class="home">
            <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav>
        </div>

        <div class="search-container">
            <SearchBar></SearchBar>
        </div>
    </div>
</template>

<script lang="ts">
import SearchBar from './SearchBar.vue';

export default {
    name: "HeaderBar",
    components: { SearchBar },
    emits: ['fetched-search-results'],
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>


<style scoped>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

.topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #908888;
    overflow: hidden;
    z-index: 1000;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
}

.topnav .home {
    color: black;
    text-decoration: none;
    font-size: 17px;
    padding: 14px 16px;
    text-align: center;
}

.topnav .home:hover {
    background-color: #ddd;
    color: black;
}

.topnav .home.active {
    background-color: #2196F3;
    color: white;
}



@media screen and (max-width: 600px) {
    .topnav {
        flex-direction: row;
        align-items: flex-start;
    }

    .topnav .home {
        margin: 0;
    }

    .topnav input[type=text] {
        border: 1px solid #ccc;
        margin-right: 0;
    }
}
</style>
