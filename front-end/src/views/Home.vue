<template>
  <div class="home">
    <h1>Something I Never Told You...</h1>
    <form v-if="creating">
      <input v-model="alias" placeholder="Alias">
      <textarea class="textArea" v-model="entry" rows='8' style="resize: none;" placeholder="Begin typing..."></textarea>
      <svg width="110" height="110" class="tag">
      <a href="#" @click.prevent="addEntry">
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
          Bookmark
        </text>
      </a>
      </svg>
    </form>

    <div v-else>
      <p>You must have more secrets than that.</p>
      <p><a @click="toggleForm" href="#">Share another</a></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Home",
  data() {
    return {
      creating: true,
      alias: '',
      date: '',
      entry: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    async addEntry() {
      try {
        console.log("in addEntry function");
        await axios.post('/api/journal', {
          alias: this.alias,
          entrycontent: this.entry,
          entrydate: this.date,
        });
      } catch(error) {
        console.log("error is", error);
        }
      this.alias = '';
      this.date = '';
      this.entry = '';
      this.creating = false;
    }
  },
  components: {
  },
};
</script>

<style scoped>
h1 {
  padding: 15px 0px 7px 0px;
}

.textArea {
  width: 100%;
  background-color: #ffe7cc;
  align-self: center;
}

.home {
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
}

text {
  font-size: 20px !important;
}

.tag {
  display: flex;
  align-self: flex-end;
}

</style>
