import { useUserStore } from "~/stores/User";
import { storeToRefs } from "pinia";
const user = useUserStore();
const { isAdmin } = storeToRefs(user);
export default defineNuxtRouteMiddleware((to) => {
    if(to.path === '/admin'  && !isAdmin.value ){
        return navigateTo('/');
    }
});