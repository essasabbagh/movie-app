(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["details"],{"87ae":function(t,c,e){"use strict";e("fcf9")},"9f52":function(t,c,e){"use strict";e.r(c);var i=e("7a23");function n(t,c,e,n,b,a){var o=Object(i["y"])("MovieDetails");return Object(i["r"])(),Object(i["e"])("div",null,[Object(i["i"])(o)])}var b={class:"poster"},a={class:"card mb-3"},o={class:"one"},l={class:"card-body"},s={class:"card-title"},r={class:"text-muted"},j={class:"card-text"},O=Object(i["i"])("b",null,"Plot: ",-1),d={class:"card-body"},u={class:"card-text"},f=Object(i["i"])("b",null,"Actors: ",-1),p={class:"card-text"},h=Object(i["i"])("b",null,"Genre: ",-1),m={class:"card-text"},v=Object(i["i"])("b",null,"Language: ",-1),A={class:"card-text"},g=Object(i["i"])("b",null,"Type: ",-1),x={class:"card-text"},w=Object(i["i"])("b",null,"Runtime: ",-1),y={class:"card-text"},k=Object(i["i"])("b",null,"Writer: ",-1),D={class:"card-text"},T=Object(i["i"])("b",null,"imdbID: ",-1),R={class:"card-text"},C=Object(i["i"])("b",null,"imdbRating: ",-1),I={class:"card-text"},G=Object(i["i"])("b",null,"Country: ",-1);function J(t,c,e,n,J,L){return Object(i["r"])(),Object(i["e"])("div",b,[Object(i["i"])("div",a,[Object(i["i"])("div",o,[Object(i["i"])("img",{src:"http://img.omdbapi.com/?apikey=1feca478&i=".concat(J.info.imdbID),class:"card-img-top",alt:J.info.Title},null,8,["src","alt"]),Object(i["i"])("div",l,[Object(i["i"])("h4",s,[Object(i["h"])(Object(i["A"])(J.info.Title)+" ",1),Object(i["i"])("small",r,Object(i["A"])(J.info.Year),1)]),Object(i["i"])("p",j,[O,Object(i["h"])(" "+Object(i["A"])(J.info.Plot),1)])])]),Object(i["i"])("div",d,[Object(i["i"])("p",u,[f,Object(i["h"])(Object(i["A"])(J.info.Actors),1)]),Object(i["i"])("p",p,[h,Object(i["h"])(Object(i["A"])(J.info.Genre),1)]),Object(i["i"])("p",m,[v,Object(i["h"])(Object(i["A"])(J.info.Language),1)]),Object(i["i"])("p",A,[g,Object(i["h"])(Object(i["A"])(J.info.Type),1)]),Object(i["i"])("p",x,[w,Object(i["h"])(Object(i["A"])(J.info.Runtime),1)]),Object(i["i"])("p",y,[k,Object(i["h"])(Object(i["A"])(J.info.Writer),1)]),Object(i["i"])("p",D,[T,Object(i["h"])(Object(i["A"])(J.info.imdbID),1)]),Object(i["i"])("p",R,[C,Object(i["h"])(Object(i["A"])(J.info.imdbRating)+" / 10",1)]),Object(i["i"])("p",I,[G,Object(i["h"])(Object(i["A"])(J.info.Country),1)]),Object(i["i"])("button",{class:"btn btn-danger",onClick:c[1]||(c[1]=function(c){return t.$router.push("/")})}," Back To Home ")])])])}var L=e("bc3a"),M=e.n(L),P={data:function(){return{info:{}}},created:function(){var t=this;M.a.get("http://www.omdbapi.com/?apikey=1feca478&i=".concat(this.$route.params.id)).then((function(c){t.info=c.data,console.log("info",t.info)})).catch((function(t){console.log(t)}))}};e("87ae");P.render=J;var W=P,$={components:{MovieDetails:W}};$.render=n;c["default"]=$},fcf9:function(t,c,e){}}]);
//# sourceMappingURL=details.16e94e73.js.map