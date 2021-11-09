<template>
  <div class="entries">
    <h1>This is an entries page</h1>
    <p>{{entry}}</p>
  </div>
</template>

<script>
export default {
  name: "Entries",
  computed: {
    entry() {
      return this.$root.$data.journal;
    }
  }
};
</script>
