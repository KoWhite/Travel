<template>
    <article>
        <section class="title">
            周末去哪儿
        </section>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [{
            id: '0001',
            title: '北京欢乐谷',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc: '就是一个很好玩的地方，我其实我也没去过，玩的开心哦'
        }, {
            id: '0002',
            title: '故宫',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            desc: '就是一个很好玩的地方，我其实我也没去过，玩的开心哦'
        }, {
            id: '0003',
            title: '西山温泉',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg',
            desc: '就是一个很好玩的地方，我其实我也没去过，玩的开心哦'
        }, {
            id: '0004',
            title: '八达岭长城',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
            desc: '就是一个很好玩的地方，我其实我也没去过，玩的开心哦'
        }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%

    .item-img
        width: 100%

    .item-info
        padding: .1rem

        .item-title
            line-height: .4rem
            font-size: .3rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()

</style>