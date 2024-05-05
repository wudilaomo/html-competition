<template>
    <div class="container">
        <vs-navbar v-model="active" center-collapsed>
            <template #left>
                <div class="title-container">
                    <h1 class="main-title">医工融合创新网</h1>
                </div>
            </template>
            <template #default>
                <div class="NavBan">
                    <div class="ui-component" style="position: absolute; top: 15px; left: 350px">
                        <!-- UI组件的内容 -->
                        <vs-navbar-item id="guide">
                            <el-icon style="font-size: 15px"><House /></el-icon>
                            TOP主页
                        </vs-navbar-item>
                        <vs-navbar-item id="docs">
                            <el-icon style="font-size: 15px"><Grid /></el-icon>
                            NEW政策
                        </vs-navbar-item>
                        <vs-navbar-item id="components">
                            <el-icon style="font-size: 15px"><Tickets /></el-icon>
                            SEARCH成果
                        </vs-navbar-item>
                        <vs-navbar-item id="license">
                            <el-icon style="font-size: 15px"><DocumentChecked /></el-icon>
                            SCI文献
                        </vs-navbar-item>
                    </div>
                </div>
            </template>

            <template #right>
                <vs-input v-model="value6" color="#7D33FF" placeholder="Search About 医工融合" class="input-with-icon" @keyup.enter="handleEnter"></vs-input>
                <el-icon><Search /></el-icon>
                <el-button v-if="this.$route.query.identify == '001'" type="primary" color="#95d475" class="button-with-margin" @click="goManager">Manager</el-button>
                <vs-button @click="goUserSignIn">
                    Sign In
                    <el-icon class="user_manager" style="font-size: 15px"><Avatar /></el-icon>
                </vs-button>
            </template>
        </vs-navbar>
        <div class="elc">
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="item in bannerList" :key="item">
                    <div class="banner-item" :style="{ 'background-image': 'url(' + item.imgUrl + ')' }"></div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="cardList">
            <div class="Notice_table">
                <NoticeTable></NoticeTable>
            </div>
            <div class="Notice_table2">
                <NoticeTable2></NoticeTable2>
            </div>
        </div>
    </div>

    <div class="chatgpt-image" @click="goGpt">
        <img src="../../../public/5f1b4ff68012141270051c341fe264bd.jpeg" alt="ChatGPT Interface Image" />
    </div>
</template>

<script>
import ImageSteam from './imageSteam.vue';
import goManager from './manager.vue';
import NoticeTable from './notice_table/notice_table.vue';
import NoticeTable2 from './notice_table/notice_table2.vue';

export default {
    components: {
        ImageSteam,
        NoticeTable,
        NoticeTable2
    },
    name: 'demo',
    data() {
        return {
            active: null,
            value6: '',
            identify: '', // 添加一个变量用来存储iden
            bannerList: [
                {
                    id: '1',
                    imgUrl: '../../public/view.jpeg'
                },
                {
                    id: '2',
                    imgUrl: '../../public/technology.jpeg'
                },
                {
                    id: '3',
                    imgUrl: '../../public/mico.jpeg'
                },
                {
                    id: '4',
                    imgUrl: '../../public/meeting.jpg'
                },
                {
                    id: '5',
                    imgUrl: '../../public/medical.jpg'
                },
                {
                    id: '6',
                    imgUrl: '../../public/na.png'
                }
            ]
        };
    },
    mounted() {
        // 在组件挂载后执行的代码
    },
    created() {
        this.identify = this.$route.query.identify;
        console.log(this.$route.query.identify);
    },
    methods: {
        async queryUserInfo(userId) {
            const userInfo = await user.getUserInfo({ userId });
            this.userInfo = userInfo[0];
        },

        handleEnter(value6) {
            // 在这里执行跳转操作，比如导航到搜索结果页面
            this.$router.push('/search');
        },
        goManager() {
            this.$router.push('/Manager');
        },
        goGpt() {
            this.$router.push('/manager/GPT');
        },
        goUserSignIn() {
            this.$router.push('/user');
        }
    }
};
</script>

<style scoped>
.elc {
    position: absolute;
    top: 150px;
    width: 1500px;
    height: 200px;
}
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.banner-item {
    margin: 0;
    height: 300px;
    border-radius: 15px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.container {
    background-color: #f4f4f4;
    :rgb(73, 80, 96);
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
    width: 100px;
    border-radius: 50%;
    position: fixed;
    bottom: 50px;
    right: 30px;
    z-index: 9999; /* 确保图片在其他内容上方显示 */
    transition: all 0.5s;
}

.chatgpt-image img {
    width: 100%; /* 设置图片宽度 */
    height: auto; /* 根据宽度自动调整高度 */
    border-radius: 50%; /* 圆形边框 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
.chatgpt-image:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
    cursor: pointer;
    width: 110px;
}
.vs-navbar {
    border-radius: 20px; /* 可选：添加边框圆角 */
    padding: 5px; /* 可选：添加内边距 */
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.button-with-margin {
    margin-left: 20px; /* 调整按钮与右侧组件的间距为 20px，根据需要调整间距 */
}
.input-with-icon {
    display: flex;
    align-items: center;
}

.search-icon {
    margin-left: 10px; /* 调整搜索图标距离输入框的间距，根据需要调整 */
}

.cardList {
    width: 85vw;
    height: 40vh;
    position: absolute;
    bottom: 50px;

    display: flex;
    justify-content: space-around;
}

.Notice_table {
    width: 47%;
    background-color: white; /* 调整背景颜色 */
    padding: 20px; /* 调整内边距 */
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* 添加底部阴影效果 */
    border-radius: 15px;
}
.Notice_table2 {
    width: 47%;
    background-color: white; /* 调整背景颜色 */
    padding: 20px; /* 调整内边距 */
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* 添加底部阴影效果 */
    border-radius: 15px;
}
</style>
