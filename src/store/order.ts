import { defineStore } from "pinia";
import { order } from "../service/order";


export const orderStore = defineStore({
    id: 'order',

    state: () => ({

        last_page: 0 as number,
        cart_list: [
            {
                _id: "" as string,
                cart_id: "" as string,
                user: {
                    full_name: "" as string,
                },
                created_at: 0 as number,
                status: "" as string,
                product_list: [{
                    product: {
                        imageUrl: "" as string,
                    },
                }] as any,


            },

        ],

    }),
    getters: {

    },
    actions: {
        getOrderList(page: number) {
            return new Promise((resolve, reject) => {
                order.get_all({
                    page: page,
                }).then((res) => {
                    this.cart_list = res.data.data,
                        this.last_page = res.data.last_page,
                        resolve(this.cart_list)
                }).catch(err => {
                    reject(err)
                })
            });
        },
    },
})