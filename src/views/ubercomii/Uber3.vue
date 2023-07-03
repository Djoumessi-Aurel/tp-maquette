<template>
  <div class="uber3">
    <i class="trait">______</i>
    <h1>Transparente Preise</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores,
      voluptatem, quibusdam fuga nobis totam consectetur quisquam quasi quam,
      mollitia quae vero officia atque. Consequuntur fugit ut animi tenetur
      deleniti? Dolor sit amet consectetur adipisicing elit. Facere maiores,
      voluptatem, quibusdam fuga nobis totam consectetur quisquam quasi quam,
      mollitia quae vero officia atque. Consequuntur fugit ut animi
    </p>
    <div class="lireplus">Lire plus <i class="fa-solid fa-circle-arrow-right"></i></div>
    <div class="vforbox">
      <div class="verticalbox" v-for="(element, index) in tableau" :key="index">
        <div class="img">
          <img :src="element.img" alt="une image">
        </div>
        <div class="title">
          {{element.title}}
        </div>
        <ul>
          <li v-for="(item, pos) in element.liste" :key="pos">
            {{item}}
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Uber3",
  components: {},
  data() {
    return {
      tableau: [
        {
          img: require('@/assets/img/img1.jpeg'),
          title: 'Comii Basic',
          liste: ['Adkljdodi  Marlkjlddsdsf', 'Adkljdodi  Marlkjlddsdsf',
          'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl', 'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl &lt;b&gt;(24€/stunde)</b>',
          'sdlfmkqj <b>2.49€/helfende person</b> dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl', 'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl']
        },
        {
          img: require('@/assets/img/img2.jpg'),
          title: 'Comii Silver',
          liste: ['Adkljdodi  Marlkjlddsdsf', 'Adkljdodi  Marlkjlddsdsf',
          'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl', 'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl <b>(24€/stunde)</b>',
          'sdlfmkqj <b>2.49€/helfende person</b> dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl', 'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl']
        },
        {
          img: require('@/assets/img/img3.jpg'),
          title: 'Comii Platinum',
          liste: ['Adkljdodi  Marlkjlddsdsf', 'Adkljdodi  Marlkjlddsdsf',
          'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl', 'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl <b>(24€/stunde)</b>',
          'sdlfmkqj <b>2.49€/helfende person</b> dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl', 'sdlfmkqj dslkqfjsf  lkjmsdkfj q lkjsdfmqjsl']
        }
        ],
    };
  },
};
</script>

<style lang="css" scoped>
.uber3{
  display: flex;
  flex-direction: column;
  place-items: center;
}
.uber3 i.trait{
  color: var(--violet2);
  font-weight: bold;
  font-size: xx-large;
}
p{
  text-align: center;
}
.vforbox{
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.verticalbox{
  display: flex;
  flex-direction: column;
  place-items: center;
  flex-basis: 32%;
  border: 1px solid rgba(128, 128, 128, 0.425);
}
.img{
  /* flex-basis: 100vw; */
  display: flex;
  place-items: center;
  overflow: hidden;
}
.img img{
  width: 100%;
  height: 100%;
}
.title{
  color: white;
  background-color: var(--violet2);
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
  padding-top: 3px;
  padding-bottom: 3px;
}
.verticalbox:nth-child(2) .title{
  background-color: var(--violet);
}

ul {
  list-style: none;
  padding: 0;
}
li {
  padding-left: 1.3em;
  padding-top: 4px;
  padding-bottom: 4px;
}
li:before {
  content: "\003e"; /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1em; /* same as padding-left set on li */
  width: 1em; /* same as padding-left set on li */
  font-size: 0.7em;
}
h1{  
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.5rem;
}
h1, .lireplus{
  color: var(--violet);
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
/* Gestion du responsive */

@media screen and (max-width: 800px) {
  .vforbox{
  flex-direction:column;
  justify-content: flex-start;
}
.verticalbox{
  margin-bottom: 20px;
}
.img{
  max-height: 210px;
}

}

@media screen and (max-width: 430px) {
p{
  text-align: justify;
}

}
</style>