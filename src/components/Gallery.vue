<template>
    <div class="gallery">
      <div class="gallery-panel"
           v-for="photo in photos"
           :key="photo.id">
        <router-link :to="`/photo/${photo.id}`">
            <img :src="thumbUrl(photo.src)">
        </router-link>        
      </div>
    </div>
  </template>

<script>
  import phs from '@/photos.json';
  export default {
    name: 'Gallery',
    props: ['tag'],
    data() {
      return {
        photos: [],
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
      }
    },
    computed:{
      isMobile(){
        return window.innerWidth<500
      }
    },
    mounted() {
      const tag = this.$route.params.id;
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