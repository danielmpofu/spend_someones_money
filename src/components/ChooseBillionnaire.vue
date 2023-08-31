<template>

  <div class="container p-3">
    <div class="row">
      <div class="col-11"><h2> Select your billionaire</h2></div>
      <div class="col">
        <button class="btn btn-outline-danger" style="margin-right: auto">Close</button>
      </div>
    </div>

    <div class="grid-container-3">
      <figure class="card"  v-for="billionaire in billionaires" :key="billionaire.id">
        <img class="figure-img" :src="billionaire.picture" alt="">
        <div class="card-body">
          <h3> {{ billionaire.name }} </h3>
          <p>Net Worthy: £{{ billionaire.networthy }}.00</p>
          <div class="row">
            <div class="col-6">
              <button @click="setSelectedBillionMan(billionaire)"
                      class="btn col-12 btn-outline-danger">Choose
              </button>
            </div>
            <div class="col-6">
              <button @click="setSelectedBillionMan(billionaire)" class="btn col-12 btn-outline-success">Bio
              </button>
            </div>
          </div>
        </div>
      </figure>
    </div>

  </div>
</template>

<script>

export default {
  name: "ChooseBillionnaire",
  computed: {
    billionaires() {
      return this.$store.state.billionaires
    }
  },
  methods: {
    setSelectedBillionMan(billMan) {
      this.$store.commit("setSelectedBillionaire", billMan);
    }
  }
}
</script>

<style scoped>

</style>