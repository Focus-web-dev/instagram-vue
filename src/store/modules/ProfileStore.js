export default {
    actions: {
        fetchUserData(ctx, nickname) {
            let userData = [];

            if (nickname === 'your-profile') {
                if (localStorage.currentUser) userData = JSON.parse(localStorage.currentUser);
            }
            else {
                let users;
                if (localStorage.users) {
                    users = JSON.parse(localStorage.users);
                }

                userData = users[users.findIndex(el => { return el.nickname === nickname; })];
            }

            ctx.commit('updateUserData', userData);
        },
    },
    mutations: {
        updateUserData( state, userData ) {
            state.userData = userData;
        }
    },
    state: {
        userData: {},
    },
    getters: {
        getUserData( state ) {
            return state.userData;
        }
    }
}