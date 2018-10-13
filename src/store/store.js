import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favourites: [
      {
        name: "Max",
        breed: "husky",
        img: "https://dog.ceo/api/img/husky/n02110185_1469.jpg"
      },
      {
        name: "Rusty",
        breed: "shiba",
        img: "https://dog.ceo/api/img/shiba/shiba-13.jpg"
      },
      {
        name: "Rocco",
        breed: "boxer",
        img: "https://dog.ceo/api/img/boxer/n02108089_14112.jpg"
      }
    ]
  },
  mutations: {
    addToFavourites(state, payload) {
      console.log(payload);
      if (state.favourites.indexOf(payload) <= -1) {
        state.favourites.push(payload);
      }
    },
    removeFromFavourites(state, payload) {
      // The first argument is the index of the element we want to start with and the second argument is the number of elements we want to remove.
      state.favourites.splice(state.favourites.indexOf(payload), 1);
    },
    clearFavourites(state) {
      state.favourites = [];
    }
  },
  actions: {
    addToFavourites({ commit }, payload) {
      commit("addToFavourites", payload);
    },
    removeFromFavourites({ commit }, payload) {
      commit("removeFromFavourites", payload);
    },
    clearFavourites({ commit }) {
      commit("clearFavourites");
    }
  }
});
