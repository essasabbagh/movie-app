(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({about:"about",advance:"advance",details:"details",favorites:"favorites"}[e]||e)+"."+{about:"e23cb3d7",advance:"a2736362",details:"16e94e73",favorites:"f38898e6"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,advance:1,details:1,favorites:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",advance:"advance",details:"details",favorites:"favorites"}[e]||e)+"."+{about:"4f905970",advance:"cd9ee2ca",details:"4c762fb3",favorites:"f6e32cbe"}[e]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],b.parentNode.removeChild(b),n(r)},b.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(b)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Movie-App/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2838:function(e,t,n){},"2b99":function(e,t,n){},"3f50":function(e,t,n){},"52cd":function(e,t,n){"use strict";n("2838")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o={id:"nav"};function i(e,t,n,i,r,c){var s=Object(a["y"])("nav-bar"),l=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["e"])("div",null,[Object(a["i"])("div",o,[Object(a["i"])(s)]),Object(a["i"])(a["b"],{name:"moveUp",mode:"out-in"},{default:Object(a["F"])((function(){return[Object(a["i"])(l)]})),_:1})])}var r={class:"navbar navbar-expand-lg navbar-light"},c={class:"container-fluid"},s=Object(a["i"])("a",{class:"navbar-brand",href:"#"},"Movie App",-1),l=Object(a["i"])("span",{class:"navbar-toggler-icon"},null,-1),u={class:"navbar-nav"},d={class:"nav-item"},b=Object(a["h"])("Home"),v={class:"nav-item"},f=Object(a["h"])("Favorites"),p={class:"nav-item"},m=Object(a["h"])("Advance"),O={class:"nav-item"},h=Object(a["h"])("About"),j=Object(a["i"])("span",null," Movie App | Kodluyoruz ",-1);function g(e,t,n,o,i,g){var y=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["e"])("div",null,[Object(a["i"])("nav",r,[Object(a["i"])("div",c,[s,Object(a["i"])("button",{onClick:t[1]||(t[1]=function(){return g.openToggle&&g.openToggle.apply(g,arguments)}),class:[{collapsed:i.isOpen},"navbar-toggler"],type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":i.isOpen,"aria-label":"Toggle navigation"},[l],10,["aria-expanded"]),Object(a["i"])("div",{class:["collapse navbar-collapse",{show:i.isOpen}],id:"navbarNav"},[Object(a["i"])("ul",u,[Object(a["i"])("li",d,[Object(a["i"])(y,{to:"/",class:"nav-link active","aria-current":"page"},{default:Object(a["F"])((function(){return[b]})),_:1})]),Object(a["i"])("li",v,[Object(a["i"])(y,{to:"/favorites",class:"nav-link"},{default:Object(a["F"])((function(){return[f]})),_:1})]),Object(a["i"])("li",p,[Object(a["i"])(y,{to:"/advance",class:"nav-link"},{default:Object(a["F"])((function(){return[m]})),_:1})]),Object(a["i"])("li",O,[Object(a["i"])(y,{to:"/about",class:"nav-link"},{default:Object(a["F"])((function(){return[h]})),_:1})])]),j],2)])])])}var y={data:function(){return{isOpen:!1}},methods:{openToggle:function(){this.isOpen=!this.isOpen}}};n("845d");y.render=g;var w=y,I={components:{NavBar:w}};n("b57d");I.render=i;var k=I,S=(n("d3b7"),n("6c02")),_={class:"home"},F={id:"datalistOptions"},N={key:0,class:"alert alert-danger",role:"alert"},x={class:"container"},M={key:0,class:"mx-auto text-center"},A=Object(a["i"])("p",{class:"fs-1 text-muted"},"There is no movie",-1),D=Object(a["i"])("p",null,[Object(a["i"])("span",{class:"fs-1 text-muted"},"ㄟ( ▔, ▔ )ㄏ")],-1);function T(e,t,n,o,i,r){var c=Object(a["y"])("Movies");return Object(a["r"])(),Object(a["e"])("div",_,[Object(a["G"])(Object(a["i"])("input",{autofocus:"",tabindex:"0",type:"text",class:"form-control search_text mt-5 mb-5",list:"datalistOptions",id:"exampleDataList",placeholder:"Write name of movie ...","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.movieName=e}),onInput:t[2]||(t[2]=function(){return r.getMoviesSuggestions&&r.getMoviesSuggestions.apply(r,arguments)}),onSelect:t[3]||(t[3]=function(){return r.getMovieInfo&&r.getMovieInfo.apply(r,arguments)}),onKeyup:t[4]||(t[4]=Object(a["H"])((function(){return r.getMovieInfo&&r.getMovieInfo.apply(r,arguments)}),["enter"]))},null,544),[[a["D"],i.movieName]]),Object(a["i"])("datalist",F,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.suggestionsList,(function(e){return Object(a["r"])(),Object(a["e"])("option",{key:e.imdbID,value:e.Title},null,8,["value"])})),128))]),i.wrong?(Object(a["r"])(),Object(a["e"])("div",N,Object(a["A"])(i.wrong),1)):Object(a["f"])("",!0),Object(a["i"])("div",x,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.movieList,(function(t,n){return Object(a["r"])(),Object(a["e"])(c,{key:n,details:t,onClick:function(n){return e.$router.push("/details/".concat(t.imdbID))}},null,8,["details","onClick"])})),128)),0==i.movieList.length?(Object(a["r"])(),Object(a["e"])("div",M,[A,D])):Object(a["f"])("",!0)])])}var L=n("bc3a"),C=n.n(L),P=n("6c49"),E={components:{Movies:P["a"]},data:function(){return{movieName:null,movieDetails:null,movieList:[],suggestionsList:[],wrong:null}},methods:{getMoviesSuggestions:function(){var e=this;this.wrong=null,C.a.get("http://www.omdbapi.com/?apikey=1feca478&s=".concat(this.movieName)).then((function(t){"False"!==t.data.Response&&(console.log("suggestionsList",t.data.Search),e.suggestionsList=t.data.Search)})).catch((function(e){console.error(e)}))},getMovieInfo:function(){var e=this;this.movieList=[],C.a.get("http://www.omdbapi.com/?apikey=1feca478&s=".concat(this.movieName)).then((function(t){"False"===t.data.Response?e.wrong="There is no movie with this name!":(e.wrong=null,console.log(t.data.Search),e.movieList=t.data.Search)})).catch((function(e){console.log(e)})),this.movieDetails=null,this.movieName=""}}};n("b17d");E.render=T;var J=E,B=n("6f76"),H=n.n(B),K=Object(a["J"])("data-v-af88e9c8");Object(a["u"])("data-v-af88e9c8");var U=Object(a["i"])("div",{class:"card"},[Object(a["i"])("img",{src:H.a,alt:"not_found"}),Object(a["i"])("h2",{class:"card-title"},"Not Found :("),Object(a["i"])("p",null,[Object(a["h"])(" We don't know how you arrive to here ,but you can back to "),Object(a["i"])("a",{href:"/"},"Home")])],-1);Object(a["s"])();var $=K((function(e,t,n,o,i,r){return Object(a["r"])(),Object(a["e"])("div",null,[U])})),q={};n("a942");q.render=$,q.__scopeId="data-v-af88e9c8";var R=q,W=[{path:"/",name:"Home",component:J},{path:"/favorites",name:"Favorites",component:function(){return n.e("favorites").then(n.bind(null,"48d5"))}},{path:"/advance",name:"Advance",component:function(){return n.e("advance").then(n.bind(null,"ad23"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Details/:id",props:!0,component:function(){return n.e("details").then(n.bind(null,"9f52"))}},{path:"/not-found",component:R},{path:"/:pathMatch(.*)*",component:R}],z=Object(S["a"])({history:Object(S["b"])("/Movie-App/"),routes:W}),G=z;n("ab8b"),n("7d05");Object(a["d"])(k).use(G).mount("#app")},"6c49":function(e,t,n){"use strict";var a=n("7a23"),o=Object(a["J"])("data-v-ac9ddcf4");Object(a["u"])("data-v-ac9ddcf4");var i={id:"movies"},r={class:"card movie-card"},c={class:"bg-image"},s={class:"cardBody"},l={class:"cardFooter"},u={class:"action_container"},d=Object(a["i"])("i",{class:"isFavorite fa fa-heart"},null,-1),b=Object(a["i"])("i",{class:"fa fa-heart"},null,-1),v={class:"card-titl"};Object(a["s"])();var f=o((function(e,t,n,o,f,p){return Object(a["r"])(),Object(a["e"])("div",i,[Object(a["i"])("div",r,[Object(a["i"])("div",c,[Object(a["i"])("img",{src:p.img,class:"img-fluid image"},null,8,["src"])]),Object(a["i"])("div",s,[Object(a["i"])("div",l,[Object(a["i"])("div",u,[p.isFavorite?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:t[1]||(t[1]=Object(a["I"])((function(e){return p.removeFromFav(f.movieInfo)}),["stop"])),class:"btnn"},[d])):(Object(a["r"])(),Object(a["e"])("button",{key:1,class:"btnn",onClick:t[2]||(t[2]=Object(a["I"])((function(e){return p.addToFav(f.movieInfo)}),["stop"]))},[b])),Object(a["i"])("a",{href:"https://www.imdb.com/title/".concat(f.movieInfo.imdbID,"/"),target:"_blank",class:"button"},"IMDb",8,["href"])]),Object(a["i"])("h5",v,[Object(a["h"])(Object(a["A"])(f.movieInfo.Title)+" ",1),Object(a["i"])("small",null,Object(a["A"])(f.movieInfo.Year),1)])])])])])})),p=(n("4de4"),n("7db0"),n("bc3a")),m=n.n(p),O={props:["details"],data:function(){return{AllFavList:[],movieInfo:{}}},created:function(){var e=this;m.a.get("http://www.omdbapi.com/?apikey=1feca478&i=".concat(this.details.imdbID)).then((function(t){console.log(t.data),e.movieInfo=t.data})).catch((function(e){console.error(e)}))},computed:{img:function(){return"N/A"==this.movieInfo.Poster?"../assets/noposter.jpg":this.movieInfo.Poster},isFavorite:function(){var e=this,t=JSON.parse(localStorage.getItem("movie"))||[];return t.find((function(t){return t.imdbID==e.details.imdbID}))}},methods:{addToFav:function(e){var t={title:e.Title,imdbID:e.imdbID},n=JSON.parse(localStorage.getItem("movie"))||[];n.push(t),localStorage.setItem("movie",JSON.stringify(n)),this.$router.push("/favorites")},removeFromFav:function(e){var t=JSON.parse(localStorage.getItem("movie"))||[],n=t.filter((function(t){return t.imdbID!=e.imdbID}));localStorage.setItem("movie",JSON.stringify(n)),this.$router.push("/favorites")}}};n("52cd");O.render=f,O.__scopeId="data-v-ac9ddcf4";t["a"]=O},"6f76":function(e,t,n){e.exports=n.p+"img/not_found.46a8b06e.png"},"7d05":function(e,t,n){},"845d":function(e,t,n){"use strict";n("cc7f")},"8b30":function(e,t,n){},a942:function(e,t,n){"use strict";n("3f50")},b17d:function(e,t,n){"use strict";n("2b99")},b57d:function(e,t,n){"use strict";n("8b30")},cc7f:function(e,t,n){}});
//# sourceMappingURL=app.a40f5f0b.js.map