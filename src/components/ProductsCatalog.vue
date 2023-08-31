<template>
  <div>
    <h2>Buy what you want</h2>
    <div class="row">
      <div class="col-9">
        <div class="grid-container-3">
          <product-grid-item v-for="product of products" :product="product" :key="product.id"></product-grid-item>
        </div>
      </div>
      <div class="col-3">
        <h2>Your cart</h2>
        <user-cart></user-cart>
      </div>

    </div>
  </div>
</template>

<script>
import ProductGridItem from "@/components/ProductGridItem";
import UserCart from "@/components/UserCart.vue";

export default {
  components: {
    UserCart,
    ProductGridItem
  },

  name: "ProductsCatalog",

  computed: {
    products() {
      return this.$store.state.allProducts;
    }
  }
}
</script>

<style scoped>

</style>