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
  grid-auto-rows: 20%;
  grid-column-gap: 15%;
  grid-row-gap: 50px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 40px;
}

p {
  border: 5px solid #ffdab3;
  border-radius: 20px;
  padding: 10px;
  background-color: #fff3e6;
}

h1 {
   text-align: center
}

</style>
