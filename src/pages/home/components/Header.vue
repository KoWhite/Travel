<template>
    <article class="header">
        <!-- 从iconfont网站引入图标硬格式 -->
        <section class="header-left">
            <span class="iconfont back-icon">&#xe6bd;</span>
        </section>
        <section class="header-input">
            <span class="iconfont">&#xe63e;</span>
            输入城市/景点/游玩主题
        </section>
        <router-link to='/city'>
            <section class="header-right">
                {{this.doubleCity}}
                <span class="iconfont city-icon">&#xe64a;</span>
            </section>
        </router-link>
    </article>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'HomeHeader', 
    computed: {
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
    }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl' 
/*  1、将styles文件目录用webpack.base.conf中进行简化为styles；
 2、将背景颜色代码放入varibles.styl中易于后期维护 */
 .header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff
    .heder-left
        width: .64rem
        float: left
    .back-icon
        text-align: center
        font-size: .4rem
    .header-input
        flex: 1
        height: .64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        background-color :#fff
        color: #ccc
        border-radius: .1rem
    .header-right
        min-width: 1.04rem
        padding: 0 .1rem
        float: right
        text-align: center
        color: #fff
    .city-icon
        margin-left: -.04rem
        font-size: .24rem
</style>