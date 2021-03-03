<template>
  <div class="menu" v-if="display">         
    <div class="gradient-border"></div>
    <div class="list-menu">
      <div class="close-menu" @click="toggleMenu">
        <font-awesome-icon icon="times-circle" />
      </div>   
      <ul>
        <li @click="$router.replace({ path: '', query: { tag: 'Externo' }})">Externos</li>
        <li>Internos</li>
        <li>Sobre mim</li>
        <li>Contato</li>
      </ul>
    </div>
    <div class="gradient-border"></div>
  </div>
</template>

<script>
export default {
  name: 'menuBar',
  props: ['display'],
  data() {
    return {
      showMenu: true
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu', !this.display)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tangerine');

.close-menu{
  display: none;
}
.menu .list-menu{
  display: inline-flex;
  list-style: none;
  width:100%;  
}

.menu .gradient-border{
  background: linear-gradient(90deg, #f7f1ed 13%, rgba(209,187,176,1) 48%, #f7f1ed 87%);
  height: 3px;
  width: 100%;
}
.menu .list-menu ul{
  display: flex;
  list-style: none;
  margin: 0 auto;
  width: 75%;
  padding-inline-start: 0;
}
.menu .list-menu li{
  color: #825E4A;
  padding: 0 1rem;
  line-height: 3rem;
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-weight: 500;
  font-family: 'Tangerine';
  font-size: 1.7rem;
  transition: background-color .6s;
}
.menu .list-menu li:hover{
  background-color: $clam;
  color: #f7f1ed;
}
@media only screen and (max-width: 597px) {
  .close-menu{
    display: block;
    font-size: 2rem;
    color: #f7f1ed;
    position: absolute;
    top: 1rem;
    right: 3rem;
  }
  .menu{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 3rem 5%;
    background-color: rgba(10,0,0,.7);
    .gradient-border{
      display: none;
    }
    .list-menu{
      background-color: #f7f1ed;
      width: 90%;
      border-radius: 20px;
    }
  }
  .menu .list-menu ul{
    display: block;
    padding: 0;
  }
}
</style>
