<template>
    <div class="container">
        <div class="navibar">
            <div class="logo">
                <img src="../../../../public/net.png" alt="logo" />
            </div>
            <div class="button">
                <vs-button type="border" @click="handleButtonClick(10000)">关于我们</vs-button>
                <vs-button @click="goHome">
                    <i class="bx bx-home-alt" />
                    Home
                </vs-button>
            </div>
        </div>
        <div class="search">
            <div class="search_i">
                <input class="searchInput"  v-model="keyWord" type="text" placeholder="Search for someting...." @keyup.enter="search" />
                <vs-select v-model="value" placeholder="请选择" filter default-first-option style="border-radius: 10px">
                    <vs-option label="Vuesax" value="1">医学</vs-option>
                    <vs-option label="Vue" value="2">工学</vs-option>
                    <vs-option label="Javascript" value="3">理学</vs-option>
                    <vs-option label="Sass" value="4">管理学</vs-option>
                    <vs-option label="Typescript" value="5">量子力学</vs-option>
                    <vs-option label="Webpack" value="6">高等数学</vs-option>
                    <vs-option label="Nodejs" value="7">计算机科学</vs-option>
                </vs-select>
                <vs-button size="large" :active="active == 1" @click="active = 1">Search</vs-button>
            </div>
        </div>
        <div class="body">
            <el-tabs type="border-card">
                <el-tab-pane label="站内搜索">站内搜索</el-tab-pane>
                <el-tab-pane label="百度搜索"><a style="color: blue; text-decoration: underline" href="www.baidu.com" target="_blank">百度搜索</a></el-tab-pane>
                <el-tab-pane label="Google搜索"><a style="color: blue; text-decoration: underline" href="www.google.com" target="_blank">谷歌搜索</a></el-tab-pane>
                <el-tab-pane label="搜狗搜索"><a style="color: blue; text-decoration: underline" href="www.sogou.com" target="_blank">搜狗搜索</a></el-tab-pane>
            </el-tabs>
            <div>
                <el-row>
                    <el-col :span="18">
                        <div style="height: 30px; width: 70%; position: absolute; top: 0; left: 0; color: #fff">Fixed Top Block</div>
                        <div ref="containerRef" style="height: 800px; overflow-y: auto">
                            <div class="part1" id="part1" style="height: 300px; background: rgba(255, 0, 0, 0.02); margin-top: 30px">
                                <div class="center1">
                                    <vs-card type="3" style="width: 500px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                                <div style="width: 10%"></div>
                                <div class="center2">
                                    <vs-card type="3" style="width: 600px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                            </div>
                            <div class="part2" id="part2" style="height: 300px; background: rgba(0, 255, 0, 0.02); margin-top: 30px">
                                <div class="center1">
                                    <vs-card type="3" style="width: 500px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                                <div style="width: 10%"></div>
                                <div class="center2">
                                    <vs-card type="3" style="width: 600px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                            </div>
                            <div class="part3" id="part3" style="height: 300px; background: rgba(0, 0, 255, 0.02); margin-top: 30px">
                                <div class="center1">
                                    <vs-card type="3" style="width: 500px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                                <div style="width: 10%"></div>
                                <div class="center2">
                                    <vs-card type="3" style="width: 600px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                            </div>
                            <div class="part4" id="part4" style="height: 300px; background: rgba(0, 0, 255, 0.02); margin-top: 30px">
                                <div class="center1">
                                    <vs-card type="3" style="width: 500px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                                <div style="width: 10%"></div>
                                <div class="center2">
                                    <vs-card type="3" style="width: 600px">
                                        <template #title>
                                            <h3>Live a life of madness</h3>
                                        </template>
                                        <template #img>
                                            <img src="../../../../public/na.png" alt="" />
                                        </template>
                                        <template #text>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </template>
                                        <template #interactions>
                                            <vs-button color="danger" icon>
                                                <i class="bx bx-heart" />
                                            </vs-button>
                                            <vs-button class="btn-chat" type="shadow">
                                                <i class="bx bx-chat" />
                                                <span class="span">54</span>
                                            </vs-button>
                                        </template>
                                    </vs-card>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <el-anchor :container="containerRef" direction="vertical" type="default" :offset="30" @click="handleClick">
                            <el-anchor-link href="#part1" title="part1" />
                            <el-anchor-link href="#part2" title="part2" />
                            <el-anchor-link href="#part3" title="part3" />
                            <el-anchor-link href="#part4" title="part4" />
                        </el-anchor>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="feet">
            <a>广东医科大学</a>
            <a>网站设计大赛作品 Written by：Monica</a>
            <a>欢迎您的访问</a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import information from '../../../api/user';

import { VsNotification } from 'vuesax-alpha';


export default {
    data() {
        return{
            keyWord:'',
            title:'',
            content:'',
            picture:'',
            link:''



        };

    },
    methods: {
        handleButtonClick(duration) {
            VsNotification({
                duration,
                progressAuto: true,
                title: 'About us关于我们',
                content: '我们是来自2023届生工学院的小白，队长是一个来自大数据的，爱打CS但很菜。第一次制作网站请多多包容!爱来自👉——骑小电驴浪迹天涯'
            });
        },
        goHome() {
            this.$router.push('./demo');
        }
    }
};
</script>

<style scoped>
.container {
    background-color: #f4f4f4;
    height: 1500px; /* 设置容器高度为视口高度 */
    overflow-y: auto; /* 启用垂直滚动条 */
}
.navibar {
    display: flex;

    width: 100vw;
    height: 150px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: white;
}
.button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.logo {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.search {
    width: 100%;
    height: 200px;
}
.search_i {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.searchInput {
    width: 900px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    padding-left: 20px;
}
.drawer {
    height: 50px;
}
.body {
    position: relative;
    width: 80%;
    height: 1200px;
    background-color: white;
    border-radius: 10px;
}
.feet {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.part1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.part2 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.part3 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.part4 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.vs-button {
    margin: 10px;
}
i {
    margin: 2px;
    font-size: 1.2rem;
    transform-origin: center;
    &.b-r {
        transform: rotate(90deg);
    }
    &.t-r {
        transform: rotate(0deg);
    }
    &.t-l {
        transform: rotate(-90deg);
    }
    &.b-l {
        transform: rotate(-180deg);
    }
}
</style>
