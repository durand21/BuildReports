<template>
  <v-stage :config="stageConfig">
    <v-layer>
      <v-rect
        v-for="elemento in store.elements"
        :key="elemento.id"
        :config="{
          x: elemento.x,
          y: elemento.y,
          width: elemento.width,
          height: elemento.height,
          fill: elemento.color || 'skyblue',
          draggable: true
        }"
        @dragend="onDragEnd($event, elemento.id)"
        @click="store.selectElement(elemento.id)"
      />
    </v-layer>
  </v-stage>
</template>

<script setup lang="ts">
import { useReportStore } from '../store/report.store'
import { computed } from 'vue'

const store = useReportStore()

const stageConfig = computed(() => ({
  width: window.innerWidth * 0.6,
  height: window.innerHeight
}))

function onDragEnd(event: any, id: string) {
  const shape = event.target
  store.updateElement(id, { x: shape.x(), y: shape.y() })
}
</script>
