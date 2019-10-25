<template>
    <el-container>
        <el-header height="auto">
            <div class="header">
                <div class="buttons">
                    <img :src="publicPath + 'images/kelang/logo.png'" />
                    <el-button icon="el-icon-more" v-if="isMobile" @click="showMenu = !showMenu"></el-button>
                </div>
                <el-collapse-transition>
                    <el-menu :mode="isMobile ? 'vertical' : 'horizontal'" v-show="showMenu" router :default-active="activeIndex" @select="isMobile ? showMenu = !showMenu : ''">
                        <el-menu-item index="/kelang/">首页</el-menu-item>
                        <el-menu-item index="/kelang/profile?id=company">公司介绍</el-menu-item>
                        <el-submenu index="#">
                            <template slot="title">项目介绍</template>
                            <el-menu-item index="/kelang/profile?id=scientific">科研转化服务</el-menu-item>
                            <el-menu-item index="/kelang/profile?id=project">项目申报服务</el-menu-item>
                            <el-menu-item index="/kelang/profile?id=consultation">医疗器械临床试验技术服务</el-menu-item>
                            <el-menu-item index="/kelang/profile?id=medical">医疗器械注册体系技术服务</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="/kelang/profile?id=teamResources">团队资源</el-menu-item>
                        <el-menu-item index="/kelang/profile?id=contactUs">联系我们</el-menu-item>
                    </el-menu>
                </el-collapse-transition>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer height="auto">
            <p>科琅医疗<br>粤ICP备19038631号</p>
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
        document.getElementsByClassName('el-main')[0].style.minHeight = `${window.innerHeight - 62}px`;
        document.title = "广州科琅医疗科技有限公司";
    },
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>
<style lang="less">
.el-header, .el-main {
    background: #fff;
    padding: 0;
}
.el-header {
    border-bottom: solid 1px #e6e6e6;
    .header {
        max-width: 1024px;
        margin: 0 auto;
        .buttons {
            position: relative;
            img {
                height: 55px;
            }
            .el-button {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                border-radius: 0;
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
    color: #fff;
    font-size: 15px;
    background-color: #141c2c;
    padding: 10px 0;
}
</style>