<template>
  <div class="kontaktieren">
    <div class="topcontent">
        <HeaderBottom :img="require('@/assets/img/bg1.jpg')" :message="'Kontaktieren'"/>
        <NavMenu/>
    </div>
    <div class="centralcontent">
      <div class="liens">
        Startseite | <router-link to="/kontaktieren">Kontaktieren</router-link>
      </div>
      <div class="h-100">
        <div class="container-fluid h-100">
          <div class="row h-100 align-items-center">
            <div class="col-md-3 h-100 vue-bg d-flex justify-content-center align-items-center">
              <img src="@/assets/logo.png" alt="Logo de Vue js" width="100">
            </div>
            <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
              <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
                <SignupForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from '../../components/HeaderBottom.vue'
import NavMenu from '../../components/NavMenu.vue'
import SignupForm from './SignupForm.vue'

export default {
    name: 'Kontaktieren',
    components: {
        HeaderBottom, NavMenu, SignupForm
    }
}
</script>

<style lang="css" scoped>
/* .formparent{
  display: flex;
}
.formlogo{
  flex-basis: 20%;
}
.form{
  flex-basis: 80%;
} */
.h-100{
  height: 100vh !important;
}
.vue-bg{
  background: #bce5d0;
}
@media screen and (max-width:600px){

}
</style>