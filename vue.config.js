const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
  css: {
    sourceMap: false,
    loaderOptions: {
        postcss: {
            plugins: [
                autoprefixer(),
                pxtorem({
                    rootValue: 37.5, //vant使用375设计稿,其他使用750设计稿，rootValue:75
                    selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                    propList: ['*'],
                    selectorBlackList: ['van']
                })
            ]
        },
        less:{
          lessOptions:{
            modifyVars: {
              'nav-bar-background-color': '#0f9bd8',
              'nav-bar-icon-color':'#fff',
              'nav-bar-title-text-color':'#fff'
            }            
          }

        }

    }
  },
  publicPath: './',

}