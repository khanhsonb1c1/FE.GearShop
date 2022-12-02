import { defineStore } from "pinia";
import { order, product_in_order } from "../service/order";

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
            product_list:
                ([
                    {
                        product: {
                            imageUrl: "" as string,
                            name: "" as string,
                            price: 0 as number,
                        },
                        quantity: 0 as number,
                    },
                ] as any) ||
                null ||
                undefined,
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

    getters: {
        get_id_cart: (state) => state.cart_default._id,
        get_total_default: (state) => {
            const arr = state.cart_default.product_list;

            function pricehandler(x: any, y: any) {
                return (
                    x + ((y.product.price * (100 - y.product.sale)) / 100) * y.quantity
                );
            }
            const total = arr.reduce(pricehandler, 0);

            return total;
        },
    },

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

        updateOrder(id: string, status: string) {
            return new Promise((resolve, reject) => {
                order
                    .update(id, {
                        status: status,
                    })
                    .then((res) => {

                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },


        deleteOrder(id: string) {
            return new Promise((resolve, reject) => {
                order
                    .delete(id)
                    .then((res) => {

                        resolve(res);
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

        addProductInOrder(
            id_user: string,
            id_cart: string,
            id_product: string,
            quantity: number
        ) {
            return new Promise((resolve, reject) => {
                product_in_order
                    .create({
                        product: id_product,
                        cart: id_cart,
                        quantity: quantity,
                    })
                    .then((res) => {
                        resolve(res);
                        this.getOrderDefault(id_user);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        updateProductInOrder(
            id_user: string,
            id_cart: string,
            id_product: string,
            quantity: number,
            id: string
        ) {
            return new Promise((resolve, reject) => {
                product_in_order
                    .update(id, {
                        product: id_product,
                        cart: id_cart,
                        quantity: quantity,
                    })
                    .then((res) => {
                        resolve(res);
                        this.getOrderDefault(id_user);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        deleteProductIncart(id: string, id_user: string) {
            return new Promise((resolve, reject) => {
                product_in_order
                    .delete(id)
                    .then((res) => {
                        resolve(res);
                        this.getOrderDefault(id_user);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },
});
