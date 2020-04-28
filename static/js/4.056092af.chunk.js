(this["webpackJsonpreact-airports"]=this["webpackJsonpreact-airports"]||[]).push([[4],{340:function(e,t,a){e.exports={root:"Map_root__2FdYZ"}},342:function(e,t,a){e.exports={root:"SearchInput_root__Xzn5i",searchInput:"SearchInput_searchInput__3lKkn",noResults:"SearchInput_noResults__17dY9",resultsWrapper:"SearchInput_resultsWrapper__3mFh7",resultLabel:"SearchInput_resultLabel__1E1Pd",popupHeader:"SearchInput_popupHeader__10yKl"}},402:function(e,t,a){e.exports={root:"SearchAirport_root__2CjAk",searchContainer:"SearchAirport_searchContainer__2jzFw",map:"SearchAirport_map__WeABs"}},403:function(e,t,a){e.exports={root:"Main_root__zd-uY"}},414:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(94),o=a(69),i=a(12),u=a(404),l=a(319),s=a(417),p=a(419),m=a(421),f=a(413),b=a(422),h=a(420),d=a(323),j=5,O=8,g=3,_=18,v=a(340),E=a.n(v),k=function(e){var t=e.markers,a=e.center,n=e.className,c=e.lines,o=e.zoom,i=function(e,t){return a.lat===e&&a.lng===t?1:.5};return r.a.createElement(p.a,{center:a,zoom:o||j,minZoom:g,maxZoom:_,className:Object(d.a)(E.a.root,n)},r.a.createElement(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),!Object(s.a)(t)&&t.map((function(e){var t=e.lat,a=e.lng,n=e.info,c=e.id;return r.a.createElement(f.a,{position:{lat:t,lng:a},opacity:i(t,a),key:c},r.a.createElement(b.a,null,n))})),c&&!Object(s.a)(c)&&c.map((function(e,t){return r.a.createElement(h.a,{positions:e,key:t})})))},N=function(e){return e.main},S=function(e){return e.search},y=a(418),C=a(338),I=a(416),z=a(415),A=a(339);var L=a(105),R=a(342),x=a.n(R),w=Object(n.memo)((function(e){var t=e.list,a=e.onResultClick,o=e.searchCondition,i=e.onIconClick,u=Object(c.b)(),p=Object(c.c)(S).searchResults,m=Object(n.useState)(""),f=Object(l.a)(m,2),b=f[0],h=f[1],j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,a=Object(n.useState)(e),r=Object(l.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){o(e)}),t);return function(){clearTimeout(a)}}),[e,t]),c}(b,800),O=b&&b.length>=3&&j,g=function(e){a(e,t)},_=function(e){e.stopPropagation(),i(e,t)};return Object(n.useEffect)((function(){var e,a,n=[];O&&(n=t.filter((function(e){return o.map((function(t){return e[t]&&e[t].toLowerCase()})).join(",").includes(b.toLowerCase())}))),u((e=n,{type:L.a,payload:e,callback:a}))}),[b,t,O,u]),r.a.createElement("div",{className:x.a.root},r.a.createElement(y.a,{icon:"search",placeholder:"Search airport",className:x.a.searchInput,transparent:!0,loading:!j&&!!b,onChange:function(e){var t=e.target.value;h(t||"")}}),!Object(s.a)(p)&&r.a.createElement("div",{className:x.a.resultsWrapper},r.a.createElement(C.a,{className:x.a.resultLabel,attached:"top right",size:"tiny"},p.length," ",p.length>1?"results":"result"),p.map((function(e,t){var a=e.iata,n=e.name,c=e.country,o=e.city,i=e.icao,u=e.id;return r.a.createElement(I.a,{key:t,header:r.a.createElement(z.a,{content:"Where can I fly from here? Click",position:"top right",inverted:!0,basic:!0,trigger:r.a.createElement("div",{className:Object(d.a)("header",x.a.popupHeader)},a,r.a.createElement("span",{onClick:_,"data-id":u},r.a.createElement(A.a,{name:"globe"})))}),meta:i,description:"".concat(n," / ").concat(o,", ").concat(c),"data-id":u,onClick:g})}))),Object(s.a)(p)&&O&&r.a.createElement("span",{className:x.a.noResults},"No results"))}),o.a),W=a(402),M=a.n(W),T=Object(n.memo)((function(){var e=Object(n.useState)({lat:51.477928,lng:-.001545}),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(j),p=Object(l.a)(i,2),m=p[0],f=p[1],b=Object(n.useState)(null),h=Object(l.a)(b,2),d=h[0],g=h[1],_=Object(n.useState)([]),v=Object(l.a)(_,2),E=v[0],y=v[1],C=Object(n.useState)([]),I=Object(l.a)(C,2),z=I[0],A=I[1],L=Object(c.c)(N),R=L.airportsList,x=L.routesList,W=Object(c.c)(S).searchResults,T=Object(n.useMemo)((function(){f(j);var e=[];return W.forEach((function(t){var a=t.lat,n=t.lng,r=t.name,c=t.id;Number.isNaN(+a)||Number.isNaN(+n)||(e=[].concat(Object(u.a)(e),[{lat:+a,lng:+n,info:r,id:c}]))})),e}),[W]),F=function(e,t){var a=e.currentTarget&&e.currentTarget.getAttribute("data-id");return t.find((function(e){return e.id===a}))||null},H=function(e){o({lat:+e.lat,lng:+e.lng}),f(O),y([]),A([])};return Object(n.useEffect)((function(){if(d&&(H(d),!Object(s.a)(x))){var e=(t=d,x.filter((function(e){return e.destinationAirport===t.iata}))).map((function(e){return e.sourceAirport})).join(",");y(R.filter((function(t){return e.includes(t.iata)})))}var t}),[d]),Object(n.useEffect)((function(){if(!Object(s.a)(E)&&d){var e=d.lat,t=d.lng,a=E.reduce((function(a,n){return a=[].concat(Object(u.a)(a),[[{lat:e,lng:t},{lat:+n.lat,lng:+n.lng}]])}),[]);A(a)}}),[E]),r.a.createElement("div",{className:M.a.root},r.a.createElement(k,{markers:T,center:a,zoom:m,className:M.a.map,lines:z}),r.a.createElement("div",{className:M.a.searchContainer},r.a.createElement(w,{list:R,searchCondition:["iata","name","country","city"],onResultClick:function(e,t){var a=F(e,t);a&&a.lat&&a.lng&&H(a)},onIconClick:function(e,t){var a=F(e,t);a&&a.lat&&a.lng&&g(a)}})))}),o.a),F=a(403),H=a.n(F);t.default=Object(n.memo)((function(){var e=Object(c.b)();return Object(n.useEffect)((function(){var t;e({type:i.a,callback:t}),e(function(e){return{type:i.d,callback:e}}())}),[e]),r.a.createElement("div",{className:H.a.root},r.a.createElement(T,null))}),o.a)}}]);
//# sourceMappingURL=4.056092af.chunk.js.map