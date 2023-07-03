<template>
  <div class="headermiddle">
    <transition name="slide">
      <ToggleMenu v-if="topMenuVisible"  @close_top_menu="closeTopMenu" 
      v-click-outside-1="closeTopMenu2"/>
    </transition>
    <div class="bars">
      <i class="fa-solid fa-bars" @click="showTopMenu" id="toggleMenuLauncher"></i>
    </div>
    <div class="right">
      <div class="texte">
        <div class="contact_text">
          Französisch
        </div>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="social">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-facebook"></i>        
      </div>
    </div>
  </div>
</template>

<script>
import ToggleMenu from './ToggleMenu.vue'
import createClickOutsideExclude from '../directives'

export default {
    name: 'HeaderMiddle',
    data(){
      return {
        topMenuVisible: false
      }
    },
    components: {
      ToggleMenu
    },
    methods:{
      closeTopMenu(){
        this.topMenuVisible = false;
      },
      showTopMenu(){
        this.topMenuVisible = true;
      },
      closeTopMenu2(){
        if(this.topMenuVisible) this.closeTopMenu();
      }

    },
    mounted(){
    createClickOutsideExclude(document.querySelector('#toggleMenuLauncher'), 1);
  }
}
</script>
<style lang="css" scoped>
.headermiddle, .right, .texte, .social{
    display: flex;
    place-items: center;
}
.headermiddle{
  position: relative;
    justify-content: space-between;
    /* font-family: 'Times New Roman', Times, serif; */
    font-size: small;
    background-color: var(--violet);
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
}
.headermiddle .bars i{
    font-size: xx-large;
}
.headermiddle i{
    font-size:medium;
    margin: 8px;
}

.headermiddle .texte{
    margin-right: 20px;
}

.headermiddle .bars{
    padding-left: 80px;    
}
.headermiddle .right{
    padding-right: 80px;
    margin: 5px;
}

@media screen and (max-width:600px){
   .headermiddle .bars i{
    margin-right: 20px;
} 
.headermiddle .bars{
    padding-left: 5px;    
}
.headermiddle .right{
    padding-right: 5px;
}
}

/* Transitions */
.slide-enter-active {
  transition: all 1s ease;
}
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter, .slide-leave-to{
  transform: translateX(-300px);
}

</style>