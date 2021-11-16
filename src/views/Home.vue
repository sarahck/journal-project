<template>
  <div class="home">
    <h1>Something I Never Told You...</h1>
    <form v-if="creating">
      <textarea class="textArea" v-model="entry" rows='8' style="resize: none;">test</textarea>
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
import moment from 'moment';
export default {
  name: "Home",
  data() {
    return {
      creating: true,
      date: '',
      entry: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addEntry() {
      this.$root.$data.journal.push( {
        id: this.$root.$data.id,
        date: moment().format('lll'),
        entry: this.entry,
      })
      this.$root.$data.id += 1;
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
