<template>
<div id="menu">
  <div id="side">
    <router-link to="/">
    <div class="menu-item browse">
      <p>Home</p>
      </div>
    </router-link>
    <router-link to="/entries">
      <div class="menu-item browse">
        <p>View Entries</p>
      </div>
    </router-link>
    <router-link to="/inspiration">
      <div class="menu-item">
        <p>Inspirtaion</p>
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

body {
  margin: 50px 100px;
}

#menu a {
  color: #B84901;
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
  border: 1px solid red;
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
