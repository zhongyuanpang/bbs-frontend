// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules:[
        '@pinia/nuxt',
    ],
    css:[
        'element-plus/dist/index.css',
        'bootstrap/dist/css/bootstrap.min.css',
        'mavon-editor/dist/css/index.css',
    ],
    app: {
        head:{
            title:"lao pang",
            bodyAttrs: { style: 'height: 100%; margin:0; padding: 0;' },
            meta:[
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
            ]
        }
    },
    //配置全局scss样式
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/default.scss" as *;'	// 注意文件路径要配成自己的
                }
            }
        },
        plugins:[

        ],
    },
})
