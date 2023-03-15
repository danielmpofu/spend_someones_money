<template>
  <div class="row">
    <div class="col">
      <h2>Your balance is £{{ balance }} out of £{{ totalSpendable }}</h2>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      currentBalance: 0,
    }
  },
  components: [

  ],
  name: "CatalogHeader",
  methods: {
    setCurrentBalance() {
      this.currentBalance = this.$store.state.amountBalanceAvailable;

    }
  },
  computed: {
    balance() {
      this.setCurrentBalance()
      return this.$store.state.amountBalanceAvailable;
    },
    totalSpendable() {
      return this.$store.state.amountSpendable;
    }
  }
}
</script>

<style scoped>

</style>