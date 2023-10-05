// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    server: {
        port: 3527 // 你可以根据需要修改端口号。
    },
    modules:[
        // {proxyHeaders:false}
    ],
    css:[
        'element-plus/dist/index.css',
        'bootstrap/dist/css/bootstrap.min.css',
        'mavon-editor/dist/css/index.css',
        // 'vuesax/dist/vuesax.css',
    ],
    app: {
        head:{
            bodyAttrs: { style: 'height: 100%; margin:0; padding: 0;' },
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
    experimental: {
        writeEarlyHints: false,
        externalVue: true
    },
})
