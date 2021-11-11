<template>
  <div class="home">
    <h1>Home page</h1>
    <form v-if="creating" @submit.prevent="addEntry">
      <textarea class="textArea" v-model="entry" rows='8' style="resize: none;">test</textarea>
      <br>
      <div class="button">
        <button type="submit">Submit</button>
      </div>
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

</style>
