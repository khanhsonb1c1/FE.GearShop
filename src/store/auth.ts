import { defineStore } from "pinia";
import { account, user } from "../service/auth";

export const authStore = defineStore({
    id: "auth",

    state: () => ({

        token: null,
        user: {
            _id: "" as string,
            full_name: "" as string,
            address_detail: "" as string,
            user_name: "" as string,

        },

        user_list: [
            {
                _id: null,
                full_name: "" as string,
                address_detail: "" as string,
                email: "" as string,
                role: "" as string,
                user_name: "" as string,
            }
        ],

        user_detail: {
            _id: null,
            full_name: "" as string,
            address_detail: "" as string,
            email: "" as string,
            role: "" as string,
            user_name: "" as string,
        }

    }),
    getters: {

    },
    actions: {
        login(user_name: string, password: string) {
            return new Promise((resolve, reject) => {
                account.login({
                    user_name: user_name,
                    password: password,
                }).then((res) => {
                    this.token = res.data.access_token;
                    this.user = res.data;
                    resolve(this.token)

                }).catch(err => {
                    reject(err)
                })
            });
        },


        setDefault(token: any, user: any) {
            this.token = token;
            this.user = user;

        },




        logout() {
            return new Promise((resolve, reject) => {
                account.logout().then((res) => {
                    this.token = null;
                    resolve(this.token)
                }).catch(err => {
                    reject(err)
                })
            });
        },


        getUserList() {
            return new Promise((resolve, reject) => {
                user.get_all().then((res) => {
                    this.user_list = res.data;
                    resolve(this.user_list)
                }).catch(err => {
                    reject(err)
                })
            });
        },

        deleteUser(id: any) {
            return new Promise((resolve, reject) => {
                user.delete(id).then((res) => {
                    this.getUserList()
                    resolve(this.user_list)
                }).catch(err => {
                    reject(err)
                })
            });
        }



    },
});
