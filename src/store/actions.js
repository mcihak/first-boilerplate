import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  loadCoins({ commit }) {
    axios
      .get("http://localhost:4000/results")
      .then(r => r.data)
      .then(coins => {
        commit("SET_COINS", coins);
      });
  }
};
