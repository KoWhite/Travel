<template>
    <article>
        <section class="banner" @click="handleBannerGallary">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <section class="banner-title">
                    {{this.sightName}}
                </section>
                <section class="banner-number">
                    <span class="iconfont banner-icon">&#xe6e9;</span>
                    {{this.bannerImgs.length}}
                </section>
            </div>
        </section>
        <common-fade>
            <common-gallary 
                :imgs="bannerImgs" 
                v-show="showGallary"
                @close="hanleGallaryClose"
            ></common-gallary>
        </common-fade>
    </article>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonFade from 'common/fade/Fade'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data () {
        return {
            showGallary: false,
        }
    },
    components: {
        CommonGallary,
        CommonFade
    },
    methods: {
        handleBannerGallary () {
            this.showGallary = true
        },
        hanleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%

    .banner-img
        width: 100%
    
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        color: #fff
        background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,.8))

        .banner-title
            flex: 1
            font-size: .32rem
            padding: 0 .2rem

        .banner-number
            line-height: .32rem
            height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0,0,0,.8)
            font-size: .24rem

            .banner-icon
                font-size: .24rem           
</style>
