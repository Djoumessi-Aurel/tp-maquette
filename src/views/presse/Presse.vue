<template>
  <div class="presse">
    <div class="topcontent">
        <HeaderBottom :img="require('@/assets/img/bg7.jpg')" :message="'Presse'"/>
        <NavMenu/>
    </div>
    <div class="centralcontent">
      <div class="liens">
        Startseite | <router-link to="/presse">Presse</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from '../../components/HeaderBottom.vue'
import NavMenu from '../../components/NavMenu.vue'

export default {
    name: 'Presse',
    components: {
        HeaderBottom, NavMenu
    }
}
</script>

<style lang="css" scoped>

@media screen and (max-width:600px){

}
</style>