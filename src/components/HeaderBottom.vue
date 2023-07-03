<template>
  <div class="headerbottom">
    <img :src="img" alt="image de fond">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
    name: 'HeaderBottom',
    props: {
            message: {type: String, default: "Bonjour"},
            img: {type: String, default: require("@/assets/img/bg1.jpg")}
        },
    components: {
    }
}
</script>
<style lang="css" scoped>
.headerbottom{
    position: relative;
    height: 200px;
    display: flex;
    place-items: center;
    overflow: hidden;
}
.headerbottom img{
    width: 100%;
}
.headerbottom h1{
    color: white;
    position: absolute;
    left: 80px;    
    top: 50%;
}
@media screen and (max-width:600px){
.headerbottom h1{
    left: 5px;
}
}
</style>