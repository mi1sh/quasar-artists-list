<template>
  <q-page class="q-pa-xl">
    <div class="wrapper q-mx-auto">
      <q-btn
        icon="refresh"
        class="text-white q-mb-md"
        outline
        @click="$router.push('/')"
        >Back to Artists</q-btn
      >
      <q-list bordered class="bg-primary rounded-borders shadow-5">
        <q-item
          v-for="album in artistAlbums"
          :key="album.name"
          clickable
          v-ripple
          :to="`/artist/${route.params.artistId}/album/${album.name}`"
        >
          <q-item-section avatar>
            <q-icon color="secondary" name="album" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ album.name }}
            </q-item-label>
            <q-item-label caption class="text-grey-6">{{
              album.release
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import artistsData from '../mockArtistsData.json';
import { Album, Artist } from 'src/types';

const route = useRoute();
const artistAlbums = ref<Album[]>([]);

onMounted(() => {
  const artistId = parseInt(route.params.artistId as string);
  const artist = (artistsData as Artist[]).find(
    (artist) => artist.id === artistId
  );
  if (artist) {
    artistAlbums.value = artist.albums;
  }
});
</script>
