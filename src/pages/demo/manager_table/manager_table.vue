<template>
    <div class="next_page">
        <el-button type="primary" @click="goManagerTable2">
            研究文献审核
            <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
    </div>
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="政策文件内容" prop="date" />
        <el-table-column label="时间" prop="name" />
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
        <vs-pagination v-model:current-page="page" :layout="['total', 'prev', 'pager', 'next', 'jumper', 'sizes']" :total="50" />
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import ManagerTable2 from './manager_table2.vue';

interface User {
    date: string;
    name: string;
    address: string;
}

const search = ref('');
const router = useRouter();
const filterTableData = computed(() => tableData.filter((data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())));
const handleEdit = (index: number, row: User) => {
    console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
    console.log(index, row);
};

const tableData: User[] = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-05',
        name: 'Emily',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-06',
        name: 'Alex',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-07',
        name: 'Sophia',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-08',
        name: 'Oliver',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-09',
        name: 'Lily',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-10',
        name: 'Max',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-11',
        name: 'Ava',
        address: 'No. 189, Grove St, Los Angeles'
    }
    // 可以继续添加更多数据条目
];
function goManagerTable2() {
    router.push({
        name: 'manager_table2'
    });
}
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
