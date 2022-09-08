<template>
  <div id="app">
    <nav class="orange darken-2">
      <div class="nav-wrapper"></div>
    </nav>
    <img alt="Vue logo" src="../assets/logo.png" width="32" />
    <tarefa-list :msg="'Welcome to Your Vue.js App'" :tasks="listaDeTarefa" />
  </div>
</template>

<script>
import TaskApi from "../TasksApi";
import TarefaList from "../components/TarefaList.vue";

export default {
  components: {
    TarefaList,
  },
  data: () => {
    return {
      listaDeTarefa: ["A", "B", "C"],
    };
  },
  created() {
    TaskApi.getTasks((data) => {
      this.listaDeTarefa = data;
    });
  },
};
</script>

<style></style>
