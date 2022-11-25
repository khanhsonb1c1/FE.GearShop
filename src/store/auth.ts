import { defineStore } from "pinia";
import { account } from "../service/auth";

export const authStore = defineStore({
    id: "auth",

    state: () => ({

        token: null,
        user: {
            _id: null,
            full_name: "" as string,
            address_detail: "" as string,
            
        },

    }),
    getters: {},
    actions: {
        login(email: string, password: string) {
            return new Promise((resolve, reject) => {
                account.login({
                    email: email,
                    password: password,
                }).then((res) => {
                    this.token = res.data.token;
                    resolve(this.token)
                }).catch(err => {
                    reject(err)
                })
            });
        },

        logout(email: string) {
            return new Promise((resolve, reject) => {
                account.logout({
                    email: email,

                }).then((res) => {
                    this.token = null;
                    resolve(this.token)
                }).catch(err => {
                    reject(err)
                })
            });
        }


    },
});
