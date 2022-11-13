<template>
  <div v-if="champ">
    <h1>Champions Details</h1>
    <h3>{{ champ.name }}</h3>
    <h4>Role: {{ champ.role }}</h4>
  </div>
  <div v-else>
    <h2>loading Data...</h2>
  </div>
</template>
<script>
export default {
  name: "ChampsDetailsView",
  props: ["id"],
  mounted() {
    fetch("http://localhost:3000/champs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.champ = data));
  },
  data() {
    return {
      champ: null,
    };
  },
};
</script>
<style></style>
