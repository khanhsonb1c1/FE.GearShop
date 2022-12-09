import { defineStore } from "pinia";
import { order, product_in_order, voucher } from "../service/order";

export const orderStore = defineStore({
    id: "order",

    state: () => ({
        last_page: 0 as number,
        page: 1 as number,
        number_order: 0 as number,

        voucher: {
            code: "",
            value: 0 as number,
        },

        sale: 0 as number,

        totalPay: 0 as number,

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
                total: 0 as number,
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
            total: 0 as number,
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


        voucher_list: [
            {
                _id: "" as string,
                value: 0 as number,
                created_at: 0 as number,
                code: "" as string,
            }
        ],


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

        getVoucher(code: string) {
            return new Promise((resolve, reject) => {
                voucher
                    .get_detail(
                        code
                    )
                    .then((res) => {
                        this.voucher = res.data.data;
                        this.check();
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        getVoucherList() {
            return new Promise((resolve, reject) => {
                voucher
                    .get_all(

                )
                    .then((res) => {
                        this.voucher_list = res.data.data;

                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        check() {
            if (voucher == null) {
                this.sale = 0;
                this.totalPay = this.get_total_default;

            } else {
                this.sale = this.voucher.value;
                this.totalPay = this.get_total_default - this.sale;
            }
        },


        getOrderList(page: number, status: string) {
            return new Promise((resolve, reject) => {
                order
                    .get_all(
                        page,
                        status
                    )
                    .then((res) => {
                        this.cart_list = res.data.data;
                        this.last_page = res.data.last_page;
                        this.page = res.data.current_page;
                        resolve(res);
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
                        total: this.totalPay,
                        status: status,

                    })
                    .then((res) => {
                        this.check();
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
                        this.check();
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
