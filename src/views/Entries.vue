<template>
  <div class="entries">
    <div class="header">
      <h1>Secrets</h1>
    </div>
        <div class='test'>

        <p v-for="chronicle in chronicles" :key="chronicle._id">
        Alias: {{chronicle.alias}}
        <br>
        Entry:<br> {{chronicle.entry}}
        <br>
        </p>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Entries",
  computed: {
    chronicles() {
      return this.getJournal();
    }
  },
  methods {
    async getJournal() {
      try {
        let response = await axios.get("/api/journal");
        console.log("getting library");
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
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
