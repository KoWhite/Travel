<template>
    <article class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe6bd;</div>
        </router-link>
    </article>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .3rem

    .header-back
        left: 0
        top: 0 
        position: absolute
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff
</style>

