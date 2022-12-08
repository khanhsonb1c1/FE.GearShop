import { defineStore } from "pinia";
import { product } from "../service/product";

export const productStore = defineStore({
    id: "product",

    state: () => ({
        filter: "" as string,
        showForm: false,
        last_page: 1 as number,
        current_page: 1 as number,
        product_list: [
            {
                _id: "" as string,
                product_id: "" as string,
                name: "" as string,
                price: 0 as number,
                category: {
                    name: "" as string,
                },
                imageUrl: "" as string,
                company: {
                    name: "" as string,
                },
            },
        ],
    }),
    getters: {},
    actions: {
        getProductList(
            page: number,
            sort: string,
            category: string,
            company: string,
            filter: string
        ) {
            return new Promise((resolve, reject) => {
                product
                    .get_all(page, sort, category, company, filter)
                    .then((res) => {
                        this.product_list = res.data.data;
                        this.last_page = res.data.last_page;
                        this.current_page = res.data.current_page;

                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        updateFilter(filter: string) {
            this.filter = filter;
        },

        clearFilter() {
            this.filter = "";
        },

        deleteProduct(id: string) {
            return new Promise((resolve, reject) => {
                product
                    .delete(id)
                    .then((res) => {
                        this.getProductList(1, "created_at", "", "", "");
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        changeShowForm() {
            this.showForm = !this.showForm;
        },
    },
});
