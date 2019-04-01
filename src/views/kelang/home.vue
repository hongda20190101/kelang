<template>
    <div class="main" :style="'background:url(' + background + ')'">
        <div class="content">
            <h2 :data-aos='isLowerIE10 ? "fade-up" : ""'>广州科琅医疗科技<br v-if="isMobile" />有限公司</h2>
            <div class="buttons" :data-aos='isLowerIE10 ? "fade-up" : ""'>
                <router-link to="/kelang/profile?id=scientific">
                    <el-button class="">科研转化和项目申报服务</el-button>
                </router-link>
                <router-link to="/kelang/profile?id=consultation">
                    <el-button class="">医疗器械临床试验技术服务</el-button>
                </router-link>
                <router-link to="/kelang/profile?id=medical">
                    <el-button class="">注册体系技术服务</el-button>
                </router-link>
            </div>
        </div>
        <div class="mask"></div>        
    </div>
</template>
<style scoped>
.main {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
}
.main .content {
    position: absolute;
    z-index: 1;
    top: 10%;
    color: #fff;
    left: 50%;
    width: 100%;
    margin-left: -50%;
    text-align: center;
}
.main .content h2 {
    font-size: 36px;
    margin-bottom: 20px;
}
.main .content .buttons {
    width: 100%;
}
.main .content .el-button {
    width: 80%;
    background: none;
    color: #fff;
    margin: 1em;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
}
.main .mask {
    background: #000;
    opacity: 0.7;
    width: 100%;
    height: 100%;
}
@media screen and (min-width: 900px) {
  .main .content h2 {
      font-size: 48px;
  }
  .main .content .el-button {
      font-size: 22px;
      width: 300px;
  }
  .main .content {
      top: 20%;
  }
  .main .content .buttons {
      width: 1200px;
      margin: 0 auto;
      padding-top: 20px;
  }
}
</style>
<script>
export default {
    data () {
        return {
            background: null,
        }
    },    
    mounted () {
        this.background = `${process.env.BASE_URL}images/kelang/background.jpg`;
        document.getElementsByClassName('main')[0].style.height = `${window.innerHeight - 62}px`;
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