<template>
    <div class="contain">
        <div class="header">
            <div class="buttons">
                <div class="logo">
                    <img :src="publicPath + 'images/biya/logo.png'" width="100"/>
                </div>
                <el-button icon="el-icon-more" v-if="isMobile" @click="showMenu = !showMenu"></el-button>
            </div>
            <div class="menu">
                <el-menu :mode="isMobile ? 'vertical' : 'horizontal'" active-text-color="#909399"
                    v-show="showMenu" router @select="isMobile ? showMenu = !showMenu : ''">
                    <el-menu-item index="/biya/">首页</el-menu-item>
                    <el-menu-item index="/biya/info?id=about">关于碧雅</el-menu-item>
                    <el-menu-item index="/biya/info?id=product">明星产品</el-menu-item>
                    <el-menu-item index="/biya/info?id=contact">联系我们</el-menu-item>
                </el-menu>
                <el-popover v-if="!isMobile" placement="bottom" width="150" trigger="hover" class="wechatBtn">
                    <img :src="publicPath + 'images/biya/qrcode.jpg'" width="150" />
                    <el-button circle slot="reference">
                        <img :src="publicPath + 'images/biya/wechat.png'" />
                    </el-button>
                </el-popover>
            </div>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="content">
                <img :src="publicPath + 'images/biya/logo.png'" class="logo" width="100"/>
                <div class="text">
                    <h2>广州碧雅医疗保健科技有限公司</h2>
                    <p>联系电话:020-22017996</p>
                    <p>联系地址:广州市高新技术开发区开源大道11号科技企业加速器B8栋2层207房</p>
                    <p>粤ICP备19049350号</p>
                    <p>CopyRight © 2017-2019 all right reserved.</p>
                </div>
                <div class="wechat" v-if="!isMobile">
                    <img :src="publicPath + 'images/biya/qrcode.jpg'" width="100" />
                </div>
            </div> 
        </div>
    </div>
</template>
<style lang="less">
@import './index.less';
</style>
<script>
export default {
    data () {
        return {
            publicPath: null,
            showMenu: !navigator.userAgent.match(/Android|iPhone|iPad|iPod/i),
        }
    },
    mounted () {
        this.publicPath = process.env.BASE_URL;
        document.title = "广州碧雅医疗保健科技有限公司";
    }, 
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>
