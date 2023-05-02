import { useUserStore } from "~/stores/User";
import { storeToRefs } from "pinia";
const user = useUserStore();
const { isAuth } = storeToRefs(user);
export default defineNuxtRouteMiddleware((to) => {
    if( to.path == '/dashboard' && !isAuth.value ) {
        return navigateTo('/');
    }
    
});