import { defineStore } from "pinia";

import { banner } from "../service/banner";

export const bannerStore = defineStore({
    id: "banner",

    state: () => ({
        current_page: 1 as number,
        last_page: 1 as number,
        banner_list: [
            {
                _id: "" as string,
                imageUrl: "" as string,
            },
        ],


        banner_default: [
            {
                _id: "" as string,
                imageUrl: "" as string,
            },
        ],
    }),
    getters: {},
    actions: {
        getBannerList(page: number, status: string) {
            return new Promise((resolve, reject) => {
                banner
                    .get_all(page, status)
                    .then((res) => {
                        this.banner_list = res.data.data;
                        this.current_page = res.data.current_page;
                        this.last_page = res.data.last_page;

                        resolve(this.banner_list)
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },


        getBannerDefault() {
            return new Promise((resolve, reject) => {
                banner
                    .get_default()
                    .then((res) => {
                        this.banner_default = res.data;

                        resolve(this.banner_default)
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },




    },
});
