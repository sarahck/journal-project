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

      <div class="edit">
        <input v-model="editAlias" placeholder="Enter your alias to update your secrets">
        <div v-if="aliasMatch">

        <input class="display" v-model="currentEntry.content"/>
        <button type='button' @click.prevent="updateEntry()">Update Secret</button>
        <button type='button' @click.prevent="nextEntry()">View Next Secret</button>


          <p>click button
          update editedEntry and send it to the back end </p>


        </div>
      </div>
    </form>

    <div v-else>
      <p>You must have more secrets than that.</p>
      <p><a @click="toggleForm" href="#">Share Another or Update Your Secrets</a></p>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: "Home",
  data() {
    return {
      creating: true,
      alias: '',
      editAlias: '',
      entry: '',
      library: [],
      index: 0,
      allEntries: [],
    }
  },
  computed: {
    aliasMatch() {
      return (this.library.filter((book) => {return(book.alias === this.editAlias)}).length > 0);
    },
    currentEntry() {
      return(this.allEntries[this.index]);
    }
  },
  watch: {
    aliasMatch: function(val) {
      if (val) {
        this.allEntries = (this.library.filter((book) => {return(book.alias === this.editAlias)})[0].entries);
      }
    },
  },
  created () {
    this.getLibrary();
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    async addEntry() {
      try {
        await axios.post('/api/journal', {
          alias: this.alias,
          entrycontent: this.entry,
          entrydate: moment().format('lll'),
        });
      } catch(error) {
        console.log("error is", error);
        }
      this.alias = '';
      this.entry = '';
      this.creating = false;
    },
    async getLibrary() {
      try {
        let response = await axios.get("/api/journal");
        console.log("getting library");
        this.library = response.data;
        console.log(response.data);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    nextEntry() {
      if (this.index < this.allEntries.length - 1) {
        this.index++;
      }
      else
        this.index = 0;
    },
    async updateEntry() {
      
    },
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

.display {
  float: center;
  width: 75%;
  height: 100px;
}

.tag {
  display: flex;
  align-self: flex-end;
}

</style>
