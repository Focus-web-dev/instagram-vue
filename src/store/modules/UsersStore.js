export default {
    actions: {
        fetchProjects(ctx) {
            let users = [];
            let currentUser = {};

            if (localStorage.users) users = JSON.parse(localStorage.users);
            else {
                users = [
                    {
                        id: 1,
                        nickname: "user_1",
                        avatar: "https://picsum.photos/id/237/200/300",
                        name: "Name1",
                        description: "Just a user_1",
                        follows: [
                            'I_AM_USER', 'user_2'
                        ],
                        followers: [
                            'I_AM_USER', 'user_2'
                        ],
                        posts: [

                        ]
                    },
                    {
                        id: 2,
                        nickname: "user_2",
                        avatar: "https://picsum.photos/id/239/200/300",
                        name: "Name2",
                        description: "Just a user_2",
                        follows: [
                            'I_AM_USER', 'user_1'
                        ],
                        followers: [
                            'I_AM_USER', 'user_1'
                        ],
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
                            },
                            {
                                postId: 1002,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: 2,
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2004,
                                        commentText: "Hey2!",
                                        commentLikes: 0,
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1003,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: 2,
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2005,
                                        commentText: "Hey2!",
                                        commentLikes: 0,
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1004,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: 2,
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2006,
                                        commentText: "Hey2!",
                                        commentLikes: 0,
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1005,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: 2,
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2003,
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

            if (localStorage.currentUser) currentUser = JSON.parse(localStorage.currentUser);
            else {
                currentUser = {
                    id: 0,
                    nickname: "I_AM_USER",
                    avatar: "https://picsum.photos/id/237/200/320",
                    name: "Cur name",
                    description: "Current user",
                    follows: [
                        'user_1', 'user_2'
                    ],
                    followers: [
                        'user_1', 'user_2'
                    ],
                    posts: [
                        {
                            postId: 0,
                            postImages: ["https://picsum.photos/id/237/200/321"],
                            postDescription: "jsdoifasdfasdfadsf",
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
                }

                localStorage.currentUser = JSON.stringify(currentUser);
            }

            ctx.commit('updateCurrentUser', currentUser);
        },
    },
    mutations: {
        updateUsers( state, users ) {
            state.users = users;
        },

        updateCurrentUser( state, currentUser ) {
            state.currentUser = currentUser;
        }
    },
    state: {
        users: [],
        currentUser: {}
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

            console.log(feedData);
            return feedData;
        }
    }
}