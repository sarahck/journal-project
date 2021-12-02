<template>
  <div class="footer">
      <h2><a href="https://github.com/sarahck/journal-project.git">Github Repo</a></h2>
      <p>Kymberly Larson and Sarah Carson</p>
  </div>
</template>

<script>
export default { //currently don't need
  name: "Footer",
};
</script>

<style scoped>
.footer {
  flex-shrink: 0;
  text-align: center;
  padding-top: 20px;
  padding-bottom:15px;
}

.footer a {
  color: black;
  text-decoration: none;
}
</style>
