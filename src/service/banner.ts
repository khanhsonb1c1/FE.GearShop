import { gearshop } from "../http-gearshop";
const banner = {
    create(params?: object) {
        return gearshop.post(`/api/banner/`, params);
    },

    get_all(page: number, status: string) {
        return gearshop.get(`/api/banner?page=${page}&status=${status}`);
    },

    get_default() {
        return gearshop.get(`/api/banner/default`);
    },

    update(id: string, params?: object) {
        return gearshop.put(`/api/banner/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/banner/${id}`);
    },
};

export { banner };
