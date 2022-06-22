export default {
    actions: {
        fetchUserData(ctx, nickname) {
            let userData = {};
            let currentUserData = JSON.parse(localStorage.currentUser);

            if (nickname === currentUserData.nickname) {
                userData = currentUserData;
            }
            else {
                let users;
                if (localStorage.users) {
                    users = JSON.parse(localStorage.users);
                }

                userData = users[users.findIndex(el => { return el.nickname === nickname; })];
            }

            ctx.commit('updateUserData', userData);
            ctx.commit('updateCurrentUserData', currentUserData);
        },
    },
    mutations: {
        updateUserData( state, userData ) {
            state.userData = userData;
        },

        updateCurrentUserData(state, currentUserData) {
            state.currentUserData = currentUserData;
        },

        profileFollow(state, profileNickname) {

            if (state.userData.followers.findIndex(el => { return el === profileNickname }) === -1) {
                state.userData.followers.push(profileNickname);
                state.currentUserData.follows.push(state.userData.nickname);
            } else {
                state.userData.followers.splice(
                    state.userData.followers.findIndex(el => { return el === profileNickname }), 1
                );
                state.currentUserData.follows = state.currentUserData.follows.filter(el => el !== state.userData.nickname);
            }

            localStorage.currentUser = JSON.stringify(state.currentUserData);

            let users = JSON.parse(localStorage.users);
            users[users.findIndex(el => {return el.nickname === state.userData.nickname})] = state.userData;
            localStorage.users = JSON.stringify(users);
        }
    },
    state: {
        userData: {},
        currentUserData: {},
    },
    getters: {
        getUserData( state ) {
            return state.userData;
        },

        getCurrentUser( state ) {
            return state.currentUserData;
        },

        getSavedPosts( state ) {
            let savedPosts = [];

            JSON.parse(localStorage.users).forEach(el => {
                el.posts.forEach(post => {
                    if (state.currentUserData.savedPosts.findIndex(savedPost => {return savedPost === post.postId}) !== -1) {
                        savedPosts.push({
                            postAuthor: el.nickname,
                            postId: post.postId,
                            postImages: post.postImages,
                            postLikes: post.postLikes,
                            postComments: post.postComments,
                        });
                    }
                })
            });

            return savedPosts;
        }
    }
}