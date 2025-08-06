import { defineStore } from 'pinia'

export type ElementoReporte = {
  id: string
  type: 'rect' | 'text' | string
  x: number
  y: number
  width: number
  height: number
  color?: string
  [key: string]: any // permite props dinámicas
}

export const useReportStore = defineStore('report', {
  state: () => ({
    elements: [] as ElementoReporte[],
    elementSelectedId: null as string | null
  }),

  getters: {
    selectedElement(state): ElementoReporte | null {
      return state.elements.find(el => el.id === state.elementSelectedId) || null
    }
  },

  actions: {
    addElement(element: Omit<ElementoReporte, 'id'>) {
      const nuevo = { ...element, id: crypto.randomUUID() }
      this.elements.push(nuevo as ElementoReporte)
    },

    updateElement(id: string, props: Partial<ElementoReporte>) {
      const idx = this.elements.findIndex(e => e.id === id)
      if (idx !== -1) {
        this.elements[idx] = { ...this.elements[idx], ...props }
      }
    },

    selectElement(id: string) {
      this.elementSelectedId = id
    },

    deleteElement(id: string) {
      this.elements = this.elements.filter(e => e.id !== id)
      if (this.elementSelectedId === id) this.elementSelectedId = null
    }
  }
})
