<template>
    <el-container>
        <el-header height="auto">
            <div class="header">
                <div class="buttons">
                    <img :src="publicPath + 'images/jidian/logo.png'" />
                    <el-button icon="el-icon-more" v-if="isMobile" @click="showMenu = !showMenu"></el-button>
                </div>
                <el-collapse-transition>
                    <el-menu :mode="isMobile ? 'vertical' : 'horizontal'" v-show="showMenu" router :default-active="activeIndex" @select="isMobile ? showMenu = !showMenu : ''">
                        <el-menu-item index="/jidian/">首页</el-menu-item>
                        <el-menu-item index="/jidian/profile?id=product">产品中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">新闻中心</template>
                            <el-menu-item index="/jidian/profile?id=news&newid=0">smagister活器官培训系统发布会</el-menu-item>
                            <el-menu-item index="/jidian/profile?id=news&newid=1">奇点医药勇夺中国创新创业大赛生物医药行业冠军</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="/jidian/profile?id=contactUs">联系我们</el-menu-item>
                    </el-menu>
                </el-collapse-transition>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer height="auto">
            <div class="footer-top">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                        <div class="single_address">
                            <i class="el-icon-phone"></i>
                            <p>宓庆宁</p>
                            <p>020-22017996</p>
                            <p>18502721829（微信同号）</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                        <div class="single_address">
                            <i class="el-icon-location-outline"></i>
                            <p>广州市黄埔区开源大道11号科技企业加速器B8栋三楼</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                        <div class="single_address">
                            <i class="el-icon-message"></i>
                            <p>Info@nurjahan.com</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                        <div class="single_address">
                            <i class="el-icon-time"></i>
                            <p>周一 - 周五: 09.00 - 17.15</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="footer-bottom">
                <p>奇点医疗<br>粤ICP备19095553号</p>
            </div>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    data () {
        return {
            activeIndex: null,
            showMenu: null,
            publicPath: null
        }
    },
    mounted () {
        let id = this.$route.query.id || '';
        this.activeIndex = id ? `/kelang/profile?id=${id}` : '/kelang/';
        this.publicPath = process.env.BASE_URL;
        this.showMenu = !navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        document.title = "奇点医药科技（广州）有限公司";
    },
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>
<style lang="less" scoped>
.el-main {
    background: #f9f9f9;
    padding: 0;
}
.el-header{
    background: #FFF;
    padding: 0;
}
.el-header {
    border-bottom: solid 1px #e6e6e6;
    .header {
        max-width: 1024px;
        margin: 0 auto;
        .buttons {
            position: relative;
            display: inline-block;
            img {
                height: 55px;
            }
            .el-button {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                border: none;
                border-radius: 0;
                background: #333;
                color: #fff;
                &:hover, &:active {
                    background: darken(#333, 10%);
                }
            }
        }
        .el-menu.el-menu--horizontal {
            float: right;
            border-bottom: none;
        }
    }
}
.el-footer {
    text-align: center;
    color: #555;
    font-size: 15px;
    background-color: #fff;
    padding-bottom: 0px;
}
.footer-top{
    padding: 60px 0;
}
.footer-bottom{
    background-color: #141c2c;
    padding: 10px 0;
}
.single_address i {
    background: #2a80b9 none repeat scroll 0 0;
    border-radius: 30px;
    color: #fff;
    font-size: 24px;
    height: 55px;
    line-height: 55px;
    margin-bottom: 10px;
    width: 55px;
}
@media screen and (max-width: 900px) {
    .el-header .header .buttons {
        display: block;
        img {
            height: 40px;
            padding: 0.2em 0.5em;
        }
    }
    .footer-top {
        padding: 0;
    }
    .single_address {
        padding:1.5em 0;
    }
}
</style>