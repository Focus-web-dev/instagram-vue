"use strict";(self["webpackChunkInstagram_vue"]=self["webpackChunkInstagram_vue"]||[]).push([[305],{305:function(t,e,s){s.r(e),s.d(e,{default:function(){return E}});var a=s(252),o=s(577),n=s(963);const i={class:"container"},l={key:0,class:"full-post"},r={class:"full-post__content"},m=["src"],c={class:"full-post__data"},p={class:"profile-link__info"},u=["src"],d=(0,a._)("svg",{width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,a._)("use",{"xlink:href":"#arrow-icon"})],-1),h={class:"comments"},k={key:0,class:"comment",style:{"margin-bottom":"10px"}},_=["src"],g=["src"],w=["onClick"],v=(0,a._)("use",{"xlink:href":"#like-icon"},null,-1),f=[v],D={class:"comments-footer"},C={class:"bar"},I=(0,a._)("use",{"xlink:href":"#like-icon"},null,-1),b=[I],x=(0,a._)("svg",{width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,a._)("use",{"xlink:href":"#comment-icon"})],-1),A=(0,a._)("use",{"xlink:href":"#save-icon"},null,-1),U=[A],L={class:"form"};function P(t,e,s,v,I,A){const P=(0,a.up)("swiper-slide"),y=(0,a.up)("swiper"),$=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[I.postData.post?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",r,[(0,a.Wm)(y,{class:(0,o.C_)(["swiper",{"swiper_hidden-pagination":I.postData.post.postImages.length<2}]),modules:v.modules,"slides-per-view":1,"space-between":50,navigation:"",pagination:{clickable:!0},keyboard:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(I.postData.post.postImages,(t=>((0,a.wg)(),(0,a.j4)(P,{key:t},{default:(0,a.w5)((()=>[(0,a._)("img",{src:t,alt:"post"},null,8,m)])),_:2},1024)))),128))])),_:1},8,["class","modules"])]),(0,a._)("div",c,[(0,a.Wm)($,{to:`/profile/${this.$route.params.nickname}`,class:"profile-link"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("img",{src:I.postData.authorAvatar,alt:"user-avatar"},null,8,u),(0,a._)("p",null,(0,o.zw)(I.postData.author),1)]),d])),_:1},8,["to"]),(0,a._)("div",h,[""!==I.postData.post.postDescription?((0,a.wg)(),(0,a.iD)("div",k,[(0,a.Wm)($,{to:`/profile/${this.$route.params.nickname}`,class:"author"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:A.getUserAvatar(this.$route.params.nickname),alt:"user avatar"},null,8,_),(0,a._)("span",null,(0,o.zw)(this.$route.params.nickname),1)])),_:1},8,["to"]),(0,a._)("p",null,(0,o.zw)(I.postData.post.postDescription),1)])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(I.postData.post.postComments,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.commentId,class:"comment"},[(0,a.Wm)($,{to:`/profile/${e.commentAuthor}`,class:"author"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:A.getUserAvatar(e.commentAuthor),alt:"user avatar"},null,8,g),(0,a._)("span",null,(0,o.zw)(e.commentAuthor),1)])),_:2},1032,["to"]),(0,a._)("p",null,(0,o.zw)(e.commentText),1),(0,a._)("button",{onClick:s=>t.commentLike(e.commentId),class:"likes"},[((0,a.wg)(),(0,a.iD)("svg",{class:(0,o.C_)(["like",{like_active:A.commentLikeCheck(e.commentId)}]),width:"14",height:"12","aria-hidden":"true",role:"img"},f,2)),(0,a._)("span",null,(0,o.zw)(e.commentLikes.length)+" likes",1)],8,w)])))),128))]),(0,a._)("div",D,[(0,a._)("div",C,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.postLike(I.postData.post.postId)),class:"bar__item","aria-label":"Like post"},[((0,a.wg)(),(0,a.iD)("svg",{class:(0,o.C_)([{like_active:A.likeCheck(I.postData.post)},"like"]),width:"26",height:"24","aria-hidden":"true",role:"img"},b,2)),(0,a._)("span",null,(0,o.zw)(I.postData.post.postLikes.length)+" likes",1)]),(0,a.Wm)($,{to:this.$route.fullPath,class:"bar__item","aria-label":"Comment post"},{default:(0,a.w5)((()=>[x,(0,a._)("span",null,(0,o.zw)(I.postData.post.postComments.length)+" comments",1)])),_:1},8,["to"]),(0,a._)("button",{onClick:e[1]||(e[1]=e=>t.postSave(I.postData.post.postId)),class:"bar__item","aria-label":"Comment post"},[((0,a.wg)(),(0,a.iD)("svg",{class:(0,o.C_)({save_active:A.saveCheck(I.postData.post.postId)}),width:"24",height:"24","aria-hidden":"true",role:"img"},U,2))])]),(0,a._)("div",L,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>I.commentInput=t),type:"text",placeholder:"Enter your comment..."},null,512),[[n.nr,I.commentInput]]),(0,a._)("button",{onClick:e[3]||(e[3]=t=>A.addNewCommentHandler(I.postData.post.postId))}," Post ")])])])])):(0,a.kq)("",!0)])}var y=s(911),$=s(181),z=s(907),N={name:"PostPage",data(){return{postData:{},commentInput:""}},watch:{getAllPosts:function(){this.postData=this.getAllPosts[this.getAllPosts.findIndex((t=>t.post.postId===Number(this.$route.params.id)))]}},components:{Swiper:$.tq,SwiperSlide:$.o5},methods:{...(0,z.nv)(["fetchData"]),...(0,z.OI)(["postLike","postSave","commentLike","addNewComment"]),likeCheck(t){return-1!==t.postLikes.findIndex((t=>t===this.getCurrentUserData.nickname))},saveCheck(t){return-1!==this.getCurrentUserData.savedPosts.findIndex((e=>e===t))},commentLikeCheck(t){let e=!0;return this.getAllPosts.forEach((s=>{s.post.postComments.forEach((s=>{let a=s.commentLikes.findIndex((t=>t===this.getCurrentUserData.nickname));s.commentId===t&&-1===a&&(e=!1)}))})),e},addNewCommentHandler(t){this.commentInput.length&&(this.addNewComment({postId:t,commentText:this.commentInput}),this.commentInput="")},getUserAvatar(t){let e="";return t===this.getCurrentUserData.nickname?e=this.getCurrentUserData.avatar:this.getUsersData.forEach((s=>{s.nickname===t&&(e=s.avatar)})),e}},computed:{...(0,z.Se)(["getUsersData","getAllPosts","getCurrentUserData"])},setup(){return{modules:[y.W_,y.tl,y.N1]}},mounted(){this.fetchData()}},S=s(744);const W=(0,S.Z)(N,[["render",P]]);var E=W}}]);
//# sourceMappingURL=305.4902e8fe.js.map