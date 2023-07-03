<template>
  <div class="boxavis">
    <div class="img">
      <img :src="img" alt="une image" />
    </div>
    <div class="texte">
      <div class="nom">
        <span class="name">{{ name }}</span>
        <span class="age">| {{ age }}</span>
      </div>
      <div class="job">
        {{ job }}
      </div>
      <div class="montexte">
        {{ text }}
      </div>
      <div class="etoiles">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i>
      </div>
      <p class="linkcontainer">
        <router-link to="/kontaktieren" class="coloree"
          >Mehr erfahren</router-link
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxAvis",
  props: {
    img: { type: String, default: require("@/assets/img/bg1.jpg") },
    name: { type: String, default: "" },
    age: { type: String, default: "30 Ans" },
    job: { type: String, default: "Studentin" },
    text: { type: String, default: "" },
  },
};
</script>
<style lang="css" scoped>
.boxavis {
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 255, 0.2);
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
  min-width: 200px;
  margin-bottom: 15px;
}
.img {
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 200px; /* pour donner la même taille aux images des box*/
  overflow: hidden;
}
.texte {
  padding: 20px;
}
.img img {
  width: 100%;
}

.nom {
  font-weight: 900;
  color: var(--violet);
  font-size: 1.3rem;
}
.age {
  color: var(--violet2);
}
.job {
  font-style: italic;
  color: var(--violet2);
}
.montexte, .etoiles{
  margin-top: 10px;
}
.linkcontainer {
  margin-top: 20px;
}
.etoiles{
text-align: right; padding-right: 25px;
}
.etoiles i{
    color: rgb(255, 230, 0);
}
.etoiles i:last-child{
    color: gray;
}
.linkcontainer{
    text-align: center;
}
.linkcontainer a {
  background-color: transparent;
  border: 1px solid var(--violet);
  font-weight: bold;
  padding: 8px;
}

@media screen and (max-width: 430px) {
  .boxavis {
  width: 100%;
}
}
</style>