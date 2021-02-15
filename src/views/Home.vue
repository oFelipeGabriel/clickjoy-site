<template>
  <div>
    <div class="header">
      <img src="../assets/header.jpg" alt="">
      <div class="gradient-border"></div>
      <div class="list-menu">
        <ul>
          <li>Externos</li>
          <li>Internos</li>
          <li>Sobre mim</li>
          <li>Contato</li>
        </ul>
      </div>
      <div class="gradient-border"></div>
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

<style lang="scss">
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
.header .gradient-border{
  background: linear-gradient(90deg, rgba(255,255,255,1) 13%, rgba(209,187,176,1) 48%, rgba(255,255,255,1) 87%);
  height: 3px;
  width: 100%;
}
.header .list-menu ul{
  display: flex;
  list-style: none;
  margin: 0 auto;
  /* border-top: 1px solid #D1BBB0;
  border-bottom: 1px solid #D1BBB0; */
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
  background-color: $clam;
  color: #f7f1ed;
}
@media only screen and (max-width: 600px) {
  .header .list-menu ul{
    display: block;
    padding: 0;
  }
}
</style>