export default {
    actions: {
        fetchProjects(ctx) {
            let users = [];

            if (localStorage.users) {
                users = JSON.parse(localStorage.users);
            } else {
                users = [
                    {
                        id: 1,
                        nickname: "user_1",
                        avatar: "https://picsum.photos/id/237/200/300",
                        follows: true,
                        posts: [
                            {
                                postId: 1000,
                                postImages: ["https://picsum.photos/id/237/200/300"],
                                postDescription: "ABC",
                                postLikes: 1,
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2001,
                                        commentText: "Hey!",
                                        commentLikes: 0,
                                        commentAuthor: "user_2",
                                        commentDate: "21/03"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        nickname: "user_2",
                        avatar: "https://picsum.photos/id/239/200/300",
                        follows: true,
                        posts: [
                            {
                                postId: 1001,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: 2,
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2002,
                                        commentText: "Hey2!",
                                        commentLikes: 0,
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            }
                        ]
                    },
                ]
                localStorage.users = JSON.stringify(users);
            }

            ctx.commit('updateUsers', users);
        },
    },
    mutations: {
        updateUsers( state, users ) {
            state.users = users;
        }
    },
    state: {
        users: []
    },
    getters: {
        getFeedData( state ) {
            const feedData = [];

            state.users.forEach(el => {
                el.posts.forEach(post => {
                    feedData.push ( {
                        author: el.nickname,
                        avatar: el.avatar,
                        post: post
                    } )
                })
            })

            return feedData;
        }
    }
}