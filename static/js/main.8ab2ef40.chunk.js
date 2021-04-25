(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(43),r=n(26),c=n.n(r),o=n(25),i=n(7);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(0),l=n(103),h=n(99),u=n(92),d=n(93),j=n(94),b=n(65),p=n(95),m=n(97),f=n(96),O=n(98),g=n(102),y=n(101),x=n(44);function v(){try{return document.cookie.split("; ").find((function(e){return e.startsWith("access_token=")})).split("=")[1]}catch(e){return null}}var k=n(20),w=n(21),G=n(18),C=n(24),T=n(22),B=n(3),P=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).props=e,a.state={username:""},a.handleSubmit=a.handleSubmit.bind(Object(G.a)(a)),a}return Object(w.a)(n,[{key:"validateForm",value:function(){return this.state.username.length>0}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.createAndLoginUser()}},{key:"createAndLoginUser",value:function(){var e=this;fetch("https://uno-dos-tres.herokuapp.com/player",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.username})}).then((function(e){return e.json()})).then((function(t){document.cookie="access_token="+t.access_token,e.props.history.push("/"),e.props.history.go()})).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){var e=this;return Object(B.jsxs)(s.Fragment,{children:[Object(B.jsx)(g.a,{htmlFor:"component-helper",children:"Username"}),Object(B.jsx)(y.a,{id:"username","aria-describedby":"component-helper-text",autoFocus:!0,type:"username",onChange:function(t){return e.setState({username:t.target.value})}}),Object(B.jsx)(h.a,{block:!0,bssize:"large",disabled:!this.validateForm(),onClick:this.handleSubmit,children:"Login"})]})}}]),n}(s.Component),S=Object(i.f)(P),E=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(B.jsx)(s.Fragment,{children:Object(B.jsx)("h1",{children:"Home"})})}}]),n}(s.Component),A=Object(i.f)(E),I=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).startGame=a.startGame.bind(Object(G.a)(a)),a.gameId=e.match.params.id,a}return Object(w.a)(n,[{key:"render",value:function(){return Object(B.jsx)(s.Fragment,{children:Object(B.jsx)("h1",{children:"GAME PAGE"})})}}]),n}(s.Component),F=Object(i.f)(I),N=n(40),W=n.n(N),z=n(45),L=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).startGame=a.startGame.bind(Object(G.a)(a)),a.newGame=a.newGame.bind(Object(G.a)(a)),a.gameId=e.match.params.id,a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){null==this.gameId&&this.newGame(),this.listenEvents()}},{key:"listenEvents",value:function(){var e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new EventSource("".concat("https://uno-dos-tres.herokuapp.com/","lobby/").concat(this.gameId),{headers:{Authorization:"Bearer ".concat(v())},withCredentials:!0}).onmessage=function(e){console.log(e.data)};case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requiredPlayers",value:function(){try{if(this.getPlayers().length>=2)return!0}catch(e){}return!1}},{key:"getPlayers",value:function(){fetch("".concat("https://uno-dos-tres.herokuapp.com/","game/").concat(this.gameId),{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v())}}).then((function(e){return e.json()})).then((function(e){return e.players})).catch((function(e){console.error("Error:",e)}))}},{key:"newGame",value:function(){var e=this;fetch("https://uno-dos-tres.herokuapp.com/game",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(v())}}).then((function(e){return e.json()})).then((function(t){var n=t.gameId;e.props.history.push("/lobby/".concat(n))})).catch((function(e){console.error("Error:",e)}))}},{key:"startGame",value:function(e){fetch("".concat("https://uno-dos-tres.herokuapp.com/","lobby/").concat(this.gameId),{method:"PATCH",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v())}}).then((function(e){return e.json()})).then(this.props.history.push("/game/".concat(this.gameId))).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){return Object(B.jsxs)(s.Fragment,{children:[Object(B.jsx)("h1",{children:"Game lobby"}),Object(B.jsx)(h.a,{block:!0,bssize:"large",disabled:!this.requiredPlayers(),onClick:this.startGame,type:"submit",children:"Start Game"})]})}}]),n}(s.Component),U=Object(i.f)(L),H=Object(m.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:Object(a.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function J(e){return null===function(e){return null!=e?Object(x.a)(e):null}(v())?Object(B.jsx)(h.a,{href:"".concat("/frontend","/#/login"),color:"primary",variant:"outlined",className:e.link,children:"Login"}):Object(B.jsx)(h.a,{disabled:!0,color:"primary",variant:"outlined",className:e.link,children:"Logged as "})}function _(){var e=H(),t=J(e);return Object(B.jsxs)(s.Fragment,{children:[Object(B.jsx)(u.a,{}),Object(B.jsx)(l.a,{position:"static",color:"default",elevation:0,className:e.appBar,children:Object(B.jsxs)(j.a,{className:e.toolbar,children:[Object(B.jsx)(b.a,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle,children:"Uno Project"}),Object(B.jsx)("nav",{children:Object(B.jsx)(p.a,{variant:"button",color:"textPrimary",href:"".concat("/frontend","/#/lobby"),className:e.link,children:"New Game"})}),t]})}),Object(B.jsx)(f.a,{maxWidth:"md",component:"main",children:Object(B.jsx)(o.a,{basename:"/frontend",children:Object(B.jsxs)(i.c,{children:[Object(B.jsx)(i.a,{exact:!0,path:"/",children:Object(B.jsx)(A,{})}),Object(B.jsx)(i.a,{exact:!0,path:"/login",children:Object(B.jsx)(S,{})}),Object(B.jsx)(i.a,{path:"/game/:id",children:Object(B.jsx)(F,{})}),Object(B.jsx)(i.a,{path:"/lobby/:id",children:Object(B.jsx)(U,{})}),Object(B.jsx)(i.a,{path:"/lobby/",children:Object(B.jsx)(U,{})})]})})}),Object(B.jsxs)(f.a,{maxWidth:"md",component:"footer",className:e.footer,children:[Object(B.jsx)(d.a,{container:!0,justify:"space-evenly",children:Object(B.jsxs)(d.a,{item:!0,children:[Object(B.jsx)(b.a,{variant:"h6",color:"textPrimary",gutterBottom:!0}),Object(B.jsx)("ul",{children:Object(B.jsx)("li",{children:Object(B.jsx)(p.a,{href:"#",variant:"subtitle1",color:"textSecondary",children:"bla vbl"})},"item")})]},"title")}),Object(B.jsx)(O.a,{})]})]})}c.a.render(Object(B.jsx)(_,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.8ab2ef40.chunk.js.map