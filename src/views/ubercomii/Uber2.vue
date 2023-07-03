<template>
  <div class="uber2">
    <div class="img">
      <img src="@/assets/img/img4.jpg" alt="une image" />
    </div>
    <div class="content">
      <i class="trait">___</i>
      <h1 class="coloree">Unser Motto: Comii - Unslkdhsk dkihkjdsh</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        voluptatibus, dicta dolorum labore rerum incidunt corporis corrupti fuga
        sint praesentium exercitationem earum vel excepturi esse, autem pariatur
        provident perspiciatis vitae. Necessitatibus voluptatibus, dicta dolorum
        labore rerum incidunt corporis corrupti fuga sint praesentium
        exercitationem earum vel excepturi esse
      </p>
      <p class="coloree">
        Necessitatibus voluptatibus, dicta dolorum labore rerum incidunt
        corporis corrupti fuga sint praesentium exercitationem earum vel
        excepturi esse, autem pariatur provident perspiciatis vitae.
      </p>
      <p class="linkcontainer">
        <router-link to="/kontaktieren" class="coloree"
          >Kontaktieren Sie Uns</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Uber2",
  components: {},
};
</script>

<style lang="css" scoped>
.uber2 {
  height: 400px;
  display: flex;
}
.uber2 h1 {
  margin-top: 0px;
  font-size: 1.2rem;
}
.uber2 i.trait {
  color: var(--violet2);
  font-weight: bold;
  font-size: xx-large;
}
.img {
  display: flex;
  height: 100%;
  width: 400px;
  place-items: center;
  overflow: hidden;
}
.content {
  flex-basis: 70%;
  background-color: rgb(246, 246, 250);
  padding-left: 20px;
  padding-bottom: 10px;
}
.img img {
  width: 120%;
}
.linkcontainer {
  margin-top: 40px;
}
.linkcontainer a {
  background-color: transparent;
  border: 1px solid var(--violet);
  padding: 8px;
}

@media screen and (max-width: 950px) {
  .uber2 {
    height: fit-content;
  }
  .img {
    display: none;
  }
  .content {
    flex-basis: 100%;
  }
}

@media screen and (max-width: 600px) {
}
</style>