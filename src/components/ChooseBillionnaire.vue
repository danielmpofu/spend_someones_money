<template>
<div class="container p-3">
  <div class="row">
    <div class="col-11"><h2>  Select your billionaire</h2></div>
    <div class="col"><button class="btn btn-outline-danger" style="margin-right: auto">Close</button></div>
  </div>

  <ul class="list-group">
    <li class="list-group-item-light" @click="setSelectedBillionMan(billionaire)" v-for="billionaire in billionaires" :key="billionaire.id">

      <div  class="alert hoverItem">
        <div class="row">
          <div class="col-2">
            <img :src="billionaire.picture" alt="">
          </div>
          <div class="col">
            <h3>  {{billionaire.name}} </h3>
            <p>£{{billionaire.networthy}}</p>
          </div>
        </div>
      </div>

      
    </li>
  </ul>

</div>
</template>

<script>
export default {
  name: "ChooseBillionnaire",
  computed:{
    billionaires(){
      return this.$store.state.billionaires
    }
  },
  methods:{
    setSelectedBillionMan(billMan){
      this.$store.commit("setSelectedBillionaire",billMan);
    }
  }
}
</script>

<style scoped>

.hoverItem{
  background-color:white;
  padding: 4px;
}

.hoverItem :hover{
  background-color: rgba(204, 221, 238, 0.97)!important;
  padding: 8px;
}

</style>