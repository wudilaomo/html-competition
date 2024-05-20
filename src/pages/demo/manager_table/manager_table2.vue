<template>
    <div class="next_page">
        <el-button type="primary" @click="goManagerTable1">
            <el-icon class="el-icon--right"><ArrowLeft /></el-icon>
            最新政策审核
        </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" prop="content_id" />
        <el-table-column label="研究文献内容" prop="content" />
        <el-table-column label="时间" prop="time" />
        <el-table-column label="来源" prop="address" />
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="contentdelete(scope.row.content)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="overlay" v-if="showAlert">
        <vs-alert style="width: 80%">
            <template #title>⚠是否删除？</template>
            <h1>请注意⚠  删除该行数据</h1>
            <h1>不可撤回</h1>
            Tips：若出现错误删除导致数据丢失，请联系管理员进行数据修改！

            <template #footer>
                <vs-button @click="cancel">Cancel</vs-button>
                <vs-button @click="delete1(this.content)">接受删除Accept</vs-button>
            </template>
        </vs-alert>
    </div>

    <div class="centercon_pagination">
        <vs-pagination v-model:currentPage="currentPage" :layout="['total', 'prev', 'pager', 'next', 'jumper', 'sizes']" :total="50" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ManagerTable1 from './manager_table.vue';
import information from '../../../api/user';
import { VsNotification } from 'vuesax-alpha';

export default {
    data() {
        return {
            search: '',
            tableData: [],
            currentPage: 1,
            pageSize: 20,
            showAlert: false,
            content: ''
        };
    },
    methods: {
        identify(duration) {
            VsNotification({
                duration,
                progressAuto: true,
                title: '删除成功！',
                content: '若出现错误删除的情况，请联系数据库管理员进行恢复！👉 Moncia:)'
            });
        },
        async getDoc() {
            const items = await information.getDoc();
            this.tableData = items;
        },
        goManagerTable1() {
            this.$router.push({ name: 'manager_table' });
        },
        contentdelete(content) {
            console.log('6666666666666666666666666666');
            this.content = content;
            this.showAlert = true;
        },
        cancel() {
            this.showAlert = false;
        },
        async delete1(content) {
            console.log('===========delete success!==============');
            await information.delete2(content);
            this.showAlert = false;
            this.getDoc();
            this.identify();
        }
    },
    mounted() {
        this.getDoc();
    }
};
</script>

<style>
.centercon_pagination {
    margin-top: 150px;
    margin-left: 300px;
}
.next_page {
    margin-bottom: 10px;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
