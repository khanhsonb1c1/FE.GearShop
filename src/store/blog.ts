import { defineStore } from "pinia";

import { blog } from "../service/blog";

export const blogStore = defineStore({
    id: "blog",

    state: () => ({
        blog_list: [
            {
                _id: "" as string,
                title: "" as string,
                created_at: 0 as number,
                description: "" as string,
                imageUrl: "" as string,
            },
        ],



        last_page: 0 as number,

        blog_detail: {
            _id: "" as string,
            title: "" as string,
            title1: "" as string,
            title2: "" as string,
            content1: "" as string,
            content2: "" as string,
            content3: "" as string,
            created_at: 0 as number,
            description: "" as string,
            imageUrl: "" as string,
            comment: [{
                created_at: 0 as number,
                content: '' as string,
                user: {
                    full_name: "" as string,
                },
            }]
        },
    }),
    getters: {},
    actions: {
        getBlogList(page: number) {
            return new Promise((resolve, reject) => {
                blog
                    .get_all({
                        page: page,
                    })
                    .then((res) => {
                        (this.blog_list = res.data.data), resolve(this.blog_list);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },


        getBlogDetail(id: any) {
            return new Promise((resolve, reject) => {
                blog
                    .get_detail(id)
                    .then((res) => {
                        (this.blog_detail = res.data), resolve(this.blog_detail);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },
});
