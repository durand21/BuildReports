<script setup lang="ts">
  import PanelComponents from "./components/PanelComponents.vue";
  import LienzoEditor from "./components/LienzoEditor.vue";
  import PanelPropiedades from "./components/PanelPropiedades.vue";

  import { ref } from "vue";
  import { invoke } from "@tauri-apps/api/core";
  
  const greetMsg = ref("");
  const name = ref("");

  async function greet() {
    console.log('Nombre'+name.value);
    greetMsg.value = await invoke("greet", { name: name.value });
  }
</script>

<template>
 <div class="contenedor">
    <PanelComponents />
    <LienzoEditor />
    <PanelPropiedades />
  </div>
</template>

<style scoped>
.contenedor {
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>