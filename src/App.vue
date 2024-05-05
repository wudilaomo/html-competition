<template>
    <div>
        <demomanager v-if="$route.meta.manager" />
        <demo v-if="$route.meta.demo" />
        <GPT v-if="$route.meta.gpt" />
        <user v-if="$route.meta.user" />
        <search v-if="$route.meta.search" />
    </div>
</template>

<script lang="js">
import demomanager from './pages/demo/manager.vue';
import demo from './pages/demo/demo.vue';
import manager_table2 from './pages/demo/manager_table/manager_table2.vue';
import GPT from './pages/demo/manager_table/GptComponent.vue';
import user from './pages/demo/SignIn/signIn.vue';
import search from './pages/demo/search/search.vue';
export default {
    name: 'App',
    components: {
        demomanager,
        demo,
        GPT,
        user,
        search
    },
    data() {
        return {
        };
    },
    created() {
        document.addEventListener('backbutton', this.goBack); // 监听移动端设备的后退按钮
    },
    destroyed() {
        document.removeEventListener('backbutton', this.goBack); // 页面销毁时移除监听
    },
    methods: {
        // 用户在移动端设备点击后退按钮时，返回上一条路由
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped></style>
