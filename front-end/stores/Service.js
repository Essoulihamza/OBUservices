import { defineStore } from "pinia";
import { $axios } from '~/axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useServiceStore = defineStore('Service', () => {

    const Service = ref({});

    async function index(){
        try{
            let res = await $axios.get('Service');
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

    async function show(service){
        try{
            let res = await $axios.get('Service/' + service);
            Service.value = await res.data.data;
        }catch(error){
            if(error.response) 
                console.log(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    async function store(data){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.post('Service', data, {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            await index();
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
    
    async function update(Service){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.patch('Service/'+ Service.id, Service,  {
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

    async function destroy(Service){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.delete('Service/' + Service, {
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

    return {
        Service,
        index,
        store,
        show,
        update,
        destroy
    }
});