<template>
  <div>
    <h2>Buy what you want</h2>
    <div class="row">

      <product-grid-item v-for="product of products" :product="product" :key="product.id"></product-grid-item>

    </div>
  </div>
</template>

<script>
import ProductGridItem from "@/components/ProductGridItem";
export default {
  components:{
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