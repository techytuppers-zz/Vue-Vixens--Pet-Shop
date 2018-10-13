<template>
  <div>
	<v-list>
    <v-subheader v-if="!favourites.length">Your favourites list is empty</v-subheader>
    <div v-else>
      <v-subheader>Your favourites</v-subheader>
      <v-list-tile v-for="(dog, index) in favourites" :key="index" avatar @click="{}">
      <v-list-tile-avatar>
        <img :src="dog.img">
      </v-list-tile-avatar>
      <v-list-tile-content>{{dog.name}}</v-list-tile-content>
      <v-list-tile-action>
        <v-icon @click="removeFromFavourites(dog)">delete</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    </div>
	</v-list>
</div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    computed: {
      favourites() {
        // return the value of the favorites array stored in state so we can use it in our component.
        return this.$store.state.favourites;
      }
    },
    methods: {
      ...mapActions(['removeFromFavourites'])
    }
    
  }
</script>
