<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-9 text-center q-py-sm">
      <q-toolbar>
        <q-toolbar-title class="text-bold text-h4"
          >Quasar Artists List<span class="text-subtitle1 text-grey-5"
            >(by
            <a
              class="text-grey-5 text-bold"
              target="_blank"
              href="https://mi1sh-dev.vercel.app/"
              >mi1sh</a
            >)</span
          ></q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout',
});
</script>
