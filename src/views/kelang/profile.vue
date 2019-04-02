<template>
    <el-row :type="!isMobile ? 'flex' : ''" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="14" :lg="12" :xl="12" class="content">
            <el-menu mode="vertical" router :default-active="active" v-if="!isMobile && showMenu" class="listMenu" :data-aos='isLowerIE10 ? "fade-right" : ""'>
                <el-menu-item index="/kelang/profile?id=scientific">科研转化服务</el-menu-item>
                <el-menu-item index="/kelang/profile?id=project">项目申报服务</el-menu-item>
                <el-menu-item index="/kelang/profile?id=consultation">医疗器械临床试验咨询服务</el-menu-item>
                <el-menu-item index="/kelang/profile?id=medical">医疗器械注册体系咨询服务</el-menu-item>
                <div class="listContact">
                    <h4 class="listContactTitle">联系方式</h4>
                    <p v-for="contactInfo in contactInfos" :key="contactInfo" class="listContactInfoItem">{{contactInfo}}</p>
                </div>
            </el-menu>
            <div v-for="item in data" :key="item.title" class="item">
                <h3 :data-aos='isLowerIE10 ? "fade-up" : ""'>{{item.title}}</h3>
                <img :src="publicPath + img" class="image" v-for="img in item.image" :key="img" :data-aos='isLowerIE10 ? "fade-up" : ""'/>
                <div :class="active != '/kelang/profile?id=contactUs' ? 'text' : 'ctext'" v-html="item.content" v-if="item.content" :data-aos='isLowerIE10 ? "fade-up" : ""'></div>
                <div v-html="item.multiContent" v-if="item.multiContent" :data-aos='isLowerIE10 ? "fade-up" : ""'></div>
                <div v-if="item.persons" :data-aos='isLowerIE10 ? "fade-up" : ""'>
                    <el-row v-for="personItems in item.persons" :key="personItems" :type="isMobile ? '' : 'flex'" class="row-bg" justify="center">
                        <el-col v-for="person in personItems.person" :key="person.name" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                            <div class="introduce">
                                <div class="img-120">
                                    <img class="img-w100" :src="person.image">
                                </div>
                                <p class="person-name">{{person.name}}</p>
                                <p class="line-bottom"></p>
                                <p class="person-job">{{person.job}}</p>
                                <p class="job-describe">{{person.describe}}</p>
                                <div class="persion-detail">
                                    <div class="detail-more" v-html="person.detail"></div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import datas from  './kelang.json';

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
    mounted () {
        let id = this.$route.query.id || '';
        this.data = datas[id];
        this.contactInfos = datas.contacts[id];
        this.active = `/kelang/profile?id=${id}`;
        this.publicPath = process.env.BASE_URL;
        this.showMenu = ['scientific', 'project', 'medical', 'consultation'].indexOf(id) > -1;
    },
    watch: {
        '$route' (to) {
            let id = to.query.id;
            this.data = datas[id];
            this.active = `/kelang/profile?id=${id}`;
            this.showMenu = ['scientific', 'project', 'medical', 'consultation'].indexOf(id) > -1;
            this.contactInfos = datas.contacts[id]
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
<style lang="less" scoped>
.row-bg {
    overflow: hidden;
}
.content {
    box-sizing: border-box;
    padding: 20px;
    .image {
        width: 100%;
        height: 100%;
    }
    h3 {
        margin: 0;
        border-left: 5px solid #409EFF;
        padding: 0.5em;
        margin: 2em 0;
    }
}
.content 
.content 
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
.listMenu {
    position: fixed;
    top: 11%;
    width: 200px;
    margin-left: -220px;
    .is-active {
        outline: 0;
        background-color: #ecf5ff;
    }
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
.listContact {
    margin: 20px 0;
    color: #409eff;
    border: 1px solid rgba(64,158,255,.2);
    background-color: rgba(64,158,255,.1);
    padding: 10px;
    margin-left: -40px;
}
.listContact h4, .listContact p {
    line-height: 2;
}
.listContact .listContactInfoItem{
    font-size: 12px;
}
</style>