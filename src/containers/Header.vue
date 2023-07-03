<template>
    <div class="header">
        <HeaderTop/>
        <HeaderMiddle/>
    </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop.vue'
import HeaderMiddle from '@/components/HeaderMiddle.vue'

export default {
    name: 'Header',
    components: {
    HeaderTop,
    HeaderMiddle
    }
}
</script>
<style lang="css" scoped>
.header{
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10;
    width: 100%;
}

/*
.header .logo{
    display: flex;
    place-items: center;
    margin-right: 10px;
    /* padding-right: 15px; */
 /*   font-size: large;
    border-right: 1px solid rgb(68, 68, 76);
    flex-basis: 15%;
    user-select: none;
}
.header .logo img{
    width: 30px;
}

.header .navmenu{
    flex-basis: 85%;
} */

</style>