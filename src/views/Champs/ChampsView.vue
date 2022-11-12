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
      champs: [
        { id: 1, name: "Zed", role: "midLane" },
        { id: 2, name: "Lucian", role: "botLane" },
        { id: 3, name: "Fiora", role: "TopLane" },
      ],
    };
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
