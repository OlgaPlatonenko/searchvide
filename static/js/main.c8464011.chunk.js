(this.webpackJsonpsearchvideo=this.webpackJsonpsearchvideo||[]).push([[0],{10:function(e,t,a){e.exports={container:"Header_container__3FyIe",logo:"Header_logo__15stc",menucontainer:"Header_menucontainer__2R69C",menuWrapper:"Header_menuWrapper__3JGGy",menuleft:"Header_menuleft__3GSsr",menuright:"Header_menuright__1Nm-I",menuitem:"Header_menuitem__3uzAE",menulink:"Header_menulink__3VuEo"}},12:function(e,t,a){e.exports={listwrapper:"VideoListTable_listwrapper__1w7l8",listvideos:"VideoListTable_listvideos__1zYwD",videoitem:"VideoListTable_videoitem__15LI9",aboutvideo:"VideoListTable_aboutvideo__1Vmvd",videotitle:"VideoListTable_videotitle__eKavw",videodescripton:"VideoListTable_videodescripton__2eyE_",videobox:"VideoListTable_videobox__1xkl6"}},14:function(e,t,a){e.exports={searchwrapper:"Search_searchwrapper__2zC61",searchTitle:"Search_searchTitle__1Bpho",searchContainer:"Search_searchContainer__1Frlx",formSearch:"Search_formSearch__3eoVE",formSearchinput:"Search_formSearchinput__1RKT9",searchBtn:"Search_searchBtn__pvYKm",savebtn:"Search_savebtn__3o9NT"}},15:function(e,t,a){e.exports={listname:"VideoListTitle_listname__11TRQ",listicons:"VideoListTitle_listicons__24TMH",listnameleft:"VideoListTitle_listnameleft__2fFdE",listnametext:"VideoListTitle_listnametext__3BzXc",listnamequery:"VideoListTitle_listnamequery__3Y32t",listnametotalcount:"VideoListTitle_listnametotalcount__1CrIP"}},16:function(e,t,a){e.exports={listwrapper:"VideoList_listwrapper__EMQOs",videoconainer:"VideoList_videoconainer__3m-A3",listvideos:"VideoList_listvideos__2bnQm",videoitem:"VideoList_videoitem__1wdkQ",aboutvideo:"VideoList_aboutvideo__397hy",videotitle:"VideoList_videotitle__mt2ur",videodescripton:"VideoList_videodescripton__24Y6Z"}},29:function(e,t,a){e.exports={containerFav:"Favourite_containerFav__33TD4",listfavourite:"Favourite_listfavourite__1sdxR"}},38:function(e,t,a){},40:function(e,t,a){e.exports={container:"Container_container__1ucMb"}},41:function(e,t,a){e.exports={containerMain:"Main_containerMain__2N1eA"}},5:function(e,t,a){e.exports={hystmodal:"SaveQuery_hystmodal__2Nwoy",hystmodalwindow:"SaveQuery_hystmodalwindow__3a8nw",hystmodalcontent:"SaveQuery_hystmodalcontent__1FOt7",hystmodalitem:"SaveQuery_hystmodalitem__3cPte",inputpost:"SaveQuery_inputpost__3XhcV",labelpost:"SaveQuery_labelpost__2Nkve",btnPost:"SaveQuery_btnPost__37g3r",hystmodalshadow:"SaveQuery_hystmodalshadow__1VEcr","hystmodalshadow--show":"SaveQuery_hystmodalshadow--show__1gZfU",titlemodal:"SaveQuery_titlemodal__2iw-_",titlemodalbtn:"SaveQuery_titlemodalbtn__3AefU",titlemodaltext:"SaveQuery_titlemodaltext__3LU_C"}},69:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);a(1);var i,s=a(20),n=a.n(s),c=a(13),r=a(2),o=(a(49),a(19)),l=a(23),d=a(26),u=a.n(d),j=a(39),h=a(22),b=a.n(h),v="AIzaSyBw00rbu07aXzi_-_uNqvohVEJBkD-YDSY",m=b.a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:7,key:v}}),O=(b.a.create({baseURL:"https://www.googleapis.com/youtube/v3/videos",params:{part:"statistic",key:v}}),Object(o.b)("video/getVideo",function(){var e=Object(j.a)(u.a.mark((function e(t){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/search",{params:{q:t}});case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),_=Object(o.c)({name:"video",initialState:{videos:[],status:null,searchingString:null,isShowModal:!1,querySaved:{nameOfQuery:"",textOfQuery:"",sortByOfQuery:null},allQueries:[],total:0,isList:!0,isTable:!1},reducers:{addVideos:function(e,t){e.videos=t.payload},addQueries:function(e,t){e.allQueries.push(t.payload)},addQueriesReload:function(e,t){e.allQueries=t.payload},inputSearch:function(e,t){e.searchingString=t.payload},inputSearchNull:function(e,t){e.searchingString=""},setModalShow:function(e,t){e.isShowModal=!0},setModalClose:function(e,t){e.isShowModal=!1},inputTextSearch:function(e,t){e.querySaved.textOfQuery=t.payload},inputNameSearch:function(e,t){e.querySaved.nameOfQuery=t.payload},isShowListTrue:function(e,t){e.isList=!0,e.isTable=!1},isShowListFalse:function(e,t){e.isList=!1,e.isTable=!0},isShowTableTrue:function(e,t){e.isList=!1,e.isTable=!0},isShowTableFalse:function(e,t){e.isList=!0,e.isTable=!1}},extraReducers:(i={},Object(l.a)(i,O.pending,(function(e){e.status="pending"})),Object(l.a)(i,O.rejected,(function(e,t){e.status="rejected"})),Object(l.a)(i,O.fulfilled,(function(e,t){e.status="fullfiled",e.videos=t.payload.items,e.total=t.payload.pageInfo.totalResults})),i)}),x=_.actions,p=(x.addVideos,x.inputSearch),f=x.setModalShow,y=x.setModalClose,S=x.inputTextSearch,N=x.inputNameSearch,g=x.addQueries,A=x.inputSearchNull,w=x.addQueriesReload,Q=x.isShowListTrue,C=x.isShowListFalse,T=x.isShowTableTrue,L=x.isShowTableFalse,V=_.reducer,B=Object(o.a)({reducer:{videostore:V}}),F=(a(38),a(69),a(14)),I=a.n(F),M=a(0);var q=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.videostore.searchingString}));null===localStorage.getItem("savedquery")&&e(w([].concat({nameOfQuery:"",textOfQuery:"",sortByOfQuery:null})));var a=Object(r.c)((function(e){return e.videostore.allQueries}));return 0===a.length?e(w(JSON.parse(localStorage.getItem("savedquery")))):localStorage.setItem("savedquery",JSON.stringify(a)),Object(M.jsxs)("div",{className:I.a.searchwrapper,children:[Object(M.jsx)("div",{className:I.a.searchTitle,children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(M.jsxs)("div",{className:I.a.searchContainer,children:[Object(M.jsx)("form",{className:I.a.formSearch,children:Object(M.jsx)("input",{placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?...",value:t,onChange:function(t){return a=t.target.value,void e(p(a));var a},className:I.a.formSearchinput})}),Object(M.jsx)("button",{onClick:function(){e(O(t))},className:I.a.searchBtn,children:"\u041d\u0430\u0439\u0442\u0438"}),Object(M.jsx)("div",{onClick:function(){return e(f())},className:I.a.savebtn,children:Object(M.jsx)("i",{class:"fa fa-heart-o fa-2x ","aria-hidden":"true"})})]})]})},k=a(15),X=a.n(k);function H(){var e=Object(r.c)((function(e){return e.videostore.searchingString})),t=Object(r.c)((function(e){return e.videostore.total})),a=Object(r.b)();return Object(M.jsx)("div",{children:Object(M.jsxs)("div",{className:X.a.listname,children:[Object(M.jsxs)("div",{className:X.a.listnameleft,children:[Object(M.jsx)("div",{className:X.a.listnametext,children:"\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"}),Object(M.jsxs)("div",{className:X.a.listnamequery,children:['"',e,'"']}),Object(M.jsx)("div",{className:X.a.listnametotalcount,children:t})]}),Object(M.jsx)("div",{className:X.a.listnameright,children:Object(M.jsxs)("div",{className:X.a.listicons,children:[Object(M.jsxs)("div",{onClick:function(){a(Q()),a(L())},children:[" ",Object(M.jsx)("i",{class:"fa fa-list","aria-hidden":"true"})," "]}),Object(M.jsx)("div",{onClick:function(){a(C()),a(T())},children:Object(M.jsx)("i",{class:"fa fa-table","aria-hidden":"true"})})]})})]})})}var U=a(16),E=a.n(U);var J=function(){var e=Object(r.c)((function(e){return e.videostore.videos}));return Object(r.c)((function(e){return e.videostore.searchingString})),Object(r.c)((function(e){return e.videostore.total})),Object(M.jsxs)("div",{className:E.a.listwrapper,children:[Object(M.jsx)(H,{}),Object(M.jsx)("ul",{className:E.a.listvideos,children:e.map((function(e,t){var a=e.snippet,i=e.id;return Object(M.jsx)("div",{className:E.a.videoitem,children:Object(M.jsx)("li",{children:Object(M.jsxs)("div",{className:E.a.videoconainer,children:[Object(M.jsx)("iframe",{title:i,src:"https://www.youtube.com/embed/".concat(i.videoId)}),Object(M.jsxs)("div",{className:E.a.aboutvideo,children:[Object(M.jsx)("div",{className:E.a.videotitle,children:a.title}),Object(M.jsx)("div",{className:E.a.videodescripton,children:a.description})]})]})},t)})}))})]})},R=a(12),D=a.n(R);var Y=function(){var e=Object(r.c)((function(e){return e.videostore.videos}));return Object(M.jsxs)("div",{className:D.a.listwrapper,children:[Object(M.jsx)(H,{}),Object(M.jsx)("ul",{className:D.a.listvideos,children:e.map((function(e,t){var a=e.snippet,i=e.id;return Object(M.jsx)("div",{className:D.a.videoitem,children:Object(M.jsx)("li",{children:Object(M.jsxs)("div",{className:D.a.videoconainer,children:[Object(M.jsx)("div",{className:D.a.videobox,children:Object(M.jsx)("iframe",{title:i,src:"https://www.youtube.com/embed/".concat(i.videoId)})}),Object(M.jsxs)("div",{className:D.a.aboutvideo,children:[Object(M.jsx)("div",{className:D.a.videotitle,children:a.title}),Object(M.jsx)("div",{className:D.a.videodescripton,children:a.description})]})]})},t)})}))})]})},G=(a(40),a(4)),z=function(){return Object(M.jsxs)(G.c,{children:[Object(M.jsx)(G.a,{exact:!0,path:"/",component:ie}),Object(M.jsx)(G.a,{path:"/saved",component:se}),Object(M.jsx)(G.a,{exact:!0,path:"/favourite",component:re}),Object(M.jsx)(G.a,{path:"*",children:Object(M.jsx)("div",{children:"404 Not Found"})})]})},K=a(10),W=a.n(K);var Z=function(){return Object(M.jsx)("div",{className:W.a.container,children:Object(M.jsx)("div",{className:W.a.menucontainer,children:Object(M.jsxs)("ul",{className:W.a.menuWrapper,children:[Object(M.jsxs)("div",{className:W.a.menuleft,children:[Object(M.jsxs)("li",{className:W.a.menuitem,children:[Object(M.jsx)(c.b,{to:"/",className:W.a.menulink,children:Object(M.jsx)("div",{className:W.a.logo,children:Object(M.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHaSURBVHgB7ZhNSsNAGIbfaVXEVSi4FPQAQoUquGsPIrY3qEsXYjxBj1DpRUxXbgp6gxbsH7Rgqv2Joo6JdsCEUtqZ+SYu8kBISDbPs5gZvgAJCQkJMuSqg/xxbXgX3KHABgwTCLM0u/Yf8/NXN1DAWMACcS2QB1CJC8gCqMUF2gNMiQu0BZgWFygHxCUukA6IW1wgFZCrDcoMrIJ/QAoycFhQhtc544VGadeBAsZP4l9x2I0zNXGBwQC94gIDATTiArKAmefBHY0ex5OXomuftkCE3CJeQiDe6fXQ6fYwmUyzDBvNjN2oWvb9PgjQFvBXfDbzQt84eJEqRDlgmXgUihDpgHXEo4RDHpTOFKmAdrfvdLr91rriUYIQ4CMLBaQC+peHzrOdO/AFSgBrIUaU1oBrn9zGHaJlF4ozROs5EAphKRcG0H4SW5WnfJqlz/0lavH3Kbj3Cnx9ggptAXNxf8Dh+WB/CWBbOz8XZYhywCLxKJQh0gGriEehCJEKyFTaZcaCkXI18SihkLcxVJDchbj6SMl5PbW5XXCvjhwoYH6k9MUZuD282HOgAXMBmsUF9AFE4gK6AGJxgf4AQ+ICfQGGxQXqATGJC+QDYhZXwqo0NfwbTUhI0ME33O0pZpJM3QAAAAAASUVORK5CYII=",alt:""})})})," "]}),Object(M.jsxs)("li",{className:W.a.menuitem,children:[Object(M.jsx)(c.b,{to:"/",className:W.a.menulink,children:"\u041f\u043e\u0438\u0441\u043a"})," "]}),Object(M.jsx)("li",{className:W.a.menuitem,children:Object(M.jsx)(c.b,{to:"/favourite",className:W.a.menulink,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})]}),Object(M.jsx)("li",{className:W.a.menuright,children:"\u0412\u044b\u0439\u0442\u0438"})]})})})},P=a(5),$=a.n(P);function ee(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.videostore.querySaved.nameOfQuery})),a=Object(r.c)((function(e){return e.videostore.querySaved.textOfQuery})),i=Object(r.c)((function(e){return e.videostore.querySaved.sortByOfQuery})),s=Object(r.c)((function(e){return e.videostore.searchingString}));Object(r.c)((function(e){return e.videostore.isShowModal}));return Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:$.a.hystmodal,children:Object(M.jsxs)("div",{className:$.a.hystmodalwindow,children:[Object(M.jsx)("div",{className:$.a.titlemodal,children:Object(M.jsx)("div",{className:$.a.titlemodaltext,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"})}),Object(M.jsxs)("div",{className:$.a.hystmodalcontent,children:[Object(M.jsxs)("div",{className:$.a.hystmodalitem,children:[Object(M.jsx)("label",{htmlFor:"query",className:$.a.labelpost,children:"\u0417\u0430\u043f\u0440\u043e\u0441 "}),Object(M.jsx)("input",{type:"text",placeholder:"\u0447\u0435\u043c \u043a\u043e\u0440\u043c\u0438\u0442\u044c \u043a\u043e\u0442\u0430...",id:"query",value:s,disabled:"true",onChange:function(t){return a=t.target.value,void e(S(a));var a},className:$.a.inputpost})]}),Object(M.jsxs)("div",{className:$.a.hystmodalitem,children:[Object(M.jsx)("label",{htmlFor:"name",className:$.a.labelpost,children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "}),Object(M.jsx)("input",{type:"text",form:"savequery",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...",id:"name",onChange:function(t){return a=t.target.value,void e(N(a));var a},className:$.a.inputpost})]}),Object(M.jsxs)("div",{className:$.a.hystmodalitem,children:[Object(M.jsx)("label",{htmlFor:"sortBy",className:$.a.labelpost,children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e "}),Object(M.jsx)("input",{type:"text",placeholder:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438...",id:"sortBy",className:$.a.inputpost})]})]}),Object(M.jsx)("button",{className:$.a.btnPost,onClick:function(){e(g({nameOfQuery:t,textOfQuery:a,sortOfQuery:i})),e(y()),e(A())},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(M.jsx)("button",{className:$.a.btnPost,onClick:function(){e(y())},children:"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c"})]})}),Object(M.jsx)("div",{className:$.a.hystmodalshadow})]})}var te=a(41),ae=a.n(te);var ie=function(){Object(r.b)(),Object(r.c)((function(e){return e.videostore.videos}));var e=Object(r.c)((function(e){return e.videostore.status})),t=(Object(r.c)((function(e){return e.videostore.searchingString})),Object(r.c)((function(e){return e.videostore.isShowModal}))),a=Object(r.c)((function(e){return e.videostore.isList})),i=Object(r.c)((function(e){return e.videostore.isTable}));return Object(M.jsxs)("div",{children:[Object(M.jsx)(Z,{}),Object(M.jsxs)("div",{className:ae.a.containerMain,children:[Object(M.jsx)(q,{}),"fullfiled"===e&&a?Object(M.jsx)(J,{}):"fullfiled"===e&&i?Object(M.jsx)(Y,{}):null]}),Object(M.jsx)("div",{children:t?Object(M.jsx)(ee,{}):null})]})};var se=function(){return Object(M.jsx)("div",{children:Object(M.jsx)("h2",{children:"Saved"})})},ne=a(29),ce=a.n(ne);var re=function(){var e=JSON.parse(localStorage.getItem("savedquery"));return Object(M.jsxs)("div",{children:[Object(M.jsx)(Z,{}),Object(M.jsxs)("div",{className:ce.a.containerFav,children:[Object(M.jsx)("h2",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(M.jsx)("div",{children:Object(M.jsx)("ul",{className:ce.a.listfavourite,children:e.map((function(e,t){return Object(M.jsx)("li",{children:Object(M.jsx)("div",{children:e.nameOfQuery})},t)}))})})]})]})};var oe=function(){return Object(M.jsx)("div",{children:Object(M.jsx)(z,{children:Object(M.jsx)(ie,{})})})};n.a.render(Object(M.jsx)(r.a,{store:B,children:Object(M.jsx)(c.a,{basename:"/searchvideo",children:Object(M.jsx)(oe,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.c8464011.chunk.js.map