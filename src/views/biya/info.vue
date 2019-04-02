<template>
    <div class="container">
        <div class="imageContent" :style="'background-image:url(' + background + ')'"></div>
        <div class="widgt" v-for="item in datas">
            <div class="header">
                <div class="title" v-if="item.title" data-aos="fade-up">
                    <span>{{item.title}}</span>
                </div>
            </div>
            <div class="introduce" data-aos="fade-up">
                <div class="logo" v-if="item.image">
                    <img :src="publicPath + item.image" width="200" >
                </div>
                <div class="text" v-html="item.multiContent" v-if="item.multiContent"></div>
                <div class="pure" v-for="item in item.products">
                    <div class="image">
                        <img :src="publicPath + item.image" width="100%"/>
                        <div class="mask">
                            <p v-html="item.info"></p>
                        </div>
                    </div>
                    <p class="text">
                        {{item.title}}<br />
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
            datas: [],
            background: null,
            publicPath: null
        }
    },
    mounted () {
        let id = this.$route.query.id || '';
        this.datas = datas[id];
        this.publicPath = process.env.BASE_URL;
        this.background = `${process.env.BASE_URL}images/biya/${id}.jpg`
    },
    watch: {
        '$route' (to) {
            let id = to.query.id;
            this.datas = datas[id];
            this.background = `${process.env.BASE_URL}images/biya/${id}.jpg`
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
