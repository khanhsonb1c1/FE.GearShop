import { defineStore } from "pinia";
import { order } from "../service/order";

export const orderStore = defineStore({
    id: "order",

    state: () => ({
        last_page: 0 as number,
        number_order: 0 as number,

        cart_default: {
            _id: "" as string,
            cart_id: ("" as string) || null || undefined,
            user: {
                full_name: "" as string,
            },
            created_at: 0 as number,
            status: "" as string,
            product_list: ([
                {
                    product: {
                        imageUrl: "" as string,
                        name: "" as string,
                        price: 0 as number,
                    },
                    quantity: 0 as number,
                },
            ] as any) || null || undefined,

        },

        cart_list: [
            {
                _id: "" as string,
                cart_id: "" as string,
                user: {
                    full_name: "" as string,
                },
                created_at: 0 as number,
                status: "" as string,
                product_list: [
                    {
                        product: {
                            imageUrl: "" as string,
                        },
                    },
                ] as any,
            },
        ],

        cart_detail: {
            _id: "" as string,
            cart_id: "" as string,
            user: {
                full_name: "" as string,
            },
            created_at: 0 as number,
            status: "" as string,
            product_list: [
                {
                    product: {
                        imageUrl: "" as string,
                    },
                },
            ] as any,
        },
    }),

    actions: {
        getOrderList(page: number) {
            return new Promise((resolve, reject) => {
                order
                    .get_all({
                        page: page,
                    })
                    .then((res) => {
                        (this.cart_list = res.data.data),
                            (this.last_page = res.data.last_page),
                            resolve(this.cart_list);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        getOrderDefault(id: string) {
            return new Promise((resolve, reject) => {
                order
                    .get_default(id, "open")
                    .then((res) => {
                        console.log(res.data[0]);
                        this.cart_default = res.data[0];
                        this.number_order = res.data[0].product_list.length;
                        // (this.cart_default = res.data.data), resolve(this.cart_default);
                        resolve(this.cart_default);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },
});
