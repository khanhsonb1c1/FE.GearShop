import { gearshop } from "../http-gearshop";
const order = {
    create(params?: object) {
        return gearshop.post(`/api/cart/`, params);
    },
    get_detail(id: any) {
        return gearshop.get(`/api/cart/${id}`);
    },
    get_all(page: number, status?: string) {
        return gearshop.get(`/api/cart?page=${page}&status=${status}`);
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

    get_order_user(page: number, user: string) {
        return gearshop.get(`/api/cart?page=${page}&user=${user}`);
    }
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

const voucher = {
    create(params?: object) {
        return gearshop.post(`/api/voucher/`, params);
    },

    get_all() {
        return gearshop.get(`/api/voucher/`);
    },

    get_detail(filter: string) {
        return gearshop.get(`/api/voucher?filter=${filter}`);
    },

    delete(id: string) {
        return gearshop.delete(`/api/voucher/${id}`);
    },
}

export { order, product_in_order, voucher };
