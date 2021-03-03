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
  import photos from '@/photos.json';
  export default {
    name: 'Gallery',
    data() {
      return {
        photos,
      };
    },
    methods: {
      thumbUrl(filename) {
        return require(`../${filename}`);
      },
    },
    mounted() {
    const query = Object.assign({}, this.$route.query);
    console.log("query", query)
    },
    computed:{
      isMobile(){
        return window.innerWidth<500
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
  margin: 5rem auto;
  padding: 0 12vw;
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