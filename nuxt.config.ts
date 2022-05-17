import { defineNuxtConfig } from 'nuxt'



export default defineNuxtConfig({
    ssr: true,
    // css: [
    //     "~/assets/css/tailwind.css"
    // ],
    // build:{
    //     postcss: {
    //         postcssOptions:{
    //             plugins: {
    //                 tailwindcss:{},
    //                 autoprefixer: {},
    //             }
    //         }
    //     }
    // }
    modules: ['@pinia/nuxt'],
    nitro: {
        preset: 'nitro-prerender',
      },
      target: 'static'


})
