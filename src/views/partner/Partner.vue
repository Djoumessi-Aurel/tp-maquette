<template>
  <div class="partner">
    <div class="topcontent">
        <HeaderBottom :img="require('@/assets/img/bg6.jpg')" :message="'Partner'"/>
        <NavMenu/>
    </div>
    <div class="centralcontent">
      <div class="liens">
        Startseite | <router-link to="/partner">Partner</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from '../../components/HeaderBottom.vue'
import NavMenu from '../../components/NavMenu.vue'

export default {
    name: 'Partner',
    components: {
        HeaderBottom, NavMenu
    }
}
</script>

<style lang="css" scoped>

@media screen and (max-width:600px){

}
</style>