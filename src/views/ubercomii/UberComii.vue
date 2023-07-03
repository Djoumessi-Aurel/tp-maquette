<template>
  <div class="ubercomii">
    <div class="topcontent">
        <HeaderBottom :img="require('@/assets/img/bg3.jpg')" :message="'Über Comii'"/>
        <NavMenu/>
    </div>
    <div class="centralcontent">
      <div class="liens">
        Startseite | <router-link to="/">Über Comii</router-link>
      </div>
      <Uber1/>
      <Uber2/>
      <Uber3/>
    </div>
  </div>
</template>

<script>
import HeaderBottom from '../../components/HeaderBottom.vue'
import NavMenu from '../../components/NavMenu.vue'
import Uber1 from './Uber1.vue'
import Uber2 from './Uber2.vue'
import Uber3 from './Uber3.vue'

export default {
    name: 'UberComii',
    components: {
        HeaderBottom, NavMenu, Uber1, Uber2, Uber3
    }
}
</script>

<style lang="css" scoped>

@media screen and (max-width:600px){

}
</style>