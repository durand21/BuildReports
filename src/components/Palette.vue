<template>
  <div>
    <h3>Palette</h3>
    <button @click="agregarRectangulo">➕ Add Rectangle</button>
  </div>
</template>

<script setup lang="ts">
import { useReportStore } from '../store/report.store'

const store = useReportStore();

function agregarRectangulo() {
  store.elements.push({
    id: crypto.randomUUID(),
    type: 'rect',
    x: 100,
    y: 100,
    width: 120,
    height: 60,
    color: 'skyblue'
  })
}
</script>
