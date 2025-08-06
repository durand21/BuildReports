<script setup lang="ts">
  import { ref } from "vue";
  import { invoke } from "@tauri-apps/api/core";
  import workSheetPanel from "./components/workSheet/workSheetMain.vue" 

  const greetMsg = ref("");
  const name = ref("");

  async function greet() {
    console.log('Nombre'+name.value);
    greetMsg.value = await invoke("greet", { name: name.value });
  }
</script>

<template>
  <main class="container">
    <!--Contenedor principal de los paneles-->
    <section class="row">
      <!-- Primer columna de Explorador de Data y Componentes-->
      <aside class="column">
        <p>Columna 1</p>
        <form  @submit.prevent="greet">
          <input id="greet-input" v-model="name" placeholder="Enter a name..." />
          <button type="submit">Greet</button>
        </form>
        <p>{{ greetMsg }}</p>
      </aside> 

      <!-- Columna para la hoja de Trabajo-->
      <aside id="workSheetPanel" class="column">
        <workSheetPanel/>
      </aside>

      <!-- Columna para las propiedades y config de un Componente-->
      <aside class="column">
        <p>"<<<<"Columna 3</p>
      </aside>

    </section> 
  </main>
</template>

<style scoped>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #249b73);
  }

</style>