<template>
  <div class="komiidie">
    <div class="topcontent">
        <HeaderBottom :img="require('@/assets/img/bg4.jpg')" :message="'Komii die Idee'"/>
        <NavMenu/>
    </div>
    <div class="centralcontent">
      <div class="liens">
        Startseite | <router-link to="/komiidie">Komii die Idee</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from '../../components/HeaderBottom.vue'
import NavMenu from '../../components/NavMenu.vue'

export default {
    name: 'komiidie',
    components: {
        HeaderBottom, NavMenu
    }
}
</script>

<style lang="css" scoped>

@media screen and (max-width:600px){

}
</style>