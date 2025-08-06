import { defineStore } from "pinia";

export const useReportStore = defineStore('report',{
    state: () => ({
        elements: [],
        elementSelectedId: null
    })
});