<template>
    <div class="body">
        <vs-button class="Back" @click="Back">
            Home
            <template #animate>
                <vs-icon size="20">
                    <vs-icon-home />
                </vs-icon>
            </template>
        </vs-button>
        <iframe id="inlineFrameExample" title="Inline Frame Example" width="120%" height="100%" src="https://chatgpt.gdmuna.com/#/chat"></iframe>
    </div>
</template>
<script>
export default {
    methods:{
        Back(){
            this.$router.push('/demo')
        }

    }


}

</script>
<style scoped>
.body {
    margin: 0;  
    padding: 0;
    height: 100vh;
    position: relative;
    overflow: hidden;
    
}

#inlineFrameExample {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
}
.Back {
    margin-left: 30px;
    margin-top: 20px;
    size: large;
}
</style>
