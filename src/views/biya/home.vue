<template>
    <div class="main">
        <el-carousel indicator-position="none" type="card" height="350px">
            <el-carousel-item  v-for="item in 3" :key="item"> 
                <img :src="publicPath + 'images/biya/carousel.jpg'" />  
            </el-carousel-item>
        </el-carousel>
        <div class="widgt">
            <div class="header">
                <div class="title">
                    <span>品牌简介</span>
                </div>
            </div>
            <div class="introduce">
                <div class="logo">
                    <img :src="publicPath + 'images/biya/logo.png'" width="200" >
                </div>
                <p style="font-size: 18px;color: #8d8d8d;line-height: 30px;">
                    基于中医古籍内对于创伤愈合、皮肤收敛的基础理论和临床实例而设计配方，精选古书的名方、名药，挑选地道药材，通过长期实验，将多味药材有效组方；<br>
                    传统与现代技术相融合，萃取传统中药材中的活性成分，结合生物活性因子，从根本上解决皮肤问题；<br>
                    凝炼特殊提取工艺，使从中药材中萃取得到的有效成分在保持高活性的基础上具有更强的皮肤亲和能力，深入皮肤底层修复焕活细胞。 <br>
                    有着近二十年专业经验，毕业于药学高等学府中国药科大学的专家领衔美妆、临床及应用化学等其他相关行业人员组成。
                </p>
                <div class="pure">
                    <h4>中药成分</h4>
                    <p>人参，红花，杏仁，川芎，当归，土贝母</p>
                </div>
                <div class="pure">
                    <h4>现代药理学机理</h4>
                    <p>刺激新糖蛋白，重建基质</p>
                </div>
                <div class="pure">
                    <h4>权威检测</h4>
                    <p>中科检测 | 安全保障 | 生产合格</p>
                </div>
            </div>
        </div>
        <div class="widgt">
            <div class="header">
                <div class="title">
                    <span>产品简介</span>
                </div>
            </div>
            <div class="introduce">
                <div class="pure" v-for="index in 3" :key="index">
                    <div class="image">
                        <img :src="publicPath + 'images/biya/product_' + index + '.jpg'" />
                    </div>
                    <p>XXXX</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            publicPath: null
        }
    },
    mounted () {
        this.publicPath = process.env.BASE_URL
    }
}
</script>
