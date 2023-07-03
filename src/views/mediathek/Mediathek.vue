<template>
  <div class="mediathek">
    <div class="topcontent">
        <HeaderBottom :img="require('@/assets/img/bg5.jpg')" :message="'Mediathek'"/>
        <NavMenu/>
    </div>
    <div class="centralcontent">
      <div class="liens">
        Startseite | <router-link to="/mediathek">Mediathek</router-link>
      </div>
      <div class="firstbox">
        <i class="trait">___</i>
    <h1 class="coloree">Mediathek</h1>
    <p class="coloree">
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi tenetur deleniti? Dolor sit amet consectetur
      adipisicing elit.
    </p>
      </div>
      <div class="vforbox">
        <BoxImg v-for="(element, index) in tableau" :key="index"
       :img="element.img"
       :text="element.text"
       :btText="element.btText" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from "../../components/HeaderBottom.vue";
import NavMenu from "../../components/NavMenu.vue";
import BoxImg from './BoxImg.vue'

export default {
  name: "Mediathek",
  components: {
    HeaderBottom,
    NavMenu, BoxImg
  },
  data(){
    return{
        tableau: [
        {
          img: require('@/assets/img/logo1.png'),
          btText: 'Alles Sehen',
          text: 'Lorem ipsum dolor sit consectetur adipisicing elit. Lorem ipsum'
        },
        {
          img: require('@/assets/img/logo2.png'),
          btText: 'Alles Sehen',
          text: 'Lorem ipsum dolor sit consectetur adipisicing elit. Lorem ipsum'
        },
        {
          img: require('@/assets/img/logo3.png'),
          btText: 'Alles Sehen',
          text: 'Lorem ipsum dolor sit consectetur adipisicing elit. Lorem ipsum'
        },
        {
          img: require('@/assets/img/logo4.png'),
          btText: 'Alles Sehen',
          text: 'Lorem ipsum dolor sit consectetur adipisicing elit. Lorem ipsum'
        },
        ]
    }
  },
};
</script>

<style lang="css" scoped>

.mediathek i.trait {
  color: var(--violet2);
  font-weight: bold;
  font-size: xx-large;
}
.mediathek h1 {
  margin-top: 0px; margin-bottom: 22px;
  font-size: 1.4rem;
  font-weight: 900;
}
.firstbox{
  display: flex; flex-direction: column;
  place-items: center;
}
p {
  text-align: center;
}
h1+p{
  padding: 27x 0px;
}
.vforbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 90px;
}


@media screen and (max-width: 600px) {
}
@media screen and (max-width: 430px) {
  p {
    text-align: justify;
  }
  .vforbox{
    margin-bottom: 20px;
  }
}
</style>