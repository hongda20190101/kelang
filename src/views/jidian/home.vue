<template>
    <div class="main">
        <div class="content">
            <div class="banner" :style="'background:url(' + background + ')'">
                <div class="bannerContent">
                    <h2 :data-aos='isLowerIE10 ? "fade-up" : ""'>奇点<br v-if="isMobile" />医药</h2>
                    <div class="buttons" :data-aos='isLowerIE10 ? "fade-up" : ""'>
                        <el-button class="">器官修复与维护</el-button>
                    </div>
                </div>
            </div>
            <div v-for="item in data" :key="item.title" class="item">
                <div class="sectionTitle">
                    <h2 :data-aos='isLowerIE10 ? "fade-up" : ""'>{{item.title}}</h2>
                    <span></span>
                </div>
                <div class="Introduce">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                            <div class="introImg">
                                <img :src="item.image.src" class="image" :data-aos='isLowerIE10 ? "fade-up" : ""'/>
                                <div class="introImgTitle" v-if="item.image.title">{{item.image.title}}</div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                            <div class="introWrap">
                                <div class="introTitle" :data-aos='isLowerIE10 ? "fade-up" : ""' v-html="item.contentTitle"></div>
                                <div class="introContent" :data-aos='isLowerIE10 ? "fade-up" : ""' v-html="item.content"></div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
}
.main .content {

}
.main .content h2 {
    font-size: 36px;
    margin-bottom: 20px;
}
.main .content .banner{
    height: 500px;
    background-size: cover !important;
    color: #fff;
    width: 100%;
    text-align: center;
}
.content .image {
    width: 100%;
    height: 100%;
}
.main .content .banner .bannerContent{
    position: relative;
    top: 12%;
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
.main .content .item {
    padding: 2em 0;
}
.sectionTitle{
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    color: rgb(51, 51, 51);
    font-size: 15px;
    font-weight: 300;
}
.sectionTitle h2 {
    font-weight: 500;
    letter-spacing: 2px;
    margin-top: 0px;
    text-transform: capitalize;
    font-size: 30px !important;
}
.sectionTitle span {
    display: block;
    height: 2px;
    width: 50px;
    background: none 0px 0px repeat scroll rgb(168, 168, 168);
    margin: 20px auto 0px;
    overflow: hidden;
}
.Introduce{
    padding: 0 10% 0 10%;
}
.introImgTitle{
    padding: 15px;
    text-align: center;
    font-size: 20px;
}
.introTitle{
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 48px;
    margin-bottom: 15px;
    font-size: 36px;
    color: #333;
}
.introContent{
    color: #555;
    font-size: 15px;
    font-weight: 300;
    line-height: 26px;
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
  .introWrap{
      margin-left: 30px;
  }
}
</style>
<script>
import datas from  './jidian.json';
export default {
    data () {
        return {
            background: null,
            datas: null,
            data: {}
        }
    },    
    mounted () {
        this.background = `${process.env.BASE_URL}images/jidian/background.jpg`;
        this.data = datas['introduces'];
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