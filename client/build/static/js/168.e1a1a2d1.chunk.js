(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[168],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(442),r=a.n(n),c=a(443),o=a(11),s=a(12),i=a(14),l=a(13),p=a(0),u=a.n(p),m=a(773),d=a.n(m),y=a(26),g=a.n(y),f=a(591),h=a(393),v=a(7);a(188),a(688);f.a.configure();var b=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleToken=function(){var t=Object(c.a)(r.a.mark((function t(a,n){var c,o,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a,n),c=localStorage.getItem("token"),o={headers:{Authorization:"Bearer ".concat(c)}},console.log("token: "+c),t.next=6,g.a.post(v.REMOTE_HOST+"/payment/checkout",{token:a},o);case 6:s=t.sent,i=s.data.message,console.log("Response:",i),"success"===i?(Object(f.a)("Success! Check email for details",{type:"success"}),e.props.next()):Object(f.a)("Something went wrong",{type:"error"});case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{style:{width:"100%",textAlign:"center"}},u.a.createElement("div",{className:"create-text",style:{fontSize:"1.5em",marginBottom:"0.5em"}},"Contribute using credit card"),u.a.createElement("div",{className:"create-text",style:{fontStyle:"italic",fontSize:"1em"}},"PayPal and Venmo coming soon"),u.a.createElement("br",null),u.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},u.a.createElement(d.a,{token:this.handleToken,stripeKey:v.STRIPE_PUBLIC_KEY,amount:5e3,name:"RestEasy Memorial Page",description:"Create a digital memorial",image:"/logo196.png",billingAddress:!0,shippingAddress:!0},u.a.createElement("button",{type:"primary",className:"upload"},"Pay With Card"))),u.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},u.a.createElement(h.a,{type:"primary",onClick:this.props.prev,style:{borderRadius:"10px",margin:"20px",width:"100px"}},"Back")))}}]),a}(u.a.Component)}}]);
//# sourceMappingURL=168.e1a1a2d1.chunk.js.map