<template>
  <div class="container mt-3">
    <nav class="navbar navbar-expand-lg bg-light">
      <a href="#" class="navbar-brand" style="margin-left: 20px">Spend.It</a>

      <ul style="margin-right: auto!important;" class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a href="" class="nav-link">Home</a>
        </li>
        <li class="nav-item active">
          <a href="" class="nav-link">About</a>
        </li>
        <li class="nav-item active">
          <a href="" class="nav-link">More</a>
        </li>
      </ul>
      <button  class="btn btn-outline-info">Cart</button>
      <button @click="resetApp" class="btn btn-outline-danger" style="margin-right: 20px">Reset</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  methods:{
    resetApp(){
      this.$store.commit("resetApp");
    }
  }
}
</script>

<style scoped>

</style>