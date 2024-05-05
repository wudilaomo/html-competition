<template>
    <h2 class="table-title">最新政策</h2>
    <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="address" label="来源" width="180"></el-table-column>
        <el-table-column prop="time" label="发布时间" width="180"></el-table-column>
        <el-table-column prop="content" label="内容">
            <template #default="scope">
                <a :href="scope.row.link" target="_blank" class="blue-link">{{ scope.row.content }}</a>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { User } from '@vuesax-alpha/icons-vue';
import { defineComponent } from 'vue';
import information from '../../../api/user'

export default{
    data() {
        return {
            tableData: [] // 初始化为空数组
        };
    },
    methods:{
        async getGov(){
            const items = await information.getGov();
            this.tableData = items;
        }
    },
    created () {
        this.getGov();
    }
};
</script>

<style>
.el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.table-title {
    font-size: 20px;
    margin-bottom: 10px;
}
.blue-link {
    color: blue;
}
</style>
