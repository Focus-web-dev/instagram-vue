export default {
    actions: {
        fetchData(ctx) {
            let users = [];
            let currentUser = {};

            //database imitate
            if (localStorage.currentUser) currentUser = JSON.parse(localStorage.currentUser);
            else {
                currentUser = {
                    id: 0,
                    nickname: "i_am_a_dog",
                    avatar: "https://picsum.photos/id/237/200/320",
                    name: "Dog spike :)",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, consequat egestas dolor a, egestas vulputate erat. Vivamus sed semper diam. Suspendisse euismod, orci at faucibus sollicitudin, mi mauris eleifend orci, non aliquam lorem tortor sed lectus. Sed sit amet velit sed nisl viverra luctus.",
                    follows: [
                        'imagine_i_am_a_user_1', '._.user_2'
                    ],
                    followers: [
                        'imagine_i_am_a_user_1', '._.user_2'
                    ],
                    posts: [
                        {
                            postId: 1000,
                            postImages: ["https://picsum.photos/id/0/5616/3744", "hhttps://picsum.photos/id/1/5616/3744"],
                            postDescription: "Just lorem ipsum.......................",
                            postLikes: ['imagine_i_am_a_user_1', 'i_am_a_dog'],
                            postDate: "20/03",
                            postComments: [
                                {
                                    commentId: 2000,
                                    commentText: "Hey! Nice post!",
                                    commentLikes: ['imagine_i_am_a_user_1'],
                                    commentAuthor: '._.user_2',
                                    commentDate: "21/03"
                                },
                                {
                                    commentId: 2001,
                                    commentText: "Fully agree with user_2 :)",
                                    commentLikes: ['imagine_i_am_a_user_1', '._.user_2'],
                                    commentAuthor: 'imagine_i_am_a_user_1',
                                    commentDate: "22/03"
                                },
                            ]
                        },
                        {
                            postId: 1001,
                            postImages: ["https://picsum.photos/id/1000/5626/3635", "https://picsum.photos/id/100/2500/1656", "https://picsum.photos/id/1003/1181/1772"],
                            postDescription: "Just lorem ipsum.......................",
                            postLikes: ['imagine_i_am_a_user_1', 'i_am_a_dog'],
                            postDate: "20/03",
                            postComments: []
                        }
                    ],
                    savedPosts: [1002, 1005, 1007]
                }

                localStorage.currentUser = JSON.stringify(currentUser);
            }

            ctx.commit('updateCurrentUser', currentUser);

            //still database imitating :)
            if (localStorage.users) users = JSON.parse(localStorage.users);
            else {
                users = [
                    {
                        id: 1,
                        nickname: "imagine_i_am_a_user_1",
                        avatar: "https://picsum.photos/id/1005/5760/3840",
                        name: "User_1, seriously??",
                        description: "omg......",
                        follows: [
                            'i_am_a_dog', '._.user_2'
                        ],
                        followers: [
                            'i_am_a_dog', '._.user_2'
                        ],
                        posts: [
                            {
                                postId: 1002,
                                postImages: ["https://picsum.photos/id/101/2621/1747", "https://picsum.photos/id/1013/4256/2832", "https://picsum.photos/id/1014/6016/4000"],
                                postDescription: "It's so difficult to fill all this data :(",
                                postLikes: ['._.user_2', 'i_am_a_dog'],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2002,
                                        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, consequat egestas dolor a, egestas vulputate erat. Vivamus sed semper diam. Suspendisse euismod, orci at faucibus sollicitudin, mi mauris eleifend orci, non aliquam lorem tortor sed lectus. Sed sit amet velit sed nisl viverra luctus.",
                                        commentLikes: ['._.user_2', 'i_am_a_dog'],
                                        commentAuthor: "i_am_a_dog",
                                        commentDate: "23/03"
                                    },
                                    {
                                        commentId: 2003,
                                        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, consequat egestas dolor a, egestas vulputate erat. Vivamus sed semper diam. Suspendisse euismod, orci at faucibus sollicitudin, mi mauris eleifend orci, non aliquam lorem tortor sed lectus. Sed sit amet velit sed nisl viverra luctus.",
                                        commentLikes: ['._.user_2', 'i_am_a_dog'],
                                        commentAuthor: '._.user_2',
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1006,
                                postImages: ["https://picsum.photos/id/1014/6016/4000", "https://picsum.photos/id/1013/4256/2832", "https://picsum.photos/id/101/2621/1747"],
                                postDescription: "It's so difficult to fill all this data :(",
                                postLikes: ['._.user_2', 'i_am_a_dog'],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2008,
                                        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, consequat egestas dolor a, egestas vulputate erat. Vivamus sed semper diam. Suspendisse euismod, orci at faucibus sollicitudin, mi mauris eleifend orci, non aliquam lorem tortor sed lectus. Sed sit amet velit sed nisl viverra luctus.",
                                        commentLikes: ['._.user_2', 'i_am_a_dog'],
                                        commentAuthor: "i_am_a_dog",
                                        commentDate: "23/03"
                                    },
                                    {
                                        commentId: 2009,
                                        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, consequat egestas dolor a, egestas vulputate erat. Vivamus sed semper diam. Suspendisse euismod, orci at faucibus sollicitudin, mi mauris eleifend orci, non aliquam lorem tortor sed lectus. Sed sit amet velit sed nisl viverra luctus.",
                                        commentLikes: ['._.user_2', 'i_am_a_dog'],
                                        commentAuthor: '._.user_2',
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        id: 2,
                        nickname: '._.user_2',
                        avatar: "https://picsum.photos/id/239/200/300",
                        name: "Name2",
                        description: "Just a'._.user_2",
                        follows: [
                            'i_am_a_dog', 'imagine_i_am_a_user_1'
                        ],
                        followers: [
                            'i_am_a_dog', 'imagine_i_am_a_user_1'
                        ],
                        posts: [
                            {
                                postId: 1003,
                                postImages: ["https://picsum.photos/id/1020/4288/2848", "https://picsum.photos/id/1025/4951/3301", "https://picsum.photos/id/237/200/300"],
                                postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, consequat egestas dolor a, egestas vulputate erat. Vivamus sed semper diam. Suspendisse euismod, orci at faucibus sollicitudin, mi mauris eleifend orci, non aliquam lorem tortor sed lectus. Sed sit amet velit sed nisl viverra luctus.",
                                postLikes: ['._.user_2', 'i_am_a_dog'],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2004,
                                        commentText: "Lorem ipsum dolor sit amet",
                                        commentLikes: ['imagine_i_am_a_user_1', 'i_am_a_dog'],
                                        commentAuthor: "i_am_a_dog",
                                        commentDate: "23/03"
                                    },
                                    {
                                        commentId: 2005,
                                        commentText: "Lorem ipsum dolor sit amet",
                                        commentLikes: ['._.user_2', 'i_am_a_dog'],
                                        commentAuthor: 'imagine_i_am_a_user_1',
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1004,
                                postImages: ["https://picsum.photos/id/1026/4621/3070", "https://picsum.photos/id/103/2592/1936", "https://picsum.photos/id/1031/5446/3063"],
                                postDescription: "DEF",
                                postLikes: ["imagine_i_am_a_user_1"],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2006,
                                        commentText: "Lorem ipsum dolor sit amet",
                                        commentLikes: ['._.user_2', 'i_am_a_dog'],
                                        commentAuthor: "imagine_i_am_a_user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                            {
                                postId: 1005,
                                postImages: ["https://picsum.photos/id/1032/2880/1800", "https://picsum.photos/id/1033/2048/1365", "https://picsum.photos/id/1035/5854/3903"],
                                postDescription: "DEF",
                                postLikes: [],
                                postDate: "20/03",
                                postComments: [
                                    {
                                        commentId: 2007,
                                        commentText: "Lorem ipsum dolor sit amet",
                                        commentLikes: ['i_am_a_dog'],
                                        commentAuthor: "imagine_i_am_a_user_1",
                                        commentDate: "23/03"
                                    }
                                ]
                            },
                        ]
                    },
                ]
                users.push(currentUser);
                localStorage.users = JSON.stringify(users);
            }

            ctx.commit('updateUsers', users);

        },
    },
    mutations: {
        updateCurrentUser( state, currentUser ) {
            state.currentUser = currentUser;
        },

        updateUsers( state, users ) {
            state.users = users;
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