<template>
    <div class="container">
        <div class="hidden">
            <vs-sidebar v-model="active" absolute open>
                <template #logo>
                    <h1>医工融合创新网</h1>
                </template>
                <vs-sidebar-item id="home" @click="go_manager_table">
                    <template #icon>
                        <i class="bx bx-home" />
                    </template>
                    网页审核
                </vs-sidebar-item>
                <vs-sidebar-item id="market">
                    <template #icon>
                        <i class="bx bx-grid-alt" />
                    </template>
                    内容设置
                </vs-sidebar-item>
                <vs-sidebar-item id="Music">
                    <template #icon>
                        <i class="bx bxs-music" />
                    </template>
                    用户设置
                </vs-sidebar-item>
                <vs-sidebar-group>
                    <template #header>
                        <vs-sidebar-item arrow @click="goApi">
                            <template #icon>
                                <i class="bx bx-group"  />
                            </template>
                            网站设置
                        </vs-sidebar-item>
                    </template>

                    <vs-sidebar-item id="Instagram">
                        <template #icon>
                            <i class="bx bxl-instagram" />
                        </template>
                        router设置
                    </vs-sidebar-item>
                    <vs-sidebar-item id="twitter">
                        <template #icon>
                            <i class="bx bxl-twitter" />
                        </template>
                        用户访问设置
                    </vs-sidebar-item>
                    <vs-sidebar-item id="Facebook">
                        <template #icon>
                            <i class="bx bxl-facebook" />
                        </template>
                        跳转设置
                    </vs-sidebar-item>
                </vs-sidebar-group>
                <vs-sidebar-group>
                    <template #header>
                        <vs-sidebar-item arrow>
                            <template #icon>
                                <i class="bx bx-code-alt" />
                            </template>
                            系统设置
                        </vs-sidebar-item>
                    </template>

                    <vs-sidebar-item id="github">
                        <template #icon>
                            <i class="bx bxl-github" />
                        </template>
                        网络标题
                    </vs-sidebar-item>
                    <vs-sidebar-item id="codepen">
                        <template #icon>
                            <i class="bx bxl-codepen" />
                        </template>
                        ChatGPT接口
                    </vs-sidebar-item>
                    <vs-sidebar-item id="discord">
                        <template #icon>
                            <i class="bx bxl-discord" />
                        </template>
                        推送邮箱发布
                    </vs-sidebar-item>
                </vs-sidebar-group>

                <vs-sidebar-item id="chat">
                    <template #icon>
                        <i class="bx bx-chat" />
                    </template>
                    关于我们
                </vs-sidebar-item>
                <template #footer>
                    <vs-row justify="space-between" style="display: flex; align-items: center; justify-content: space-between">
                        <el-button @click="Back" type="text" style="flex: 1">
                            <el-icon style="font-size: 40px"><HomeFilled /></el-icon>
                        </el-button>
                        <el-button @click="handleButtonClick" type="text">
                            <el-icon style="font-size: 40px; margin-left: 10px; flex: 1; text-align: center"><Promotion /></el-icon>
                        </el-button>
                    </vs-row>
                </template>
            </vs-sidebar>
        </div>
        <div class="manger_table">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { routerKey } from 'vue-router';
import manager_table from './manager_table/manager_table.vue';
import manager_table2 from './manager_table/manager_table2.vue';
import demo from './demo.vue';
import api from './manager_table/Apisetting.vue'

const router = useRouter();

const active = ref('home');

interface User {
    date: string;
    name: string;
    address: string;
}

const search = ref('');
const filterTableData = computed(() => tableData.filter((data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())));
const handleEdit = (index: number, row: User) => {
    console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
    console.log(index, row);
};

function go_manager_table() {
    router.push({
        name: 'manager_table'
    });
}
function Back() {
    router.push({
        name: 'demo'
    });
}
function goApi(){
    router.push({
        name:'api'
    });
}
const page = ref(1);
</script>

<style scoped>
.container {
    display: flex;
}

.hidden {
    flex: 0 0 200px; /* 固定侧边栏宽度 */
    background-color: lightgray;
}

.manger_table {
    /* 将内容区域放到侧边栏前面 */
    order: 1;
    width: 1300px;
    flex: 1; /* 填充剩余空间 */
    padding: 20px;
    margin-left: 250px; /* 左边距 */
    margin-top: -100px;
}

.center_con-pagination {
    order: 3; /* 将分页栏放在内容区域下面 */
    width: 100%; /* 让分页栏占据整个宽度 */
    padding: 10px;
    margin-left: 1600px;
    bottom: 50px;
}

.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}
</style>
