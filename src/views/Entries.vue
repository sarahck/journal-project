<template>
  <div class="entries">
    <h1>This is an entries page</h1>
    <p v-for="chronicle in chronicles" :key="chronicle.id">
    Entry: {{chronicle.entry}}
    Date: {{chronicle.date}}</p>
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
