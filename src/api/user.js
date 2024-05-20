import request from '../utils/request';

const moduleUrl = '/user';

const information = {
    // 查询某个用户的详细信息
    getGov() {
        return request(`${moduleUrl}/getGov`);
    },
    getDoc() {
        return request(`${moduleUrl}/getDoc`);
    },
    login(userId, password) {
        return request(`${moduleUrl}/signIn`, { userId, password });
    },
    search(keyWord) {
        return request(`${moduleUrl}/search`, { keyWord });
    },
    delete1(content) {
        return request(`${moduleUrl}/delete1`, { content });
    },
    delete2(content) {
        return request(`${moduleUrl}/delete2`, { content });
    }
};

export default information;
