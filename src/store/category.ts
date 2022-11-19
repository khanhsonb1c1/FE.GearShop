import { defineStore } from "pinia";

import { category } from "../service/category";


export const categoryStore = defineStore({
    id: 'category',

    state: () => ({


        category_list: [
            {
                _id: "" as string,
                name: "" as string,
                imageUrl: "" as string,
                product: [],

            }
        ],

    }),
    getters: {

    },
    actions: {
        getCategoryList() {
            return new Promise((resolve, reject) => {
                category.get_all().then((res) => {
                    this.category_list = res.data,

                        resolve(this.category_list)
                }).catch(err => {
                    reject(err)
                })
            });
        },
    },
})