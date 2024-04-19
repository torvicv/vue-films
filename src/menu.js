import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', {
    state: () => ({
        open: false
    }),
    getters: {
        isOpen(state) {
            return state.open;
        }
    },
    actions: {
        setIsOpen(value) {
            this.open = value;
        }
    }
});