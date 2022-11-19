import { gearshop } from "../http-gearshop";
const company = {
    create(params?: object) {
        return gearshop.post(`/api/company/`, params);
    },
    get_detail(id: string) {
        return gearshop.get(`/api/company/${id}`);
    },
    get_all() {
        return gearshop.get(`/api/company`);
    },

    update(id: string) {
        return gearshop.put(`/api/company/${id}`);
    },

    delete(id: string) {
        return gearshop.delete(`/api/company/${id}`);
    },
};

export { company };
