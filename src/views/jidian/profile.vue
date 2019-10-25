<template>
    <el-row :type="!isMobile ? 'flex' : ''" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="14" :lg="12" :xl="12" class="content">
            <el-menu mode="vertical" router :default-active="active" v-if="!isMobile && showMenu" class="listMenu" :data-aos='isLowerIE10 ? "fade-right" : ""'>
                <div class="listContact">
                    <h4 class="listContactTitle">联系我们</h4>
                    <p v-for="contactInfo in contactInfos" :key="contactInfo" class="listContactInfoItem">{{contactInfo}}</p>
                </div>
            </el-menu>
            <div v-for="item in data" :key="item.title" class="item">
                <h2 :data-aos='isLowerIE10 ? "fade-up" : ""' v-if="item.title">{{item.title}}</h2>
                <template v-if="item.subs && item.subs.length > 0" v-for="sub in item.subs">
                    <h3 :data-aos='isLowerIE10 ? "fade-up" : ""' v-if="sub.subTitle">{{sub.subTitle}}</h3>
                    <img v-if="sub.image" :src="sub.image" class="image" :data-aos='isLowerIE10 ? "fade-up" : ""'/>
                    <div class="itemContent" v-html="sub.content" v-if="sub.content" :data-aos='isLowerIE10 ? "fade-up" : ""'></div>
                </template>
                <img v-if="item.image" :src="item.image" class="image" :data-aos='isLowerIE10 ? "fade-up" : ""'/>
                <div class="itemContent" v-html="item.content" v-if="item.content" :data-aos='isLowerIE10 ? "fade-up" : ""'></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import datas from './jidian.json';

export default {
    data () {
        return {
            datas: null,
            data: {},
            active: null,
            id: null,
            publicPath: null,
            showMenu: false,
            contactInfos: []
        }
    },
    created () {
        let id = this.$route.query.id || '';
        this.data = datas[id];
        if (id == 'news') {
            let newid = this.$route.query.newid || '0'
            this.data = datas[id][newid]
        }
        this.contactInfos = datas.contactInfos;
        this.active = `/jidian/profile?id=${id}`;
        this.publicPath = process.env.BASE_URL;
        this.showMenu = ['product', 'news'].indexOf(id) > -1;
    },
    watch: {
        '$route' (to) {
            let id = to.query.id;
            this.data = datas[id];
            if (id == 'news') {
                let newid = to.query.newid || '0'
                this.data = datas[id][newid]
            }
            this.active = `/kelang/profile?id=${id}`;
            this.showMenu = ['product', 'news'].indexOf(id) > -1;
            this.contactInfos = datas.contactInfos;
        }
    },
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        },
        isLowerIE10 () {
            const IE = 'ActiveXObject' in this; // Edge 不是 IE
            const documentMode = document.documentMode || (IE ? 0 : 99);
            return documentMode < 10;
        }
    }
}
</script>
<style scoped>
.row-bg {
    overflow: hidden;
}
.content {
    box-sizing: border-box;
    padding: 20px;
}
.content .image {
    width: 100%;
    height: 100%;
}
.content h3 {
    margin: 0;
    border-left: 5px solid #409EFF;
    padding: 0.5em;
    margin: 2em 0;
}
.text {
    text-indent:2em;
    white-space: pre-wrap;
    line-height: 32px;
}
.ctext{
    white-space: pre-wrap;
    line-height: 32px;
}
.item {
    margin-bottom: 30px;
}
.item h2{
    text-align: center;
    margin-bottom: 16px;
}
.item image{
    margin-bottom: 16px;
}
.itemContent {
    line-height: 32px;
}
.itemContent p {
    text-indent: 2em
}
.listMenu {
    position: fixed;
    top: 11%;
    width: 200px;
    margin-left: -220px;
}
.el-menu{
    background: none;
}
.listMenu .is-active {
    outline: 0;
    background-color: #ecf5ff;
}
.content .el-menu{
    border-right: none !important;;
}

.introduce {
    padding: 0;
    margin-bottom: 65px;
    position: relative;
    background: #fff;
    text-align: center;
}
.introduce:hover {
    z-index: 20;
}
.introduce:hover .persion-detail {
    display: block;
}
.introduce .img-120 {
    width: 120px;
    height: 120px;
    margin: 0 auto;
}
.img-w100 {
    max-width: 100%;
    display: block;
}
.introduce .person-name {
    margin-top: 16px;
    font-size: 18px;
    color: #2385D5;
    height: 25px;
    line-height: 25px;
    margin-bottom: 0px;
}
.introduce .line-bottom {
    width: 20px;
    height: 4px;
    margin: 0 auto;
    background: #2385D5;
    margin-top: 6px;
}
.introduce .person-job {
    height: 20px;
    line-height: 20px;
    margin-top: 16px;
    color: #595E61;
    font-size: 14px;
    font-weight: 600;
}
.introduce .job-describe {
    height: 30px;
    line-height: 20px;
    margin-top: 2px;
    color: #787D81;
    font-size: 12px;
}
.introduce .detail-more{
    font-size: 12px;
    line-height: 21px;
    padding: 0 15px;
    text-align: left;
}
.introduce .persion-detail {
    display: none;
}
.person-hover{
    border: 1px solid #F5F5F5;
}
.item {
    padding-bottom: 25px;
}
.listContact .listContactTitle{
    text-align: center;
    background: #409EFF none repeat scroll 0 0;
    color: #FFF;
}
.listContact {
    margin: 20px 0;
    padding: 10px;
    margin-left: -40px;
}
.listContact h4, .listContact p {
    line-height: 2;
}
.listContact .listContactInfoItem{
    font-size: 12px;
    padding: 5px 5px 5px 0px;
}
</style>