<script setup lang="ts">
  import Palette from './components/Palette.vue'
  import WorkSheet from './components/WorkSheet.vue'
  import PropertiesPanel from './components/PropertiesPanel.vue'
</script>

<template>
  <div class="contenedor">
    <!-- Panel izquierdo: Componentes -->
    <div class="panel panel-izquierdo">
      <Palette />
    </div>

    <!-- Centro: Lienzo de trabajo -->
    <div class="panel panel-centro">
      <WorkSheet />
    </div>

    <!-- Derecho: Propiedades -->
    <div class="panel panel-derecho">
      <PropertiesPanel />
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.panel {
  padding: 0.5rem;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
}

.panel-izquierdo {
  width: 20%;
  background-color: #f7f7f7;
}

.panel-centro {
  flex: 1;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
}

.panel-derecho {
  width: 20%;
  background-color: #f9f9f9;
  border-left: 1px solid #ddd;
}
</style>