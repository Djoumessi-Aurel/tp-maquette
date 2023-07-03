<template>
  <div class="startseite4">
    <i class="trait">___</i>
    <h1 class="coloree">Schauen Sie sich unsere Hilfen an</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi tenetur deleniti? Dolor sit amet consectetur.
    </p>
    <div class="lireplus coloree">Mehr sehen <i class="fa-solid fa-circle-arrow-right"></i></div>
    <div class="vforbox">
      <BoxAvis v-for="(element, index) in tableau" :key="index"
       :img="element.img"
       :name="element.name"
       :age="element.age"
       :job="element.job"
       :text="element.text" />
    </div>
  </div>
</template>

<script>
import BoxAvis from './BoxAvis.vue'

export default {
  name: "Startseite4",
  components: {BoxAvis},
  data(){
    return{
        tableau: [
        {
          img: require('@/assets/img/bg13.jpg'),
          name: 'Vincent',
          age: '65 Ans',
          job: 'Hausmann',
          text: 'Lorem Ipsum is simply dummy text the printing and typesetting indus Lorem printing and typesetting.'
        },
        {
          img: require('@/assets/img/bg14.jpg'),
          name: 'Isha',
          age: '25 Ans',
          job: 'Studentin',
          text: 'Lorem Ipsum is simply dummy text the printing and typesetting indus Lorem printing and typesetting.'
        },
        {
          img: require('@/assets/img/bg9.jpg'),
          name: 'Stéphane',
          age: '35 Ans',
          job: 'Pflegehelfer',
          text: 'Lorem Ipsum is simply dummy text the printing and typesetting indus Lorem printing and typesetting.'
        },
        {
          img: require('@/assets/img/bg9.jpg'),
          name: 'Charlotte',
          age: '55 Ans',
          job: 'Freiwillige',
          text: 'Lorem Ipsum is simply dummy text the printing and typesetting indus Lorem printing and typesetting.'
        },
        ]
    }
  }
};
</script>

<style lang="css" scoped>
.startseite4 {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 30px;
}
.startseite4 i.trait {
  color: var(--violet2);
  font-weight: bold;
  font-size: xx-large;
}
.startseite4 h1 {
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
    .vforbox{display: block;
        flex-direction: column;
        place-items: center;
        width: 95%;
    }
    h1+p{
        text-align: justify;
    }
}
</style>