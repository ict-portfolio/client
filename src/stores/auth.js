import ApiService from "@/services/ApiService";
import TokenService from "@/services/TokenService";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth' , {
    state : () => {
        return {
            user : {},
            authenticated : !!TokenService.getToken(),
            isAdmin : false,
        }
    },

    actions : {
        async getUser() {
            return ApiService.get('user').then((res) => {
                this.setAuth(res.data.data)
            }).catch((res) => {
                console.log(res);
            })
        },
        filterRole () {
            let authorized = this.user.roles?.find((role) => role.name == 'admin')
            if (authorized && authorized.id) {
              this.isAdmin = true;
            } else {
            this.isAdmin = false;
            }
        },
        setAuth(data)  {
                this.user = data;
                this.authenticated = true
                this.filterRole(this.user.roles);
        },
        destroyAuth(){
            this.user = {};
            this.authenticated = false;
            TokenService.destroyToken();
        }
    }
})