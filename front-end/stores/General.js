import { defineStore } from "pinia";
import { $axios } from '~/axios';
export const useGeneralStore = defineStore('General', () => {
    //state
    const isLoginOpen = ref(false);
    const isEditProfileOpen = ref(false);
    const isAddFormOpen = ref(false);
    const selectedTable = ref('Requests');
    return {isLoginOpen, isEditProfileOpen, isAddFormOpen, selectedTable};
}, {persist: true});