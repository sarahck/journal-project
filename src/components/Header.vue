<template>
<div id="menu">
  <div id="side">
    <router-link to="/">
    <div class="menu-item browse">
      <h2>Home</h2>
      </div>
    </router-link>
    <router-link to="/entries">
      <div class="menu-item browse">
        <h2>View Entries</h2>
      </div>
    </router-link>
    <router-link to="/inspiration">
      <div class="menu-item browse">
        <h2>Inspiration</h2>
      </div>
    </router-link>
  </div>
<router-view /> <!--diplays component defined in the router for whatever page it's on-->
</div>
</template>

<script>
export default { //currently don't need
  name: "Header",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#menu {
  padding: 10px;
}

body {
  margin: 50px 100px;
}

#menu a {
  color: black;
  text-decoration: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  //border: 1px solid red;
  border-bottom: 5px solid black;
  padding-bottom: 10px;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
