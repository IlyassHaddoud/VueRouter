<template>
  <div>
    <h1>Favourites champions</h1>
    <p v-for="champ in champs" :key="champ.id">
      <router-link :to="{ name: 'champsDetails', params: { id: champ.id } }">
        {{ champ.name }}
      </router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "ChampsView",
  data() {
    return {
      champs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/champs")
      .then((res) => res.json())
      .then((data) => (this.champs = data));
  },
};
</script>
<style scoped>
p {
  background-color: darkgrey;
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  color: white;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a {
  text-decoration: none;
  color: white;
}
</style>
