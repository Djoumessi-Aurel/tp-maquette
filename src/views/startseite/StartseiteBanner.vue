<template>
  <div class="startseitebanner">
    <img
      src="@/assets/img/startseite-banner.jpg"
      alt="image de fond"
      class="imgfond"
    />
    <div class="contenu">
      <div class="titre">
        WillKommen bei Comii<br />
        Click! Klicken Sie auf die<br />
        Schaltfläche! Hilfe kommt...
      </div>
      <div class="texte">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores,
        voluptatem, quibusdam fuga nobis totam consectetur quisquam quasi quam,
        mollitia quae vero officia atque.
      </div>
      <div class="bg-violet">
        herunterladen APP Für Senioren <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="img">
        <img src="@/assets/img/google-play-badge.png" alt="une image" />
        <img src="@/assets/img/app-store-badge.png" alt="une image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StartseiteBanner",
};
</script>
<style lang="css" scoped>
.startseitebanner {
  position: relative;
  height: 400px;
  display: flex;
  place-items: center;
  overflow: hidden;
  color: black;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.startseitebanner img.imgfond {
  width: 100%; min-height: 400px;
}
.startseitebanner .contenu {
  position: absolute;
  left: 8px;
  top: 0px;
  padding-left: 60px;
  padding-top: 60px;
  max-width: 460px;
  display: flex;
  flex-direction: column;
}
.contenu div {
  margin-bottom: 10px;
  padding: 5px;
}
.contenu .titre {
  font-weight: bold;
  font-size: 1.4rem;
  border-left: 3px solid var(--violet);
}
.bg-violet {
  background-color: var(--violet);
  color: white;
  width: 250px;
}
.img img {height: 35px;
  margin-right: 20px;
}


@media screen and (max-width: 700px) {
.startseitebanner img.imgfond {
  width: 120%;
}
}
@media screen and (max-width: 550px) {
.startseitebanner img.imgfond {
  width: 150%;
}
.startseitebanner .contenu {
  padding-left: 30px;
  padding-top: 30px;
}
}
@media screen and (max-width: 430px) {
.startseitebanner img.imgfond {
  width: 180%;
}
.startseitebanner .contenu {
  padding-left: 0px;
  padding-top: 15px;
}
}
</style>