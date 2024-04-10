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
import { defineComponent } from 'vue';
import { User } from './types'; // 假设您有一个名为 types.ts 的类型文件

export default defineComponent({
    data() {
        return {
            tableData: [
                {
                    time: '2016-05-03',
                    address: 'No. 189, Grove St, Los Angeles',
                    content: 'Link to Google',
                    link: 'https://www.google.com'
                }
            ] as User[]
        };
    }
});
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
