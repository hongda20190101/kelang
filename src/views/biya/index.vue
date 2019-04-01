<template>
    <div class="contain">
        <div class="header">
            <div class="logo">
                <img :src="publicPath + 'images/biya/logo.png'" width="100"/>
            </div>
            <el-button icon="el-icon-more" v-if="isMobile" @click="showMenu = !showMenu"></el-button>
            <div class="menu">
                <el-menu :mode="isMobile ? 'vertical' : 'horizontal'" active-text-color="#909399"
                    v-show="showMenu" router @select="isMobile ? showMenu = !showMenu : ''">
                    <el-menu-item index="/biya/">首页</el-menu-item>
                    <el-menu-item index="/biya/info?id=about">关于碧雅</el-menu-item>
                    <el-menu-item index="/biya/info?id=products">明星产品</el-menu-item>
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
                    <h2>广州科琅医疗科技有限公司</h2>
                    <p>联系电话:020-22017996</p>
                    <p>联系地址:广州市高新技术开发区开源大道11号科技企业加速器B8栋3层</p>
                    <p>苏ICP备15008XXX号</p>
                    <p>CopyRight © 2018-2019 all right reserved.</p>
                </div>
                <div class="wechat">
                    <img :src="publicPath + 'images/biya/qrcode.jpg'" width="100" />
                    <p>微信公众号</p>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            publicPath: null,
            showMenu: !navigator.userAgent.match(/Android|iPhone|iPad|iPod/i),
        }
    },
    mounted () {
        this.publicPath = process.env.BASE_URL
    }, 
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>
<style lang="less">
.contain {
    .header {
    text-align: center;
        background: #fff;
        border-bottom: 2px solid darken(#F8C6D1, 5%);
        .logo {
            padding: 20px;
            border-bottom: 12px solid darken(#F8C6D1, 5%);
        }
        .menu {
            max-width: 1024px;
            position: relative;
            margin: 0 auto;
            .el-menu {
                display: inline-block;
                border-bottom: none;
                &-item{
                    font-size: 16px;
                    border-bottom: none !important;
                    &:hover {
                        color: darken(#F8C6D1, 5%);
                    }
                }
            }
            .wechatBtn {
                position: absolute;
                right: 0;
                top: 10px;
                opacity: 0.5;
                .el-button {
                    &:hover {
                        border: 1px solid #DCDFE6;
                        background: #fff;
                    }
                }
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}
.footer {
    border-top: 2px solid darken(#F8C6D1, 5%);
    border-bottom: 30px solid darken(#F8C6D1, 5%);
    padding: 30px;
    .content {
        max-width: 1024px;
        margin: 0 auto;
        color: #8d8d8d;
        .logo {
            display: inline-block;
            margin: 10px 60px 0 0;
            vertical-align: top;
        }
        .text {
            margin-right: 60px;
            display: inline-block;
            line-height: 1.5;
            padding: 10px 0;
            h2 {
                color: #000;
            }
        }
        .wechat {
            float: right;
            text-align: center;
            font-size: 12px;
        }
    }
}
.widgt {
    margin: 30px 0;
    .header {
        width: 100%;
        border-bottom: 2px solid darken(#F8C6D1, 5%);
        height: 25px;
        overflow: visible;
        margin: 30px 0;
        .title {
            margin: 0 auto;
            line-height: 50px;
            max-width: 1024px;
            span {
                float: left;
                height: 50px;
                line-height: 50px;
                background-color: #fff;
                font-size: 24px;
                color: darken(#F8C6D1, 5%);
                font-weight: bold;
                padding: 0 10px;
            }
        }
    }
    .introduce {
        max-width: 1024px;
        margin: 0 auto;
    }
    .logo {
        padding: 30px 0;
        text-align: center;
    }
    .pure {
        text-align: center;
        width: 33.3333%;
        display: inline-block;
        margin-top: 30px;
        .image {
            position: relative;
            overflow: hidden;
            margin: 0 auto 20px auto;
            width: 80%;
            img {
                width: 100%;
            }
            .mask {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                padding: 10px;
                box-sizing: border-box;
                opacity: 0;
                transition: .4s;
                transform: scale(2);
                p {
                    font-size: 14px;
                    color: #fff;
                    text-align: left;
                    line-height: 1.5;
                }
                &:hover {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
        h4 {
            font-size: 24px;
            color: darken(#F8C6D1, 5%);
            margin-bottom: 30px;
        }
        p {
            font-size: 18px;
            color: #8d8d8d;
        }
    }
}
</style>
