<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="tarefa in tasks" :key="tarefa.id">{{ tarefa }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    tasks: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
