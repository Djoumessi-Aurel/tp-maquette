<template>
  <div class="togglemenu">
    <div class="closebutton">
      <i class="fa-light fa-hashtag" @click="closeTopMenu"></i>
    </div>
    <div class="zoneliens" @click="closeTopMenu">
      <router-link to="/startseite">Startseite</router-link>
      <router-link to="/">Über Comii</router-link>
      <router-link to="/komiidie">Komii die Idee</router-link>
      <router-link to="/mediathek">Mediathek</router-link>
      <router-link to="/partner">Partner</router-link>
      <router-link to="/presse">Presse</router-link>
      <router-link to="/kontaktieren">Kontaktieren Sie Uns</router-link>
    </div>
    <div class="social">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-facebook"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToggleMenu",
  methods: {
    closeTopMenu() {
      this.$emit("close_top_menu");
    },
  },
};
</script>
<style lang="css" scoped>
.togglemenu {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  color: white;
  background-color: white;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: var(--violet);
  font-size: larger;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  z-index: 3;
}
.togglemenu .zoneliens{
  display: flex;
  flex-direction: column;
}
.togglemenu .closebutton {
  display: flex;
  flex-direction: row-reverse;
  font-size: xx-large;
}
.togglemenu .social {
  display: flex;
  font-size: large;
}
.togglemenu i {
  padding: 5px;
}
.togglemenu .closebutton i:hover {
  color: brown;
}
.togglemenu a,
.togglemenu .social {
  color: white;
  border-top: 1px solid rgb(243, 244, 246);
  padding: 10px;
}
.togglemenu a:hover {
  border-left: 2px solid rgb(243, 244, 246);
}
</style>