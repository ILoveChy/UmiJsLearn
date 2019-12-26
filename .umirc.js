export default {
    plugins: [
        ['umi-plugin-react', {
            title: true, //开启title插件
            dva: true, //开启dva插件
            routes: {
                exclude: [/.*\/models\/.*/, /.*\/models\.js/, /.*components.*/, /.*services.*/]
            }
        }]
    ],
    // proxy: { //相当于webpack中的devServer中的proxy配置
    //     "/api": {
    //         target: "http://open.duyiedu.com",
    //         changeOrigin: true//修改源
    //     }
    // }
};