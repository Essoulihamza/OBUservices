// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ], 
    components: [
        {
            path: '~/components/userForms',
            extensions: ['.vue'],
            pathPrefix: false 
        },
        {
            path: '~/components/mainLayoutElements',
            extensions: ['.vue'],
            pathPrefix: false 
        },
        {
            path: '~/components/ServiceComponents',
            extensions: ['.vue'],
            pathPrefix: false 
        },
        {
            path: '~/components/CategoryComponents',
            extensions: ['.vue'],
            pathPrefix: false 
        },
        {
            path: '~/components/PackageComponents',
            extensions: ['.vue'],
            pathPrefix: false 
        },
        {
            path: '~/components/RequestComponents',
            extensions: ['.vue'],
            pathPrefix: false 
        },
        {
            path: '~/components/FeedbackComponents',
            extensions: ['.vue'],
            pathPrefix: false 
        },
        {
            path: '~/components/adminDashboard',
            extensions: ['.vue'],
            pathPrefix: false
        },
        {
            path: '~/components/adminDashboard',
            extensions: ['.vue'],
            pathPrefix: false
        },
        '~/components'
      ]
})
