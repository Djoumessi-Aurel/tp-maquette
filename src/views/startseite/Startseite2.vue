<template>
  <div class="startseite2">
    <i class="trait">______</i>
    <h1>Einige Schlüsselwörter</h1>
    <div class="vforbox">
      <div v-for="(element, index) in tableau" :key="index">
        <div class="title">
          {{ element.title }}
        </div>
        <div class="texte">
          {{ element.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Startseite2",
  components: { },
  data() {
    return {
      tableau: [
        {
          title: "250",
          text: "Seniors inscrits sur Comii",
        },
        {
          title: "120",
          text: "Ordres transmis sur Comii",
        },
        {
          title: "156",
          text: "Aides quotidiennes enregistrées sur Comii",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.startseite2 {
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: var(--violet);
  color: white;
  padding-bottom: 25px;
}
.startseite2 i.trait {
  font-weight: bold;
  font-size: xx-large;
}
.startseite2 h1 {
  margin-top: 0px;
  font-size: 1.4rem;
  font-weight: 900;
}
.title{
  font-size: 4.5rem;
  font-weight: 900;
}
.texte{
  font-size: 1.1rem;
}
.title, .texte {
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
}

.vforbox {
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-around;
  opacity: 0.7;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.vforbox div{
  flex-basis: 30%;
}

@media screen and (max-width: 600px) {
}

@media screen and (max-width: 430px) {
  .vforbox {
    flex-direction: column;
    place-items: center;
  }
  h1+p{
        text-align: justify;
    }
}
</style>