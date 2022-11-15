import { gearshop } from "../http-gearshop";
const product = {
    create(params?: object) {
        return gearshop.post(`/api/product/`, params);
    },
    get_detail(id: string) {
        return gearshop.get(`/api/product/${id}`);
    },
    get_all() {
        return gearshop.get(`/api/product`);
    },

    update(id: string) {
        return gearshop.put(`/api/product/${id}`);
    },

    delete(id: string) {
        return gearshop.delete(`/api/product/${id}`);
    },
};

export { product };