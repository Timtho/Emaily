(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return g})),n.d(a,"handleToken",(function(){return w}));n(42);var r=n(0),c=n.n(r),u=n(18),l=n.n(u),o=n(7),i=n(10),s=n(38),p=n(11),h=n(12),m=n(14),f=n(13),d=n(15),b=n(20),y=n(8),E=n(17),v=n.n(E),O=n(23),j=n(24),k=n.n(j),g=function(){return function(){var e=Object(O.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(O.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=n(39),C=n.n(x),N=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(C.a,{name:"Emaily",description:"$5 for 5 email credits",amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_BP8pRLqVIEwNmOsbZdc8IURq00j6OwWGrN"},c.a.createElement("button",{className:"btn"},"Add Credits"))}}]),t}(r.Component),_=Object(o.b)(null,a)(N),I=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login With Google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(_,null)),c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},"Credits: ",this.props.auth.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(b.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo",href:"/"},"Emaily"),c.a.createElement("ul",{className:"right"},this.renderContent())))}}]),t}(r.Component);var L=Object(o.b)((function(e){return{auth:e.auth}}))(I),U=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Emaily!"),"Collect feedback from your users")},q=function(){return c.a.createElement("h2",null,"Dashboard")},A=function(){return c.a.createElement("h2",null,"SurveyNew")},B=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(b.a,null,c.a.createElement("div",null,c.a.createElement(L,null),c.a.createElement(y.a,{exact:!0,path:"/",component:U}),c.a.createElement(y.a,{exact:!0,path:"/surveys",component:q}),c.a.createElement(y.a,{path:"/surveys/new",component:A}))))}}]),t}(r.Component),D=Object(o.b)(null,a)(B),G=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),J=Object(i.d)(G,{},Object(i.a)(s.a));l.a.render(c.a.createElement(o.a,{store:J},c.a.createElement(D,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.923ce7f2.chunk.js.map