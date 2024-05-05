<style scoped>
.center {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    background: linear-gradient(-45deg, #ee7752, #ce3e75, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    -webkit-animation: Gradient 10s linear infinite;
    -moz-animation: Gradient 10s linear infinite;
    animation: Gradient 10s linear infinite;
    -o-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}

.logon {
    background-color: #fff;
    border-radius: 10px;
    box-shadow:
        0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    /* position: relative;
		overflow: hidden; */
    width: 800px;
    max-width: 100%;
    min-height: 480px;
    margin-top: 20px;
    display: flex;
    margin: auto;
    background: -webkit-linear-gradient(right, #4284db, #29eac4);
}

.overlaylong {
    border-radius: 10px 0 0 10px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlaylongleft {
    border-radius: 10px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    transform: translateX(100%);
    transition: transform 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlaylongright {
    border-radius: 10px;
    width: 48%;
    height: 100%;
    background-color: #fff;
    transform: translateX(0%);
    transition: transform 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlaytitle {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlaytitleH2 {
    font-size: 30px;
    color: #fff;
    margin-top: 20px;
}

.overlaytitleP {
    font-size: 15px;
    color: #fff;
    margin-top: 20px;
}

.overlaytitleleft {
    border-radius: 0px 10px 10px 0px;
    width: 48%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(0%);
    transition: transform 0.6s ease-in-out;
}

.overlaytitleright {
    border-radius: 0px 10px 10px 0px;
    width: 48%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform 0.6s ease-in-out;
}

.overlaytitle-Signin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.overlaytitle-Signup {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.buttongohs {
    width: 180px;
    height: 40px;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    margin-top: 40px;
}
.buttongohs button {
    background-color: #16f1f1;
    color: #fff;
    border-radius: 50px;
    width: 180px;
}

.overlaylongH2 {
    font-size: 25px;
    color: black;
    /* width: 250px; */
    display: flex;
}

.overlaylong-Signin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.overlaylong-Signup {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 10px 0;
    width: 240px;
}
h3 {
    font-size: 10px;
    margin-top: 10px;
    cursor: pointer;
}
.inupbutton {
    background-color: #16f1f1;
    border: none;
    width: 180px;
    height: 40px;
    border-radius: 50px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 25px;
}
.overlaylongH3 {
    font-size: 12px;
    margin-top: 35px;
    margin-bottom: 10px;
}
.input-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.input-container input {
    padding-right: 18px;
}
.input-container button {
    position: absolute;
    top: 13px;
    right: 0px;
    height: 2000ph;
    padding: 5px 10px;
    box-sizing: border-box;
}
.getcode {
    height: 48px;
    margin-top: -4px;
}
</style>

<template>
    <div class="center">
        <div class="logon">
            <div :class="overlaylong">
                <div class="overlaylong-Signin" v-if="disfiex == 0">
                    <h2 class="overlaylongH2">登录</h2>
                    <input v-model="userId" type="text" placeholder="学号/工号" />
                    <input v-model="password" type="password" placeholder="密码" />
                    <h3 class="overlaylongH3">忘记密码→</h3>
                    <button class="inupbutton" @click="login">登录</button>
                    <button class="inupbutton" style="margin-top: 5px" @click="Back">返回主页</button>
                    <div class="error-message" v-if="errorMessage !== ''">{{ errorMessage }}</div>
                </div>
                <div class="overlaylong-Signup" v-if="disfiex == 1">
                    <h2 class="overlaylongH2">找回密码</h2>
                    <input class="phonenum" type="text" placeholder="手机号" />
                    <div class="input-container">
                        <input type="text" placeholder="输入验证码" />
                        <input type="text" placeholder="输入新密码" />
                        <button class="getcode" onclick="alert('获取验证码')">获取验证码</button>
                    </div>
                    <button class="inupbutton">重置密码</button>
                </div>
            </div>
            <div :class="overlaytitle">
                <div class="overlaytitle-Signin" v-if="disfiex == 0">
                    <h2 class="overlaytitleH2">忘记密码</h2>
                    <p class="overlaytitleP">请准备输入手机号以获取验证</p>
                    <div class="buttongohs">
                        <button class="backcode" @click="Signin">找回密码</button>
                    </div>
                </div>
                <div class="overlaytitle-Signup" v-if="disfiex == 1">
                    <h2 class="overlaytitleH2">返回登录页面</h2>
                    <p class="overlaytitleP"></p>
                    <div class="buttongohs">
                        <button @click="Signup">返回</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import information from '../../../api/user';

export default {
    data() {
        return {
            overlaylong: 'overlaylong',
            overlaytitle: 'overlaytitle',
            disfiex: 0,
            userId: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async login() {
            console.log('Attempting to login...');

            try {
                const response = await information.login(this.userId, this.password);

                if (response != null && response != "") {
                    console.log('Login successful');

                    const { identify, api } = response; // 从返回的数据中获取 identify 和 api
                    this.identify = response.identify;
                    localStorage.setItem('identify', this.identify);
                    this.$router.push({ path: '/demo', query: { userId: this.userId, identify: this.identify, api: this.api  } });
                } else {
                    console.log('Login failed');
                    this.errorMessage = '账号密码错误，请重试';
                }
            } catch (error) {
                console.error('Error:', error);
                this.errorMessage = '登录时出现错误，请重试';
            }
        },
        Signin() {
            this.overlaylong = 'overlaylongleft';
            this.overlaytitle = 'overlaytitleright';
            setTimeout(() => {
                this.disfiex = 1;
            }, 200);
        },
        Signup() {
            this.overlaylong = 'overlaylongright';
            this.overlaytitle = 'overlaytitleleft';

            setTimeout(() => {
                this.disfiex = 0;
            }, 200);
        },
        Back() {
            this.$router.push('/demo');
        }
    }
};
</script>
