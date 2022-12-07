import { gearshop } from "../http-gearshop";
const category = {
    create(params?: object) {
        return gearshop.post(`/api/category/`, params);
    },
    get_detail(id: string) {
        return gearshop.get(`/api/category/${id}`);
    },
    get_all() {
        return gearshop.get(`/api/category`);
    },

    update(id: string, params: object) {
        return gearshop.put(`/api/category/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/category/${id}`);
    },
};

export { category };
