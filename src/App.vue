<template>
  <div>
    <app-nav></app-nav>

    <div class="container">
      <div  v-if="!isBillionManSelected">
        <choose-billionnaire></choose-billionnaire>
      </div>

      <div v-if="isBillionManSelected">
        <catalog-header class="mt-5 mb-5"></catalog-header>
        <hr>
        <products-catalog></products-catalog>
      </div>


    </div>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
import ChooseBillionnaire from "@/components/ChooseBillionnaire";
import CatalogHeader from "@/components/CatalogHeader";
import ProductsCatalog from "@/components/ProductsCatalog";

export default {
  name: 'App',
  components: {
    AppNav, ChooseBillionnaire, CatalogHeader,ProductsCatalog
  },

  computed: {
    isBillionManSelected() {
      return this.$store.state.selectedBillionaire !== undefined;
    }
  }
}
</script>

<style scoped>
</style>
