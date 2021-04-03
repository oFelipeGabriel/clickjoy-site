<template>
    <div class="gallery">
      <div class="gallery-panel"
           v-for="photo in photos"
           :key="photo.id">
        <div @click="selectPhoto(photo)">
            <img :src="thumbUrl(photo.src)">
        </div>        
      </div>
      <Photo v-if="selectedPhoto!==null" :photo="selectedPhoto" :tag="tag"  @onClose="selectedPhoto=null" />
    </div>
  </template>

<script>
  import phs from '@/photos.json';
  import Photo from './Photo.vue'
  export default {
    name: 'Gallery',
    components: {
      Photo
    },
    data() {
      return {
        photos: [],
        selectedPhoto: null
      };
    },
    methods: {
      thumbUrl(filename) {
        return require(`../${filename}`);
      },
      filtrar(tag) {
        let filter = phs;
        if (tag) {
          filter = phs.filter(p => p.tag.toLowerCase()===tag.toLowerCase() )
        }
        this.photos = filter
      },
      selectPhoto(photo) {
        this.selectedPhoto = photo
      }
    },
    computed:{
      isMobile(){
        return window.innerWidth<500
      },
      tag() {
        return this.$route.params.tag
      }
    },
    mounted() {
      const tag = this.$route.params.tag;
      this.filtrar(tag)
    },
    watch: {
        tag() {
          this.filtrar(this.tag)
        }
    }
  };
</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 2rem auto;
  padding: 0 12vw 2rem;
}
.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
@media only screen and (max-width: 600px) {
  .gallery-panel{
    display: block;
    width: 75vw;
  }
}
</style>