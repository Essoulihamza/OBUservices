import { $axios } from '~/axios';
import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useUserStore = defineStore('User', () => {
    // state
    const authUser =  ref({});
    // getters
    const isAuth = computed(() => ! ( Object.keys(authUser.value).length == 0 ) );
    const isAdmin = computed(() => ( authUser.value.role == "admin") );
    // actions
    async function signUp(data) {
        try {
            const res = await $axios.post('User/SignUp', data);
            authUser.value = res.data.data.user;
            localStorage.setItem('token', res.data.data.token);
            return toast.success(res.data.message);
        } catch (error) {
            if(error.response) 
                toast.error(error.response.data.messge);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }
    async function login(data){
        try{
            const res = await $axios.post('User/Login', data);
            authUser.value = res.data.data.user;
            localStorage.setItem('token', res.data.data.token);
            if(isAdmin){
                navigateTo('/admin');
            }  
            return toast.success(res.data.message);
        } catch (error) {
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }
    async function logOut(){
        let token = localStorage.getItem('token');
        try{
            const res = await $axios.post('User/Logout', {}, {
                            headers: {
                                'Authorization': 'Bearer ' + token 
                            }
            });
            if(isAdmin){
                navigateTo('/');
            }  
            authUser.value = {};
            localStorage.removeItem('token');
            
            toast.success(res.data.message);
        } catch (error) {
            if(error.response) 
                console.log(error.response);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }
    async function update(data){
        let token = localStorage.getItem('token');
        try{
            const res = await $axios.patch('User/update', data, {
                                headers: {
                                    'Authorization': 'Bearer ' + token 
                                }
            });
            console.log(res);
            authUser.value = res.data.data.user;
            toast.success(res.data.message);
            return 1;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }


    // return
    return {
        authUser,
        isAuth,
        isAdmin,
        signUp,
        login,
        logOut,
        update
    }
}, {persist: true});
