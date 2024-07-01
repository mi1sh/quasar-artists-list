<template>
  <q-page class="q-pa-xl">
    <div class="wrapper q-mx-auto">
      <div class="flex justify-between">
        <q-btn
          icon="refresh"
          class="text-white q-mb-md"
          outline
          @click="$router.back()"
          >Back to Albums</q-btn
        >
        <q-btn
          icon="add"
          class="text-white q-mb-md"
          outline
          @click="showAddSongForm = true"
          >Add song</q-btn
        >
      </div>
      <q-list bordered class="bg-primary q-mb-md rounded-borders shadow-5">
        <q-item v-for="song in albumSongs" :key="song.name">
          <q-item-section avatar>
            <q-icon color="secondary" name="mic" />
          </q-item-section>
          <q-item-section class="text-grey-4">{{ song.name }}</q-item-section>
        </q-item>
      </q-list>
      <q-dialog v-model="showAddSongForm">
        <q-card class="bg-primary q-pa-lg">
          <q-card-section>
            <div class="text-h6">Add a new song</div>
          </q-card-section>
          <q-card-section>
            <q-input
              v-model="newSongName"
              label-color="secondary"
              color="secondary"
              label="Song Name"
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn icon="add" flat label="Add" dense @click="addSong" />
            <q-btn icon="cancel" flat label="Cancel" dense v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import artistsData from '../mockArtistsData.json';
import { Artist, Song } from 'src/types';

const route = useRoute();
const albumSongs = ref<Song[]>([]);
const showAddSongForm = ref(false);
const newSongName = ref('');

const loadAlbumSongs = () => {
  const artistId = parseInt(route.params.artistId as string);
  const albumName = route.params.albumId as string;
  const storedData = localStorage.getItem('artistsData');
  const data: Artist[] = storedData
    ? JSON.parse(storedData)
    : (artistsData as Artist[]);

  const artist = data.find((artist) => artist.id === artistId);
  if (artist) {
    const album = artist.albums.find((album) => album.name === albumName);
    if (album) {
      albumSongs.value = album.music;
    }
  }
};

const addSong = () => {
  if (newSongName.value.trim() !== '') {
    const artistId = parseInt(route.params.artistId as string);
    const albumName = route.params.albumId as string;
    const storedData = localStorage.getItem('artistsData');
    const data: Artist[] = storedData
      ? JSON.parse(storedData)
      : (artistsData as Artist[]);

    const artist = data.find((artist) => artist.id === artistId);
    if (artist) {
      const album = artist.albums.find((album) => album.name === albumName);
      if (album) {
        album.music.push({ name: newSongName.value });
        localStorage.setItem('artistsData', JSON.stringify(data));
        albumSongs.value = [...album.music];
        console.log('song added');
        newSongName.value = '';
        showAddSongForm.value = false;
      }
    }
  }
};

onMounted(loadAlbumSongs);
watch(route, loadAlbumSongs);
</script>
