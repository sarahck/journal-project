<template>
  <div class="entries">
    <div class="header">
      <h1>Secrets</h1>
    </div>
        <div class='test'>
        <p v-for="chronicle in chronicles" :key="chronicle.id">
        Entry:<br> {{chronicle.entry}}
        <br>
        Date:<br> {{chronicle.date}}</p>
        </div>
  </div>
</template>

<script>
export default {
  name: "Entries",
  computed: {
    chronicles() {
      return this.$root.$data.journal;
    }
  }
};
</script>

<style scoped>
.test {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15%;
  grid-row-gap: 50px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 40px;
  grid-area: main_content;
}

p {
  border: 5px solid #734132;
  border-radius: 20px;
  padding: 10px;
  //background-color: #fff3e6;
  background-color: #ffe7cc;
}

h1 {
   text-align: center
}

.entries {
  min-height: 100vh;
}

</style>
