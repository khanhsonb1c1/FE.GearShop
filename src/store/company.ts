import { defineStore } from "pinia";

import { company } from "../service/company";


export const companyStore = defineStore({
    id: 'company',

    state: () => ({


        company_list: [
            {
                _id: "" as string,
                name: "" as string,
                company_id: "" as string,
                product: [],

            }
        ],

    }),
    getters: {

    },
    actions: {
        getcompanyList() {
            return new Promise((resolve, reject) => {
                company.get_all().then((res) => {
                    this.company_list = res.data.data,

                        resolve(this.company_list)
                }).catch(err => {
                    reject(err)
                })
            });
        },
    },
})