import { defineStore } from "pinia";
import { $axios } from '~/axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useRequestStore = defineStore('Request', () => {
    const Requests = ref([]);


    async function index(){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.get('Request', {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            return res.data.data;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    async function store(data){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.post('Request', data, {
                    headers: {
                        'Authorization': 'Bearer ' + token 
                    }
                });
            toast.success(res.data.message);
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }


    async function show(){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.get('myRequests', {
                    headers: {
                        'Authorization': 'Bearer ' + token 
                    }
                });
            Requests.value = res.data.data;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }
    
    
    
    async function update(Request, status){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.patch('Request/' + Request, {status: status}, {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            toast.success(res.data.message);
            return true;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    async function destroy(request){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.delete('Request/'+ request , {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            await show();
            toast.success(res.data.message);
            return true;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    return {
        Requests,
        index,
        store,
        show,
        update,
        destroy
    }
});