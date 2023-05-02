import { defineStore } from "pinia";
import { $axios } from '~/axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const usePackageStore = defineStore('Package', () => {
    const packages = ref([]);


    async function index(){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.get('Package',  {
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
            let res = await $axios.post('Package', data, {
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
    
    async function update(Package){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.patch('Package/' + Package.id, Package, {
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

    async function destroy(Package){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.delete('Package/' + Package, {
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
        packages,
        index,
        store,
        update,
        destroy
    }
});