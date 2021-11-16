<template>
  <div id="app">
    <Header />
      <div id="nav">

      </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  //background-color: #FFF9E7;
  background-color: #A96F46;
  //background-color: #F4FFFE;
  font-family: 'Roboto Mono', monospace;
  font-weight: 100;
  //background-color: #e5fff9;
  //background-color:#fff2e6;
  //background-color: #f2e6ff;
  //background-color: #ffe6ff;
}

body {
  font-size: 22.5px;
  display: flex;
  flex-direction: column;
}

p {
  line-height: 25pt;
}

ul {
  line-height: 25pt;
}

#nav {
  flex: 1 0 auto;
}
</style>
