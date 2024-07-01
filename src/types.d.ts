export interface Song {
  name: string;
}

export interface Album {
  name: string;
  release: number;
  music: Song[];
}

export interface Artist {
  id: number;
  name: string;
  albums: Album[];
}
