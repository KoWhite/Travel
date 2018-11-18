<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id"> <!-- 用循环进行封装 -->
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop:true //循环展示
            },
            /* 被循环封装的所有展示图片 */
            swiperList: [{
                id:'0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/b4/ac00a771d74f5a02.jpg_750x200_a71cff60.jpg'
            },{
                id:'0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/68/c66e4cde1ee62602.jpg_750x200_e9b97acd.jpg'
            }]
        }
    }  
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
.wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.25%
    background: #eee
    .swiper-img
        width: 100%
</style>
