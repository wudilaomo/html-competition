<template>
    <div class="main-container">
        <div class="grid">
            <vs-row>
                <p>网站标题{{ input.inputTitle }}</p>
                <vs-col :sm="12">
                    <div class="input-grid">
                        <vs-input v-model="inputTitle" placeholder="请输入标题"></vs-input>
                        <vs-button @click="queryEnter(userId)">提交</vs-button>
                    </div>
                </vs-col>
            </vs-row>

            <vs-row>
                <p>GPT接口{{ input.inputGpt }}</p>
                <vs-col :sm="12">
                    <dev class="input-grid">
                        <vs-input v-model="inputGpt" placeholder="请输入接口" style="color: white"></vs-input>
                        <vs-button @click="queryEnter(userId)">提交</vs-button>
                    </dev>
                </vs-col>
            </vs-row>

            <vs-row>
                <p>推送邮件服务器{{ input.inputServe }}</p>
                <vs-col :sm="12">
                    <div class="input-grid">
                        <vs-input v-model="inputServe" placeholder="请输入服务器"></vs-input>
                        <vs-button @click="queryEnter(userId)">提交</vs-button>
                    </div>
                </vs-col>
            </vs-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DemoPage',
    components: {},
    data() {
        return {
            input: {
                inputTitle: '',
                inputGpt: '',
                inputServe: ''
            },
            userId: '',
            userInfo: {
                userId: '',
                userName: '',
                gender: '',
                age: ''
            }
        };
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {
        async queryEnter(userInformation) {
            const userInfo = await user.getEnter({ userInformation });
            this.userInfo = userInfo[0];
        }
    }
};
</script>

<style scoped>
.input-grid {
    display: grid;
    grid-template-columns: 1fr auto; /* 将输入框和按钮放在一行 */
    gap: 10px; /* 调整输入框和按钮之间的间距 */
    margin-top: 50px;
    
}
.grid{
    background-color: #ADD8E6; 
}
</style>
