<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id"> <!-- 用循环进行封装 -->
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop:true //循环展示
            }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length
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
