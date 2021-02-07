<template>
  <div>
    <div class="header">
      <img src="../assets/header.jpg" alt="">
      <div class="list-menu">
        <ul>
          <li>Externos</li>
          <li>Internos</li>
          <li>Sobre mim</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
    <Gallery />
  </div>  
</template>
<script>
import Gallery from '@/components/Gallery.vue';
export default {
  name: 'home',
  components: {
    Gallery,
  },
};
</script>

<style>
/* Clam Shell
#D1BBB0

Rock
#4C3730

Roman Coffee
#825E4A

Nevada
#576163 */
  @import url('https://fonts.googleapis.com/css2?family=Tangerine');
.header{
  width: 100%;
}
.header img{
  width: 94%;
  object-fit: cover;
  margin: 0 3%;
  height: 22vw;
}
.header .list-menu{
  display: inline-flex;
  list-style: none;
  width:100%;
  
}
.header .list-menu ul{
  display: flex;
  list-style: none;
  margin: 0 auto;
  border-top: 1px solid #D1BBB0;
  border-bottom: 1px solid #D1BBB0;
  width: 94%;
}
.header .list-menu li{
  color: #825E4A;
  padding: 0 1rem;
  line-height: 3rem;
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-family: 'Tangerine';
  font-size: 2rem;
}
.header .list-menu li:hover{
  background-color: #D1BBB0;
  color: #f7f1ed;
}
</style>