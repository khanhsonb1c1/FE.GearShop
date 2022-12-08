import { gearshop } from "../http-gearshop";
const product = {
    create(params?: object) {
        return gearshop.post(`/api/product/`, params);
    },
    get_detail(id: string) {
        return gearshop.get(`/api/product/${id}`);
    },
    get_all(page: number, sort: string, category: string, company: string, filter: string) {
        return gearshop.get(`/api/product?page=${page}&sort=${sort}&category=${category}&company=${company}&filter=${filter}`);
    },

    update(id: string, params?: object) {
        return gearshop.put(`/api/product/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/product/${id}`);
    },
};

export { product };
