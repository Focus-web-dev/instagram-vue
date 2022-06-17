import { createStore } from 'vuex';

import UsersStore from "./modules/UsersStore";
import ProfileStore from "./modules/ProfileStore";

export default createStore({
  modules: {
    UsersStore,
    ProfileStore
  }
})
