<template>
  <div class="boximg">
    <div class="img">
      <img :src="img" alt="une image" />
    </div>
    <div class="texte">
      {{ text }}
    </div>
    <p class="linkcontainer">
      <router-link to="/startseite" class="coloree"
        >{{btText}}</router-link
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "BoxImg",
  props: {
    img: { type: String, default: require("@/assets/img/bg1.jpg") },
    text: { type: String, default: "" },
    btText: { type: String, default: "" },
  },
};
</script>
<style lang="css" scoped>
.boximg {
  /* box-shadow: 1px 1px 2px 1px rgba(0, 0, 255, 0.2); */
  display: flex;
  flex-direction: column;
  place-items: center;
  /* flex-basis: 30%; */
  width: 156px;
  margin-bottom: 15px;
  margin: 0px 10px;
}
.img {
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 156px; /* pour donner la même taille aux images des box*/
  overflow: hidden;
}
.img img {
  width: 100%;
}
.texte {
  padding: 5px; text-align: center;
}

.linkcontainer {
  margin-top: 20px;
}
.linkcontainer a {
  background-color: transparent;
  border: 1px solid var(--violet);
  font-weight: bold;
  padding: 8px;
}

@media screen and (max-width: 430px) {
  .boximg {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 255, 0.2);
    margin-bottom: 20px;
  }
}
</style>