// import { createStore } from 'vuex'
import { defineStore } from 'pinia'

 


export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    items: ['item 1', 'item 2', 'item three']
  }),
  getters: {},
  actions: {}
});