<template>
  <div class="navmenu">
    <div class="toggle-menu">
      <div
        class="toggle-button"
      >
      <i class="fa-solid fa-bars-staggered" @click="toggleMenu" id="toggleNavMenuLauncher"></i>
      </div>
      <div
        class="toggle-items"
        v-if="showToggleMenu"
        @click="hideMenu"
        v-click-outside-2="hideMenu"
      >
        <router-link to="/komiidie">Komii die Idee</router-link>
        <router-link to="/mediathek">Mediathek</router-link>
        <router-link to="/partner">Partner</router-link>
        <router-link to="/presse">Presse</router-link>
        <router-link to="/kontaktieren">Kontaktieren Sie Uns</router-link>
      </div>
    </div>
    <div class="leftmenu">
      <router-link to="/komiidie">Komii die Idee</router-link>
      <router-link to="/mediathek">Mediathek</router-link>
      <router-link to="/partner">Partner</router-link>
      <router-link to="/presse">Presse</router-link>
      <router-link to="/kontaktieren">Kontaktieren Sie Uns</router-link>
    </div>
  </div>
</template>
<script>
import createClickOutsideExclude from '../directives'

export default {
  name: "App",
  data() {
    return {
      showToggleMenu: false,
    };
  },
  components: {},
  methods: {
    hideMenu() {
      this.showToggleMenu = false;
    },
    showMenu() {
      this.showToggleMenu = true;
    },
    toggleMenu() {
      if (this.showToggleMenu) this.hideMenu();
      else this.showMenu();
    },
  },
  mounted(){
    createClickOutsideExclude(document.querySelector('#toggleNavMenuLauncher'), 2);
  }
};

</script>
<style lang="css" scoped>
.navmenu {
  position: relative;
  display: flex;
  justify-content: space-between;
  place-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 80px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.39);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  min-height: 30px;
}

.navmenu a.router-link-exact-active, .navmenu a:hover {
  color: var(--violet);
  text-decoration: none;
}

.navmenu .leftmenu {
  display: flex;
  flex-basis: 85%;
  place-items: center;
  justify-content: space-between;
}
.navmenu a {
  font-weight: bold;
  color: gray;
  text-decoration: none;
}

.toggle-menu {
  display: none;
}

@media screen and (max-width: 660px) {
  .navmenu{
    padding-left: 5px;
  }
  .navmenu .leftmenu {
    display: none;
  }
  .toggle-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3px;
    right: 0px;
  }
  .toggle-button {
    user-select: none;
    display: flex;
    place-items: center;
    flex-direction: row-reverse;
    /* min-height: 41px; */
    padding-right:5px;
    font-size: x-large;
    color: black;
  }
   .toggle-button:hover {
    color: var(--violet);
  }
  .toggle-items {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 255, 0.2);
  }
  .toggle-items a {
    display: block;
    min-width: 100px;
    padding: 10px;
    border-bottom: 1px solid rgb(243, 244, 246);
  }
  .toggle-items a:hover {
    color: var(--violet);
  }
}
</style>