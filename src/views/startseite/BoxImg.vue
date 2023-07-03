<template>
  <div class="boximg">
    <div class="img">
      <img :src="img" alt="une image" />
    </div>
    <div class="texte">
      <span class="coloree">{{ title }}</span
      ><br />
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxImg",
  props: {
    img: { type: String, default: require("@/assets/img/bg1.jpg") },
    title: { type: String, default: "" },
    text: { type: String, default: "" },
  },
};
</script>
<style lang="css" scoped>
.boximg {
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 255, 0.2);
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  min-width: 250px;
  margin-bottom: 15px;
}
.img {
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 250px; /* pour donner la même taille aux images des box*/
  overflow: hidden;
}
.texte {
  padding: 20px;
}
.img img {
  width: 100%;
}

@media screen and (max-width: 430px) {
  .boximg {
    width: 100%;
  }
}
</style>