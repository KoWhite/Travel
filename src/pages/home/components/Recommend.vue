<template>
    <article>
        <section class="title">
            热销推荐
        </section>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    name: 'HomeRecommend',
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
    
    .item
        overflow: hidden
        display: flex
        height: 1.9rem

        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem

        .item-info
            flex: 1
            padding: .1rem
            min-width: 0

            .item-title
                line-height: .4rem
                font-size: .3rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            
            .item-button
                line-height: .4rem
                margin-top: .16rem
                background: #ff9300
                padding: 0 .1rem
                border-radius: .06rem
                color: white
</style>

