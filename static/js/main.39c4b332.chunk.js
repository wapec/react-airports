(this["webpackJsonpreact-airports"]=this["webpackJsonpreact-airports"]||[]).push([[0],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="[@@Search] SET_SEARCH"},162:function(e,t,n){e.exports=n(297)},294:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=n(91),u=n(83),s=n(13),l=n(139),d=n(148),p=n(149),f=n(45),b={0:"id",1:"name",2:"city",3:"country",4:"iata",5:"icao",6:"lat",7:"lng",8:"altitude",9:"timezone",10:"dst",11:"tz",12:"type",13:"source"},h=n(90),m=n(33),v={airportsList:[],_pending:!1,_loaded:!1,_error:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a:return Object(f.a)({},e,{_pending:!0,_loaded:!1});case m.c:var n=Object(h.b)(t.payload,b);return Object(f.a)({},e,{airportsList:n,_pending:!1,_loaded:!0});case m.b:return Object(f.a)({},e,{_loaded:!1,_pending:!1});default:return e}},O=n(101),j={searchResults:[],_pending:!1,_loaded:!1,_error:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a:return Object(f.a)({},e,{searchResults:t.payload});default:return e}},_=n(36),y=n.n(_),E=n(40),k=n(140),x=n.n(k),S=y.a.mark(T),R=y.a.mark(A);function T(e){var t,n,a;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.callback,r.prev=1,r.next=4,Object(E.b)((function(){return x.a.get("https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat")}));case 4:return n=r.sent,a=n.data,r.next=8,Object(E.c)({type:m.c,payload:a});case 8:t&&t(),r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(1),r.next=15,Object(E.c)({type:m.b,payload:r.t0});case 15:case"end":return r.stop()}}),S,null,[[1,11]])}function A(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(m.a,T);case 2:case"end":return e.stop()}}),R)}var I=y.a.mark(C);function C(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([A()]);case 2:case"end":return e.stop()}}),I)}var L=Object(s.combineReducers)({main:g,search:w}),M=Object(p.a)(),P=[M],z=Object(l.composeWithDevTools)(s.applyMiddleware.apply(void 0,P)),G=Object(s.createStore)(L,z);Object(d.a)(G);M.run(C);var W=n(34),B=n(305),J=n(303),D=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,352))})),F={backgroundColor:"#d8e7ea"},H=function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(B.a,{active:!0,inverted:!0,style:F},r.a.createElement(J.a,{inverted:!0},"Loading"))},r.a.createElement(W.c,null,r.a.createElement(W.a,{component:D,path:"/react-airports",exact:!0})))},U=(n(294),function(){return r.a.createElement(H,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(295),n(296);o.a.render(r.a.createElement(i.a,{store:G},r.a.createElement(u.a,null,r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}));var a="[@@Map] GET_AIRPORTS",r="[@@Map] GET_AIRPORTS_SUCCESS",c="[@@Map] GET_AIRPORTS_FAIL"},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(298),r=function(e,t){return Object(a.a)(e,t)},c=function(e,t){return e.split(/\n/).map((function(e){return e.split(",").reduce((function(e,n,a){return e[t[a]]=n.replace(/"/g,""),e}),{})}))}}},[[162,1,2]]]);
//# sourceMappingURL=main.39c4b332.chunk.js.map