<template>
  <div class="headertop">
    <div class="logo">
      <router-link to="/"
        ><img src="@/assets/img/comii.png" alt="logo comii"
      /></router-link>
    </div>
    <div class="right">
      <div class="contact">
        <i class="fa-solid fa-envelope"></i>
        <div class="contact_text">
          Mailen Sie uns an <br />
          <b>info@comii.com</b>
        </div>
      </div>
      <div class="contact">
        <i class="fa-solid fa-phone"></i>
        <div class="contact_text">
          Rufen Sie uns jet an <br />
          <b>072454657676543</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  components: {},
};
</script>
<style lang="css" scoped>
.headertop,
.right,
.contact {
  display: flex;
  place-items: center;
}
.headertop {
  background-color: white;
  justify-content: space-between;
  font-family: "Times New Roman", Times, serif;
  font-size: small;
  padding-bottom: 5px;
  padding-top: 5px;
}
.headertop .logo img {
  width: 40px;
}
.headertop i {
  font-size: large;
  margin: 8px;
}

.headertop .contact {
  color: rgb(156, 156, 156);
}
.headertop .contact:first-child {
  margin-right: 20px;
}
.headertop .contact b {
  color: black;
}
.headertop .logo {
  padding-left: 80px;
}
.headertop .right {
  padding-right: 80px;
}
@media screen and (max-width: 600px) {
  .headertop .logo img {
    margin-right: 20px;
  }
  .headertop .logo {
    padding-left: 5px;
  }
  .headertop .right {
    padding-right: 5px;
  }
}
</style>