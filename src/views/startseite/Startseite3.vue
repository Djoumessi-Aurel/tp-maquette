<template>
  <div class="startseite3">
    <i class="trait">___</i>
    <h1 class="coloree">APP herunterladen</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores,
      voluptatem, quibusdam fuga nobis totam consectetur quisquam quasi quam,
      mollitia quae vero officia atque. Consequuntur fugit ut animi tenetur
      deleniti? Dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="maligne">
      <div class="monImg">
        <img src="@/assets/img/bg11.jpg" alt="une image" />
      </div>
      <div class="monTexte">
        <i class="trait">___</i>
        <h1 class="coloree">Für Senioren und Menschen, die Hilfe suchen</h1>
        <p class="intro">
          Hier geht es zur Senioren APP: <br />Für Android (Bild Google
          Playstore) <br />Für iOS (Bild Apple App Store)
        </p>
        <p class="zonebadge">
          <img src="@/assets/img/google-play-badge.png" alt="une image" />
          <img src="@/assets/img/app-store-badge.png" alt="une image" />
        </p>
        <p class="linkcontainer">
          <router-link to="/" class="coloree">APP herunterladen</router-link>
        </p>
      </div>
    </div>
    <div class="maligne">
      <div class="monTexte">
        <i class="trait">___</i>
        <h1 class="coloree">Für die Arbeiter des Alltags</h1>
        <p class="intro">
          Hier geht es zur Senioren APP: <br />Für Android (Bild Google
          Playstore) <br />Für iOS (Bild Apple App Store)
        </p>
        <p class="zonebadge">
          <img src="@/assets/img/google-play-badge.png" alt="une image" />
          <img src="@/assets/img/app-store-badge.png" alt="une image" />
        </p>
        <p class="linkcontainer">
          <router-link to="/kontaktieren" class="coloree"
            >APP herunterladen</router-link
          >
        </p>
      </div>
      <div class="monImg">
        <img src="@/assets/img/bg12.jpg" alt="une image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Startseite3",
  components: {},
};
</script>

<style lang="css" scoped>
.startseite3 {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 30px;
}
.startseite3 i.trait {
  color: var(--violet2);
  font-weight: bold;
  font-size: xx-large;
}
.startseite3 h1 {
  margin-top: 0px;
  font-size: 1.4rem;
  font-weight: 900;
}

.maligne {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.monImg,
.monTexte {
  flex-basis: 50%;
  min-width: 400px;
  height: 350px; /* pour donner la même taille aux images des box*/
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: rgb(246, 246, 250);
}
.monImg {
  place-items: center;
}
.monImg img {
  height: 130%;
}
p.zonebadge img {
  height: 40px;
  margin-right: 20px;
}
.monTexte {
  padding: 0px 50px;
}
.linkcontainer a {
  background-color: transparent;
  border: 1px solid var(--violet);
  font-weight: bold;
  padding: 8px;
}
.intro,
.zonebadge,
.linkcontainer {
  margin-top: 13px;
}
@media screen and (max-width: 600px) {
  .monImg img {
    height: 100%;
  }
}

@media screen and (max-width: 430px) {
  .monImg {
    display: none;
  }
  .monImg,
  .monTexte { flex-basis: 100%;
    min-width: 0px;
  }
  .monTexte {
  padding: 0px 20px;
  height: fit-content;
}

  h1 + p {
    text-align: justify;
  }
}
</style>