(window["webpackJsonpmyking-page"]=window["webpackJsonpmyking-page"]||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(35),r=a.n(i),l=(a(45),a(46),a(11)),o=a(10),s=a(3),u=a(4),m=a(6),b=a(5),v=a(7),d=(a(47),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"banner-box"},c.a.createElement("div",{class:"banner"}))}}]),t}(c.a.Component)),E=(a(26),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,null),"This is IndexPage.")}}]),t}(c.a.Component)),h=a(36),f=a.n(h),p=(a(130),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(b.a)(t).call(this,e))).state={},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/articles/".concat(this.props.id,".md")).then(function(e){return e.text()}).then(function(t){return e.setState({text:t})})}},{key:"render",value:function(){return c.a.createElement(f.a,{className:"article markdown",source:this.state.text})}}]),t}(c.a.Component));a(131);var g=function(){var e=Object(o.f)().id;return c.a.createElement("div",null,c.a.createElement("div",{className:"article-container"},c.a.createElement(p,{id:e})))},j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Articles List")}}]),t}(c.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Hi, I am SaberMyKing.")}}]),t}(c.a.Component),y=(a(134),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"navigation-bar-box"},c.a.createElement("div",{className:"navigation-bar"},c.a.createElement("div",{className:"navigation-left-box"},c.a.createElement("div",{className:"navigation-item"},c.a.createElement(l.b,{to:"/"},"\u8335\u8482\u514b\u4e1d")),c.a.createElement("div",{className:"navigation-item"},c.a.createElement(l.b,{to:"/articles/details/1"},"\u83f2\u7279")),c.a.createElement("div",{className:"navigation-item"},c.a.createElement(l.b,{to:"/articles"},"\u963f\u5c3c\u59b9"))),c.a.createElement("div",{className:"navigation-right-box"},c.a.createElement("div",{className:"navigation-item"},c.a.createElement("span",null,"\u8def\u4eba\u6a21\u5f0f")),c.a.createElement("div",{className:"navigation-item"},c.a.createElement("span",null,"Language")),c.a.createElement("div",{className:"navigation-item"},c.a.createElement(l.b,{to:"/about"},c.a.createElement("img",{src:"/myface.jpg",className:"navigation-myface",alt:"This is SaberMyKing."}))))))}}]),t}(c.a.Component)),k=a(39),N=a.n(k);var w=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"page"},c.a.createElement(N.a,{href:"https://github.com/sabermyking/myking-page"}),c.a.createElement(y,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(E,null)),c.a.createElement(o.a,{exact:!0,path:"/articles"},c.a.createElement(j,null)),c.a.createElement(o.a,{path:"/articles/details/:id"},c.a.createElement(g,null)),c.a.createElement(o.a,{path:"/about"},c.a.createElement(O,null)))))};var x=function(){return w()};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,a){},40:function(e,t,a){e.exports=a(136)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){}},[[40,1,2]]]);
//# sourceMappingURL=main.cb482388.chunk.js.map