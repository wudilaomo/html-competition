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
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="centercon_pagination">
        <vs-pagination v-model:currentPage="currentPage" :layout="['total', 'prev', 'pager', 'next', 'jumper', 'sizes']" :total="50" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ManagerTable1 from './manager_table.vue';
import information from '../../../api/user';

export default {
    data() {
        return {
            search: '',
            tableData: [],
            currentPage: 1,
            pageSize: 10
        };
    },
    methods: {
        async getDoc() {
            const items = await information.getDoc();
            this.tableData = items;
        },
        goManagerTable1() {
            this.$router.push({ name: 'manager_table' });
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
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
</style>
