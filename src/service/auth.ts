import { gearshop } from "../http-gearshop";
const auth = {
    create(params?: object) {
        return gearshop.post(`/api/user/`, params);
    },
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



export { auth };
