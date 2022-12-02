import { gearshop } from "../http-gearshop";
const order = {
    create(params?: object) {
        return gearshop.post(`/api/cart/`, params);
    },
    get_detail(id: any) {
        return gearshop.get(`/api/cart/${id}`);
    },
    get_all(params?: object) {
        return gearshop.get(`/api/cart`, params);
    },

    get_default(id: string, status: string) {
        return gearshop.get(`/api/cart/default/?status=${status}&id=${id}`);
    },

    update(id: string, params?: object) {
        return gearshop.put(`/api/cart/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/cart/${id}`);
    },
};

const product_in_order = {
    create(params?: object) {
        return gearshop.post(`/api/productInCart/`, params);
    },

    update(id?: string, params?: object) {
        return gearshop.put(`/api/productInCart/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/productInCart/${id}`);
    },
}

export { order, product_in_order };
