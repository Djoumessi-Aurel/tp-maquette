<template>
  <div class="startseite1">
    <i class="trait">___</i>
    <h1 class="coloree">Was wir tun</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi tenetur deleniti? Dolor sit amet consectetur
      adipisicing elit.
    </p>
    <div class="lireplus coloree">Lire plus <i class="fa-solid fa-circle-arrow-right"></i></div>
    <div class="vforbox">
      <BoxImg v-for="(element, index) in tableau" :key="index"
       :img="element.img"
       :title="element.title"
       :text="element.text" />
    </div>
  </div>
</template>

<script>
import BoxImg from './BoxImg.vue'

export default {
  name: "Startseite1",
  components: {BoxImg},
  data(){
    return{
        tableau: [
        {
          img: require('@/assets/img/bg9.jpg'),
          title: 'Im Alltag Gutes tun spontan und wenn du Zeit has!',
          text: 'Ob als Freiwillige/r order beruflich...'
        },
        {
          img: require('@/assets/img/bg8.jpg'),
          title: 'Melde jetzt dein Nachbarschaftsnetzwerk an und unterstütze Senioren/Hilfescuchende.',
          text: '(Wir kümmern uns um die Organisation & den Ablauf)'
        },
        {
          img: require('@/assets/img/bg10.jpg'),
          title: 'Comii macht then das Leben leicheter',
          text: 'Als Senior order als jemand, der Hilfe sucht, ist es nur einen Klick entfernt, um Hilfe...'
        },
        ]
    }
  }
};
</script>

<style lang="css" scoped>
.startseite1 {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 30px;
}
.startseite1 i.trait {
  color: var(--violet2);
  font-weight: bold;
  font-size: xx-large;
}
.startseite1 h1 {
  margin-top: 0px;
  font-size: 1.4rem;
  font-weight: 900;
}
p{
  margin-top: 13px;
  margin-bottom: 13px;
}
h1+p{
    text-align: center;
}
.lireplus{
  user-select: none;
  cursor: pointer;
  margin-bottom: 25px;
}
.lireplus:hover{
 color:brown;
}
.lireplus i{
  padding-left: 5px;
}
.vforbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

@media screen and (max-width: 600px) {
}

@media screen and (max-width: 430px) {
    .vforbox{
        flex-direction: column;
        place-items: center;
        width: 95%;
    }
    h1+p{
        text-align: justify;
    }
}
</style>