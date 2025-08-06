

<template>
  <div class="component-panel">
    <h3>Components</h3>
    <div
      class="component"
      v-for="component in availableComponents"
      :key="component.type"
      draggable="true"
      @dragstart="onDragStart($event, component.type)"
    >
      {{ component.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface ComponentItem {
  type: string
  label: string
}

const availableComponents: ComponentItem[] = [
  { type: 'text', label: 'Text Field' },
  { type: 'image', label: 'Image' },
  { type: 'table', label: 'Table' },
  { type: 'button', label: 'Button'},
  { type: 'checkbox', label: 'Checkbox'},
  { type: 'radio', label: 'Radio'},
  { type: 'select', label: 'Select'},
]

function onDragStart(event: DragEvent, type: string) {
  event.dataTransfer?.setData('componentType', type)
}
</script>

<style scoped>
.component-panel {
  width: 200px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  padding: 1rem;
}

.component {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: grab;
  text-align: center;
  user-select: none;
}
</style>
