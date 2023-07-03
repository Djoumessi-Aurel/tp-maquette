<template>
  <div class="uber1">
    <i class="trait">___</i>
    <h1 class="coloree">Über Comii</h1>
    <p>
      <span class="coloree bold">Lorem</span> ipsum dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi tenetur deleniti? Dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi
    </p>
    <p>
      Consequuntur fugit ut animi tenetur deleniti? Dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
    </p>
    <p class="coloree">
      Consequuntur fugit ut animi tenetur deleniti? Dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi
    </p>
    <p>
      Consequuntur fugit ut animi tenetur deleniti? Dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
      Consequuntur fugit ut animi. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Facere maiores, voluptatem, quibusdam fuga nobis totam
      consectetur quisquam quasi quam, mollitia quae vero officia atque.
    </p>
  </div>
</template>

<script>
export default {
  name: "Uber1",
  components: {},
};
</script>

<style lang="css" scoped>
.uber1 {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 30px;
}
.uber1 i.trait {
  color: var(--violet2);
  font-weight: bold;
  font-size: xx-large;
}
.uber1 h1 {
  margin-top: 0px;
  font-size: 1.4rem;
  font-weight: 900;
}
.uber1 .coloree {
  color: var(--violet);
}
p{
  margin-top: 13px;
  margin-bottom: 13px;
}

@media screen and (max-width: 600px) {
}
</style>