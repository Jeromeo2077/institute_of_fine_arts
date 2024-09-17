<script setup>

import { AppState } from '@/AppState.js';
import { artworkService } from '@/services/ArtworkService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const artworks = computed(() => AppState.artwork)

onMounted(() => {
  getArtwork()
})


async function getArtwork() {
  try {
    await artworkService.getArtwork()
  }
  catch (error) {
    Pop.error(error)
  }
}

</script>

<template>
  <div class="container">
    <section class="row">
      <div v-for="art in artworks" :key="art.id" class="col-6 col-sm-6 mb-3 card">
        <img :src="art.imgUrls" :alt="`Poster for ${art.description}`" class="img-fluid rounded"
          :title="art.description">
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    flex: 1 1 100px;
    /* Adjust the basis as needed */
  }

}
</style>
