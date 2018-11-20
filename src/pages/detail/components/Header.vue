<template>
    <article>
        <router-link 
            tag="section" 
            to="/" 
            class="header-abs"
            v-show="showAbs"    
        >
            <span class="iconfont header-abs-back">&#xe6bd;</span>
        </router-link>
        <section 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe6bd;</div>
            </router-link>
            景点详情
        </section>
    </article>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated() {
        //用了一定要解绑！！！！全局很恐怖，会带来很多坑的
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {
        //解绑之后才能浪！
        window.removeEventListener('scroll',this.handleScroll)
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    text-align: center
    line-height: .8rem
    border-radius: .4rem
    background: rgba(0,0,0,.8)

    .header-abs-back
        color: #fff
        font-size: .4rem

.header-fixed
    position: fixed
    top: 0 
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .3rem

    .header-fixed-back
        left: 0
        top: 0 
        position: absolute
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff
</style>