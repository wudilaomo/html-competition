<template>
    <div>
        <!-- 研究文献审核按钮 -->
        <div class="next_page">
            <el-button type="primary" @click="goManagerTable2">
                研究文献审核
                <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" prop="content_id" />
            <el-table-column label="政策文件内容" prop="content" />
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

        <!-- 分页栏 -->
        <div class="centercon_pagination">
            <vs-pagination v-model:currentPage="currentPage" :layout="['total', 'prev', 'pager', 'next', 'jumper', 'sizes']" :total="tableData.length" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ManagerTable2 from './manager_table2.vue';
import information from '../../../api/user';

export default {
    data() {
        return {
            search: '',
            tableData: [],
            currentPage: 1,
            pageSize: 10 // 每页显示的条数
        };
    },
    computed: {
        tableData() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = Math.min(startIndex + this.pageSize, this.tableData.length);
            return this.tableData.slice(startIndex, endIndex);
        }
    },
    methods: {
        async getGov() {
            const items = await information.getGov();
            this.tableData = items;
        },
        goManagerTable2() {
            this.$router.push({ name: 'manager_table2' });
        },
        handleEdit(index: number, row: any) {
            console.log(index, row);
        },
        handleDelete(index: number, row: any) {
            console.log(index, row);
        }
    },
    created() {
        this.getGov();
    }
};
</script>

<style>
.centercon_pagination {
    margin-top: 20px;
    text-align: center;
}
.next_page {
    margin-bottom: 10px;
}
</style>
