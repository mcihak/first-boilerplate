<template>
  <div class="container">
    <DataTable />
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";

export default {
  name: "HomeView",
  components: {
    DataTable
  },
  // we can also acces route data such as params
  // asyncData ({ store, route: { params: { }}}) {
  asyncData({ store }) {
    return store.dispatch("loadCoins");
  },
  title() {
    return "Home";
  }
};
</script>

<style lang="stylus">
.container
  margin: 1em
</style>
