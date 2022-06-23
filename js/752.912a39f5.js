"use strict";(self["webpackChunkInstagram_vue"]=self["webpackChunkInstagram_vue"]||[]).push([[752],{752:function(t,s,e){e.r(s),e.d(s,{default:function(){return L}});var o=e(252),a=e(577);const n={class:"container"},i={class:"profile"},r={class:"profile__header"},l=["src"],c={class:"data"},u={class:"data__nickname"},p={key:0},g={key:1},_={class:"info"},h={class:"info__item"},w=(0,o.Uk)(" posts "),d={class:"info__item"},f=(0,o.Uk)(" followers "),m={class:"info__item"},v=(0,o.Uk)(" following "),k={class:"data__bio"},D={class:"profile__content"},C={class:"navigation"},U={key:0,class:"preview-posts"},P={key:1,class:"preview-posts"},b={key:2};function S(t,s,e,S,y,T){const z=(0,o.up)("PreviewPostCard");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("section",i,[(0,o._)("div",r,[(0,o._)("img",{src:t.getUserData.avatar,alt:"User avatar"},null,8,l),(0,o._)("div",c,[(0,o._)("div",u,[(0,o._)("h3",null,(0,a.zw)(t.getUserData.nickname),1),this.$route.params.nickname!==t.getCurrentUser.nickname?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:s[0]||(s[0]=t=>T.followHandler()),class:(0,a.C_)(["follow",{unfollow:!T.checkFollow()}])},[T.checkFollow()?((0,o.wg)(),(0,o.iD)("span",p,"Follow")):((0,o.wg)(),(0,o.iD)("span",g,"Unfollow"))],2)):(0,o.kq)("",!0)]),(0,o._)("div",_,[(0,o._)("p",h,[(0,o._)("span",null,(0,a.zw)(y.postsCount.toString()),1),w]),(0,o._)("p",d,[(0,o._)("span",null,(0,a.zw)(y.followersCount.toString()),1),f]),(0,o._)("p",m,[(0,o._)("span",null,(0,a.zw)(y.followingCount.toString()),1),v])]),(0,o._)("div",k,[(0,o._)("h4",null,(0,a.zw)(t.getUserData.name),1),(0,o._)("p",null,(0,a.zw)(t.getUserData.description),1)])])]),(0,o._)("div",D,[(0,o._)("div",C,[(0,o._)("button",{onClick:s[1]||(s[1]=t=>T.switchTab("Posts")),class:(0,a.C_)([{navigation__item_active:"Posts"===y.currentTab},"navigation__item"])}," Posts ",2),this.$route.params.nickname===t.getCurrentUser.nickname?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:s[2]||(s[2]=t=>T.switchTab("Saved posts")),class:(0,a.C_)(["navigation__item",{navigation__item_active:"Saved posts"===y.currentTab}])}," Saved posts ",2)):(0,o.kq)("",!0)]),y.postsCount&&"Posts"===y.currentTab?((0,o.wg)(),(0,o.iD)("div",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.getUserData.posts,(s=>((0,o.wg)(),(0,o.j4)(z,{key:s.postId,postData:s,postAuthor:t.getUserData.nickname},null,8,["postData","postAuthor"])))),128))])):"Saved posts"===y.currentTab?((0,o.wg)(),(0,o.iD)("div",P,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.getSavedPosts,(t=>((0,o.wg)(),(0,o.j4)(z,{key:t.postId,postData:t,postAuthor:t.postAuthor},null,8,["postData","postAuthor"])))),128))])):((0,o.wg)(),(0,o.iD)("h2",b,"No any posts :)"))])])])}var y=e(907);const T={class:"preview-post"},z=["src"],I={class:"post-info"},A={class:"post-info__item"},F=(0,o._)("svg",{class:"like",width:"26",height:"24","aria-hidden":"true",role:"img"},[(0,o._)("use",{"xlink:href":"#like-icon"})],-1),$={class:"post-info__item"},q=(0,o._)("svg",{width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,o._)("use",{"xlink:href":"#comment-icon"})],-1);function H(t,s,e,n,i,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",T,[(0,o.Wm)(l,{to:`/post/${e.postAuthor}/${e.postData.postId}`},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.postData.postImages[0],alt:"Post image"},null,8,z),(0,o._)("div",I,[(0,o._)("div",A,[F,(0,o._)("span",null,(0,a.zw)(e.postData.postLikes.length.toString()),1)]),(0,o._)("div",$,[q,(0,o._)("span",null,(0,a.zw)(e.postData.postComments.length.toString()),1)])])])),_:1},8,["to"])])}var j={name:"PostCard",props:{postData:{type:Object,required:!0},postAuthor:{type:String,required:!0}}},x=e(744);const K=(0,x.Z)(j,[["render",H]]);var O=K,Y={name:"ProfilePage",components:{PreviewPostCard:O},data(){return{postsCount:0,followersCount:0,followingCount:0,followers:[],currentTab:"Posts"}},watch:{$route(t){"ProfilePage"===t.name&&this.fetchUserData(t.params.nickname)},getUserData:function(){this.updateData()}},methods:{...(0,y.nv)(["fetchUserData"]),...(0,y.OI)(["updateUserData","profileFollow"]),switchTab(t){this.currentTab=t},updateData(){this.postsCount=this.getUserData.posts.length,this.followersCount=this.getUserData.followers.length,this.followingCount=this.getUserData.follows.length,this.followers=this.getUserData.followers},followHandler(){this.profileFollow(this.getCurrentUser.nickname),this.updateData()},checkFollow(){return-1===this.followers.findIndex((t=>t===this.getCurrentUser.nickname))}},computed:{...(0,y.Se)(["getUserData","getCurrentUser","getSavedPosts"])},mounted(){this.fetchUserData(this.$route.params.nickname)}};const Z=(0,x.Z)(Y,[["render",S]]);var L=Z}}]);
//# sourceMappingURL=752.912a39f5.js.map