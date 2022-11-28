import { gearshop } from "../http-gearshop";
const user = {

    get_detail(id: string) {
        return gearshop.get(`/api/user/${id}`);
    },
    get_all() {
        return gearshop.get(`/api/user`);
    },

    update(id: string) {
        return gearshop.put(`/api/user/${id}`);
    },

    delete(id: string) {
        return gearshop.delete(`/api/user/${id}`);
    },
};

const account = {
    login(params?: object) {
        return gearshop.post(`/api/auth/login/`, params);
    },
    register(params?: object) {
        return gearshop.get(`/api/auth/register/`, params);
    },
    logout(params?: object) {
        return gearshop.get(`/api/auth/logout`, params);
    },
    refresh(params?: object) {
        return gearshop.get(`/api/auth/refresh`, params);
    },


};




export { user, account };
