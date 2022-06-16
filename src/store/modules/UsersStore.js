export default {
    actions: {
        // fetchProjects(ctx) {
        //         //     if (localStorage.projects) {
        //         //         const projects = JSON.parse(localStorage.projects);
        //         //         ctx.commit('updateProjects', projects)
        //         //     }
        //         // },
    },
    mutations: {

    },
    state: {
        users: [
            {
                id: 1,
                nickname: "User 1",
                avatar: "https://picsum.photos/id/237/200/300",
                follows: true,
                posts: [
                    {
                        postId: 1,
                        postImages: ["https://picsum.photos/id/237/200/300"],
                        postDescription: "ABC",
                        postLikes: "1",
                        postComments: [
                            {
                                commentId: 1,
                                commentText: "Hey!",
                                commentLikes: 0,
                                commentAuthor: "NickName",
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                nickname: "User 2",
                avatar: "https://picsum.photos/id/239/200/300",
                follows: true,
                posts: [
                    {
                        postId: 1,
                        postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                        postDescription: "DEF",
                        postLikes: "2",
                        postComments: [
                            {
                                commentId: 1,
                                commentText: "Hey2!",
                                commentLikes: 0,
                                commentAuthor: "NickName",
                            }
                        ]
                    }
                ]
            },
        ],
    },
    getters: {
        getAllUsers( state ) {
            return state.users;
        },

        getFeedData( state ) {
            const feedData = [];

            state.users.forEach(el => {
                el.posts.forEach(post => {
                    feedData.push ( {
                        author: el.nickname,
                        post: post
                    } )
                })
            })

            return feedData;
        }
    }
}