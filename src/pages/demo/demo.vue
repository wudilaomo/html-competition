<template>
    <div class="container">
        <vs-navbar v-model="active" center-collapsed>
            <template #left>
                <img src="/public/gdmu.jpg" class="logo" alt="image1" />
                <img src="/public/yigong.jpeg" class="title" />
            </template>
            <template #default>
                <div class="NavBan">
                    <div class="ui-component" style="position: absolute; top: 15px; left: 350px">
                        <!-- UI组件的内容 -->
                        <vs-navbar-item id="guide">TOP主页</vs-navbar-item>
                        <vs-navbar-item id="docs">NEW政策</vs-navbar-item>
                        <vs-navbar-item id="components">SEARCH成果</vs-navbar-item>
                        <vs-navbar-item id="license">SCI文献</vs-navbar-item>
                    </div>
                </div>
            </template>

            <template #right>
                <vs-checkbox v-model="option">Option</vs-checkbox>
                <vs-input v-model="value6" color="#7D33FF" placeholder="Search About 医工融合" />
                <vs-button>登录</vs-button>
            </template>
        </vs-navbar>
        <div class="elc">
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="item in bannerList" :key="item">
                    <div class="banner-item" :style="{ 'background-image': 'url(' + item.imgUrl + ')' }"></div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="column-card1">
        <img src="../../../public/yigong.jpeg" class="card-image" alt="Column Image">
        <div class="card-content">
            <h2 class="card-title">政策新闻</h2>
            <p class="card-description">关于医工融合</p>
            <a href="#" class="read-more">阅读更多</a>
        </div>
    </div>
    <div class="column-card2">
        <img src="../../../public/yigong.jpeg" class="card-image" alt="Column Image">
        <div class="card-content">
            <h2 class="card-title">研究成果</h2>
            <p class="card-description">文献库</p>
            <a href="#" class="read-more">阅读更多</a>
        </div>
    </div>
    <div class="chatgpt-image">
    <a href="">
        <img src="../../../public/5f1b4ff68012141270051c341fe264bd.jpeg" alt="ChatGPT Interface Image">
    </a>
</div>
</template>

<script>
import ImageSteam from './imageSteam.vue';

export default {
    components: {
        ImageSteam
    },
    name: 'demo',
    data() {
        return {
            userId: '',
            userInfo: {
                userId: '',
                userName: '',
                gender: '',
                age: ''
            },
            bannerList: [
                {
                    id: '1',
                    imgUrl: '../../public/AI.jpeg'
                },
                {
                    id: '2',
                    imgUrl: '../../public/AI.jpeg'
                },
                {
                    id: '3',
                    imgUrl: '../../public/AI.jpeg'
                },
                {
                    id: '4',
                    imgUrl: '../../public/AI.jpeg'
                },
                {
                    id: '5',
                    imgUrl: '../../public/AI.jpeg'
                },
                {
                    id: '6',
                    imgUrl: '../../public/AI.jpeg'
                }
            ]
        };
    },
    mounted() {
        // 在组件挂载后执行的代码
    },
    methods: {
        async queryUserInfo(userId) {
            const userInfo = await user.getUserInfo({ userId });
            this.userInfo = userInfo[0];
        }
    }
};

</script>

<style scoped>
.logo {
    width: 75px; /* 设置宽度 */
    height: 70px; /* 设置高度 */
}
.title {
    width: 150px;
    height: 70px;
}
.elc {
    position: absolute;
    top: 150px;
    width: 1300px;
    height: 200px;
}
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.banner-item {
    margin: 0;
    height: 300px;
    border-radius: 15px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.container{
    background: linear-gradient(to bottom, #0072ff, #00c6ff, #00ffcc, #00ff99);
    /* 设置多种颜色值来创建渐变 */
    margin: 0;
    padding: 0;
    position: relative; /* 设置容器为相对定位 */
}
.column-card1 {
    width: 500px;
    border: 5px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 25px;
    left: 100px;    
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.card-description {
    color: #666;
    line-height: 1.5;
}

.read-more {
    display: inline-block;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    margin-top: 10px;
}
.column-card2 {
    width: 500px;
    border: 5px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 25px;
    left: 700px;    
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.card-description {
    color: #666;
    line-height: 1.5;
}

.read-more {
    display: inline-block;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    margin-top: 10px;
}
.chatgpt-image {
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 9999; /* 确保图片在其他内容上方显示 */
}

.chatgpt-image img {
    width: 100px; /* 设置图片宽度 */
    height: auto; /* 根据宽度自动调整高度 */
    border-radius: 50%; /* 圆形边框 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
</style>
