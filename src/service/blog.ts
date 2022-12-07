import { gearshop } from "../http-gearshop";
const blog = {
    create(params?: object) {
        return gearshop.post(`/api/blog/`, params);
    },
    get_detail(id: string) {
        return gearshop.get(`/api/blog/${id}`);
    },
    get_all(params?: object) {
        return gearshop.get(`/api/blog`, params);
    },

    update(id: string, params: object) {
        return gearshop.put(`/api/blog/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/blog/${id}`);
    },
};

const comment = {
    create(params?: object) {
        return gearshop.post(`/api/comment/`, params);
    },
    get_detail(id: string) {
        return gearshop.get(`/api/comment/${id}`);
    },
    get_all() {
        return gearshop.get(`/api/comment`);
    },

    update(id: string, params?: object) {
        return gearshop.put(`/api/comment/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/comment/${id}`);
    },
};

const rep_comment = {
    create(params?: object) {
        return gearshop.post(`/api/repcomment/`, params);
    },
    get_detail(id: string) {
        return gearshop.get(`/api/repcomment/${id}`);
    },
    get_all() {
        return gearshop.get(`/api/repcomment`);
    },

    update(id: string, params?: object) {
        return gearshop.put(`/api/repcomment/${id}`, params);
    },

    delete(id: string) {
        return gearshop.delete(`/api/repcomment/${id}`);
    },
};

export { blog, comment, rep_comment };
