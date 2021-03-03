<template>
  <div>
    <div class="header">
      <div class="bars-icon">
        <font-awesome-icon icon="bars" @click="toggleMenu(true)"/>   
      </div>
      <img src="../assets/header.jpg" alt="">
      <Menu :display="showMenu" @toggleMenu="toggleMenu"/>
    </div>
    
    <Gallery />
  </div>  
</template>
<script>
import Gallery from '@/components/Gallery.vue';
import Menu from '@/components/Menu.vue';
export default {
  name: 'home',
  components: {
    Gallery,
    Menu
  },
  data() {
    return {
      windowHeight: window.innerWidth,
      showMenu: window.innerWidth>=595
    }
  },
  methods: {
    toggleMenu(display) {
      this.showMenu = display;
    },
    onResize() {
      this.windowHeight = window.innerWidth
      this.showMenu = window.innerWidth>=595
      this.toggleMenu(this.showMenu)
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  }
};
</script>

<style lang="scss">
.bars-icon{
  display: none;
}
.header{
  width: 100%;
  background-color: #f7f1ed;
}
.header img{
  width: 94%;
  object-fit: cover;
  margin: 0 3%;
  height: 22vw;
}
@media only screen and (max-width: 600px) {
  .bars-icon{
    display: block;
    font-size: 1.6rem;
    position: fixed;
    opacity: .85;
    background-color: $clam;
    color: #f7f1ed;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #f7f1ed;
  }
  .header img{
    margin-top: 2rem;
  }
}
</style>