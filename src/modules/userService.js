import {getData} from "./helpers";
import {method} from "./helpers";

export class UserService {
    constructor (url) {
        this.url = url
    }

   getUsers() {
       return getData(this.url);
   }

   addUsers(user) {
       return method(this.url, '', 'POST', user)
   }

   removeUsers(id) {
       return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
                }).then(res => res.json())
   }

   changeUser(id, data) {
       return method(this.url, `/${id}`, 'PATCH', data)
   }

   getUser(id) {
        return getData(this.url, `/${id}`);
   }

   editUser(id, user) {
       return method(this.url, `/${id}`, 'PUT', user)
   }

   filterUsers(filterOption) {
       return getData(this.url,`/?${filterOption}=true`);
   }

   getSortUsers(sortOption) {
       return getData(this.url, `/?_sort=${sortOption.name}&_order=${sortOption.value}`);
   }

   getSearchUsers(str) {
        return getData(this.url, `/?name_like=${str}`);
   }
}