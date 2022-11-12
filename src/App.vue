<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'contact' }">Contact</router-link> |
    <router-link :to="{ name: 'champs' }">Champions</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="previous">Previous</button>
  <button @click="next">Next</button>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    redirect() {
      this.$router.push("/");
    },
    previous() {
      this.$router.go(-1);
    },
    next() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-color: crimson;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
button {
  border-style: none;
  padding: 7px;
  margin: 4px;
  width: 100px;
  cursor: pointer;
}
</style>
