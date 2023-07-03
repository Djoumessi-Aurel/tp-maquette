<template>
  <div class="startseite">
    <div class="topcontent">
      <StartseiteBanner />
    </div>
    <div class="centralcontent">
      <Startseite1 />
    </div>
    <Startseite2 />
    <div class="centralcontent type2">
      <Startseite3 />
      <Startseite4 />
    </div>
  </div>
</template>

<script>
import StartseiteBanner from "./StartseiteBanner.vue";
import Startseite1 from "./Startseite1.vue";
import Startseite2 from "./Startseite2.vue";
import Startseite3 from "./Startseite3.vue";
import Startseite4 from "./Startseite4.vue";

export default {
  name: "Startseite",
  components: {
    StartseiteBanner,
    Startseite1,
    Startseite2,
    Startseite3,
    Startseite4,
  },
};
</script>

<style lang="css" scoped>
.startseite{
  width: 100%;
}

@media screen and (max-width: 600px) {
}
</style>