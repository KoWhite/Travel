<template>
    <article class="header">
        <section class="header-left">
            <span class="iconfont back-icon">&#xe6bd;</span>
        </section>
        <section class="header-input">
            <span class="iconfont">&#xe63e;</span>
            输入城市/景点/游玩主题
        </section>
        <section class="header-right">
            城市
            <span class="iconfont city-icon">&#xe64a;</span>
        </section>
    </article>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang = "stylus" scoped>
 @import '~styles/varibles.styl'
 .header
    display: flex
    line-height: .86rem
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
        width: 1.24rem
        float: right
        text-align: center
    .city-icon
        margin-left: -.04rem
        font-size: .24rem
</style>