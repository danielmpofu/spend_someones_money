<template>
  <div
      style="width: 18rem"
      class="card mx-2 my-2">
    <img :src="product.picture" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p>{{ product.price }}</p>
      <div class="row">
        <div class="col">
          <button @click="add" class="btn btn-outline-primary">Buy</button>
        </div>
        <div class="col">
          <input
              type="number"
              min="0"
              id="text"

              v-model="productQty"
              class="form-control">
        </div>
        <div class="col">
          <button @click="deduct" class="btn btn-outline-danger">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGridItem",
  props: ['product'],
  data() {
    return {
      productQty: 0
    }
  },
  methods: {
    calculate(){
      let z = document.getElementById("text");
      console .log(z)
    },
    add() {
      this.productQty += 1;
      let tot = this.productQty * this.product.price;
      this.$store.commit("buyItems",tot);

    },
    deduct() {

      if (this.productQty !== 0) {

        let tot = this.productQty * this.product.price;
        this.$store.commit("sellItems",tot);
        this.productQty -= 1;
      } else {
        this.productQty = 0;
      }


    }
  }
}
</script>

<style scoped>

</style>