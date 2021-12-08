<template>
  <div class="entries">
    <div class="header">
      <h1>Secrets</h1>
    </div>
        <div class='test'>
          <div v-for="chronicle in chronicles" :key="chronicle._id">
          Secrets From {{chronicle.alias}}
          <br>
            <p v-for="entry in chronicle.entries" :key="entry._id">
            {{entry.content}}
            <br>
            <em>{{entry.date}}</em>
            <button type='button' @click.prevent="deleteEntry(chronicle._id, entry._id)">Remove Secret</button>
            <br>

            </p>
            <svg width="110" height="110" class="tag">
            <a href="#" @click.prevent="deleteJournal(chronicle._id)">
            <path d="M  10   0
                       L 110   0
                       L 110 100
                       L  60  60
                       L  10 100
                       Z"
                    fill="#e33c33"/>

              <text x="60"
                    y="35"
                    fill="#FFFFFF"
                    text-anchor="middle"
                    alignment-baseline="middle">
                Remove All
              </text>
            </a>
            </svg>
          </div>



        <br>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Entries",
  data() {
    return {
    chronicles: [],
    }
  },
  created() {
    this.getJournal();
  },
  methods: {
    async getJournal() {
        let response = await axios.get("/api/journal");
        this.chronicles = response.data;
        return true
    },
    async deleteJournal(chronal) {
        await axios.delete("/api/journal/" + chronal);
        this.getJournal();
        return true;
    },
    async deleteEntry(chronal, entry) {
        await axios.delete("/api/journal/" + chronal + "/" + entry);
        this.getJournal();
        return true;
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

em {
  background-color: #ffe7cc;
  font-size: 20px;
}

button {
  background-color: #ffe7cc;
  font-size: 20px;
  float: right;
  border: none;
}
button:hover {
  background-color: #e33c33;
  color: #FFFFFF;
  border-radius: 7.5px;
}

h1 {
   text-align: center
}

.entries {
  min-height: 100vh;
}

text {
  font-size: 15px;
}

</style>
