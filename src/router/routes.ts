import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ArtistsPage.vue'),
      },
      {
        path: 'artist/:artistId',
        component: () => import('pages/AlbumsPage.vue'),
      },
      {
        path: 'artist/:artistId/album/:albumId',
        component: () => import('pages/SongsPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
