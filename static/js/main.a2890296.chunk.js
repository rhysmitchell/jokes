(this.webpackJsonpjokes=this.webpackJsonpjokes||[]).push([[0],{26:function(e,t,n){e.exports=n(54)},31:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),u=n(20),o=n.n(u),l=(n(31),n(7)),r=n(55),i=n(56),f=n(57),s=n(58),p=n(59),m=n(23),h=n(21),E=function(e){var t=e.joke,n=e.getNewJoke,u=Object(a.useState)(!1),o=Object(l.a)(u,2),r=o[0],i=o[1];return c.a.createElement(s.a,null,c.a.createElement(s.a.Body,null,c.a.createElement("h4",null,t.setup),c.a.createElement("a",{href:"#",onClick:function(){i(!r)}},r?"Hide":"Show"," Punchline..."),c.a.createElement("h5",null,r?t.punchline:"")),c.a.createElement(p.a,{variant:"info",onClick:function(){return n()}},c.a.createElement(h.a,{icon:m.a})))},j=n(24),k=n.n(j),b=function(){return k.a.get("".concat("https://official-joke-api.appspot.com","/random_joke")).then((function(e){return{setup:e.data.setup,punchline:e.data.punchline}}))},d=(n(52),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],o=Object(a.useState)(0),s=Object(l.a)(o,2),p=s[0],m=s[1];return Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[p]),c.a.createElement(r.a,null,c.a.createElement(i.a,null,c.a.createElement(f.a,null,c.a.createElement(E,{joke:n,getNewJoke:function(){m((function(e){return e+1}))}}))))});n(53);o.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a2890296.chunk.js.map