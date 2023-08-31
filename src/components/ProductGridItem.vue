<template>

  <figure class="card">
    <img class="figure-img" :src="product.picture" :alt="product.name">
    <div class="card-body">
      <h3> {{ product.name }} </h3>
      <p>Net Worthy: £{{ product.price }}.00</p>
      <div class="row">
        <div class="col">
          <button @click="add" class="btn btn-outline-primary">Buy</button>
        </div>
        <div class="col">
          <input
              type="number"
              min="0"
              id="text"
              disabled
              v-model="productQty"
              class="form-control">
        </div>
        <div class="col">
          <button @click="deduct"
                  class="btn btn-outline-danger">Sell
          </button>
        </div>
      </div>
    </div>
  </figure>

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
  computed: {
    amountBalanceAvailable() {
      return this.$store.state.amountBalanceAvailable;
    }
  },

  methods: {
    calculate() {
      let z = document.getElementById("text");
      console.log(z)
    },
    add() {
      let amountBalanceAvailable = this.amountBalanceAvailable;
      if (amountBalanceAvailable >= this.product.price) {
        this.productQty = this.productQty + 1;
        let tot = this.productQty * this.product.price;
        this.$store.commit("buyItems", tot);
      }
      console.log(amountBalanceAvailable);

    },

    deduct() {
      if (this.productQty !== 0) {
        let tot = this.productQty * this.product.price;
        this.$store.commit("sellItems", tot);
        this.productQty = this.productQty - 1;
      } else {
        this.productQty = 0;
      }
    }
  }
}
</script>

<style scoped>

</style>