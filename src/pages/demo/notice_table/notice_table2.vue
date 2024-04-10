<template>
    <h2 class="table-title">研究文献</h2>
    <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="address" label="来源" width="180"></el-table-column>
        <el-table-column prop="time" label="发布时间" width="180" />
        <el-table-column prop="content" label="内容">
            <template #default="scope">
                <a :href="scope.row.link" target="_blank" class="blue-link">{{ scope.row.content }}</a>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface User {
    time: string;
    address: string;
    content: string;
    link: string;
}

export default defineComponent({
    data() {
        return {
            tableData: [
                {
                    time: '2016-05-03',
                    address: '陈睿你*什么时候*啊',
                    content: '你所热爱的，就是你的生活',
                    link: 'https://www.bilibili.com'
                }
                // Add more data objects as needed
            ] as User[]
        };
    }
});
</script>

<style>
.table-title {
    font-size: 20px;
    margin-bottom: 10px;
}

.blue-link {
    color: blue;
}
</style>
