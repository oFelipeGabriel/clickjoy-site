<template>
    <transition name="slide-fade">
        <div class="inicio-banner menu-inicio" v-if="show">
            <Menu :display="true"  />
        </div>
    </transition>
</template>

<script>

import Menu from '@/components/Menu.vue';
export default {
    name: 'Inicio',
    components: {
        Menu
    },
    data() {
        return {
            show: true
        }
    }
}
</script>

<style lang="scss">
html, body {
    height: 100%;
}
.inicio-banner {
  background-image: url("../assets/header.jpg");
  height: 100%;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
}
.menu-inicio .menu{
    position: absolute;
    bottom: 0;
    background-color: rgba(223, 203, 203, 0.7);
    width: 100%;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
    transform: translate(100%, 0);
}
</style>