<template>
    <div class="main">
        <div class="imageContent" :style="'background-image:url(' + background + ')'">
            <h2>{{datas.title}}</h2>
        </div>
        <div class="widgt">
            <div class="header">
                <div class="title" v-if="datas.title" data-aos="fade-up">
                    <span>{{datas.title}}</span>
                </div>
            </div>
            <div class="introduce" data-aos="fade-up">
                <div class="logo" v-if="datas.image">
                    <img :src="publicPath + datas.image" width="200" >
                </div>
                <div v-html="datas.multiContent" v-if="datas.multiContent"></div>
                <div class="pure" v-for="item in datas.products">
                    <div class="image">
                        <img :src="publicPath + item.image" />
                        <div class="mask">
                            <p v-html="item.info"></p>
                        </div>
                    </div>
                    <p>
                        {{item.title}}
                        <span>{{item.subtitle}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import datas from './biya.json'
export default {
    data () {
        return {
            datas: {},
            background: null,
            publicPath: null
        }
    },
    mounted () {
        let id = this.$route.query.id || '';
        this.datas = datas[id];
        this.publicPath = process.env.BASE_URL;
        this.background = `${process.env.BASE_URL}images/biya/${id}_1.jpg`
    },
    watch: {
        '$route' (to) {
            let id = to.query.id;
            this.datas = datas[id];
            this.background = `${process.env.BASE_URL}images/biya/${id}_1.jpg`
        }
    },
    computed: {
        isLowerIE10 () {
            const IE = 'ActiveXObject' in this; // Edge 不是 IE
            const documentMode = document.documentMode || (IE ? 0 : 99);
            return documentMode < 10;
        }
    }
}
</script>
<style lang="less" scoped>
.main {
    .imageContent {
        box-sizing: border-box;
        height: 350px;
        padding-top: 50px;
        background-position: center;
        h2 {
            max-width: 1024px;
            margin: 0 auto;
            color: #Fff;
        }
    }
    .pure {
        p {
            color: #000;
            span {
                vertical-align: text-bottom;
                color: #8d8d8d;
                font-size: 14px;
                padding-left: 6px;
            }
        }
    }
}
</style>
