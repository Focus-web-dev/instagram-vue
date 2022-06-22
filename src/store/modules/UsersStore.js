export default {
    actions: {
        fetchData(ctx) {
            let users = [];
            let currentUser = {};

            //database imitate
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
                                postLikes: ['user_2', 'I_AM_USER'],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2002,
                                        commentText: "Hey2!",
                                        commentLikes: ['user_2', 'I_AM_USER'],
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    },
                                    {
                                        commentId: 2007,
                                        commentText: "Hey7!",
                                        commentLikes: ['user_2', 'I_AM_USER'],
                                        commentAuthor: "user_2",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1002,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: ['user_1'],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2004,
                                        commentText: "Hey2!",
                                        commentLikes: ['user_2', 'I_AM_USER'],
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1003,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: [],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2005,
                                        commentText: "Hey2!",
                                        commentLikes: ['I_AM_USER'],
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1004,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: [],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2006,
                                        commentText: "Hey2!",
                                        commentLikes: ['user_2', 'I_AM_USER'],
                                        commentAuthor: "user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1005,
                                postImages: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/237/200/300"],
                                postDescription: "DEF",
                                postLikes: [],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2003,
                                        commentText: "Hey2!",
                                        commentLikes: ['user_2', 'I_AM_USER'],
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

            //still database imitating :)
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
                            postId: 1000,
                            postImages: ["https://picsum.photos/id/237/200/321"],
                            postDescription: "jsdoifasdfasdfadsf",
                            postLikes: ['user_1', 'I_AM_USER'],
                            postDate: "20/03",
                            postComments: [
                                {
                                    commentId: 2001,
                                    commentText: "Hey!",
                                    commentLikes: ['user_1', 'user_2'],
                                    commentAuthor: "user_2",
                                    commentDate: "21/03"
                                }
                            ]
                        }
                    ],
                    savedPosts: [1001, 1003, 1005]
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
        },

        postLike( state, postId ) {
            state.users.forEach(user => {
                user.posts.forEach(post => {
                    if (post.postId === postId) {
                        if (post.postLikes.findIndex(el => {return el === state.currentUser.nickname}) === -1) {
                            post.postLikes.push(state.currentUser.nickname);
                        } else {
                            post.postLikes.splice(
                                post.postLikes.findIndex(el => { return el === state.currentUser.nickname }), 1
                            )
                        }
                    }
                })
            });

            localStorage.users = JSON.stringify(state.users);
        },

        postSave( state, postId ) {
            let savedPostIdx = state.currentUser.savedPosts.findIndex(el => {return el === postId});

            if (savedPostIdx !== -1) state.currentUser.savedPosts.splice(savedPostIdx, 1);
            else state.currentUser.savedPosts.push(postId);

            localStorage.currentUser = JSON.stringify(state.currentUser);
        },

        followUser( state, user ) {
            let aimUser = state.users.find(el => {return el.nickname === user});

            if (aimUser.followers.findIndex(el => { return el === state.currentUser.nickname }) === -1) {
                aimUser.followers.push(state.currentUser.nickname);
                state.currentUser.follows.push(user);
            } else {
                aimUser.followers.splice(
                    aimUser.followers.findIndex(el => {return el === state.currentUser.nickname}), 1
                )
                state.currentUser.follows = state.currentUser.follows.filter(el => el !== user);
            }

            state.users[state.users.findIndex(el => {return el.nickname === user})] = aimUser;

            localStorage.currentUser = JSON.stringify(state.currentUser);
            localStorage.users = JSON.stringify(state.users);
        },

        commentLike( state, commentId ) {
            state.users.forEach(user => {
                user.posts.forEach(post => {
                    post.postComments.forEach(comment => {
                        let currentUserIdx = comment.commentLikes.findIndex(idx => {return idx === state.currentUser.nickname});

                        if ((comment.commentId === commentId) && (currentUserIdx === -1)) {
                            comment.commentLikes.push(state.currentUser.nickname)
                        } else if ((comment.commentId === commentId) && (currentUserIdx !== -1)) {
                            comment.commentLikes.splice(currentUserIdx, 1);
                        }
                    })
                })
            })

            localStorage.users = JSON.stringify(state.users);
        },

        addNewComment( state, newCommentObj ) {
            let newDate = new Date();
            let nowDate = ('0' + newDate.getDate()).slice(-2) + '/' + ('0' + (newDate.getMonth() + 1)).slice(-2);

            let newComment = {
                commentAuthor: state.currentUser.nickname,
                commentDate: nowDate,
                commentId: Date.now(),
                commentLikes: [],
                commentText: newCommentObj.commentText
            }

            state.users.forEach(user => {
                user.posts.forEach(post => {
                    if (post.postId === newCommentObj.postId) post.postComments.push(newComment);
                })
            })

            localStorage.users = JSON.stringify(state.users)
        }
    },
    state: {
        users: [],
        currentUser: {}
    },
    getters: {
        getUsersData( state ) {
            return state.users;
        },

        getCurrentUserData( state ) {
            return state.currentUser;
        },

        getFeedData( state ) {
            const feedData = [];

            state.users.forEach(user => {
                if (state.currentUser.follows.findIndex(userIdx => {return userIdx === user.nickname}) !== -1) {
                    user.posts.forEach(post => {
                        feedData.push ( {
                            author: user.nickname,
                            avatar: user.avatar,
                            post: post
                        } )
                    })
                }
            })

            return feedData;
        },

        getAllPosts( state ) {
            const allPosts = [];

            state.users.forEach(user => {
              user.posts.forEach(post => {
                  allPosts.push({
                      author: user.nickname,
                      authorAvatar: user.avatar,
                      post: post
                  });
              })
            })

            return allPosts;
        }
    }
}