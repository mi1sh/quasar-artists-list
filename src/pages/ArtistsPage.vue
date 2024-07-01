<template>
  <q-page class="q-px-xl">
    <div class="wrapper q-mx-auto">
      <h5 class="text-center">Select artist:</h5>
      <q-list bordered class="bg-primary rounded-borders shadow-5">
        <q-item
          v-for="artist in artists"
          :key="artist.id"
          :to="`/artist/${artist.id}`"
        >
          <q-item-section class="q-pa-sm text-center">
            {{ artist.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import artistsData from '../mockArtistsData.json';

const artists = ref(artistsData);
</script>
