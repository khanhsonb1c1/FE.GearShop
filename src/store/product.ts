import { defineStore } from "pinia";
import { product } from "../service/product";


export const productStore = defineStore({
    id: 'product',

    state: () => ({
        showForm: false,
        last_page: 0 as number,
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
            }
        ],

    }),
    getters: {

    },
    actions: {
        getProductList(page: number, sort: string, category: string, company: string) {
            return new Promise((resolve, reject) => {
                product.get_all({
                    page: page,
                    sort: sort,
                    category: category,
                    company: company
                }).then((res) => {
                    this.product_list = res.data.data,
                        this.last_page = res.data.last_page,
                        resolve(this.product_list)
                }).catch(err => {
                    reject(err)
                })
            });
        },

        deleteProduct(id: string) {
            return new Promise((resolve, reject) => {
                product.delete(id).then((res) => {
                    this.getProductList(1, 'created_at', '', '')
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            });
        },

        changeShowForm() {
            this.showForm = !this.showForm;
        },
    },
})