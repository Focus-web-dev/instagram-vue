import { createStore } from 'vuex';

import UsersStore from "./modules/UsersStore";

export default createStore({
  modules: {
    UsersStore
  }
})
