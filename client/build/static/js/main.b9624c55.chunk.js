(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),s=c(18),i=c.n(s),a=(c(24),c(3)),l=c(2),b=c(5),r=c.n(b),O=(c(8),c(0)),u=function(e){var t=e.pets;return Object(O.jsxs)("div",{children:[Object(O.jsx)(a.a,{to:"/new",children:"Add a Pet to Adopt!"}),Object(O.jsx)("h3",{children:"These pets are looking for a good home:"}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Type"}),Object(O.jsx)("th",{children:"Actions"})]}),Object(O.jsx)("tbody",{children:t.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name},t),Object(O.jsx)("td",{children:e.type},t),Object(O.jsxs)("td",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(a.a,{to:"/pets/"+e._id+"/edit",children:"Edit"})}),Object(O.jsx)("button",{children:Object(O.jsx)(a.a,{to:"/pets/"+e._id,children:"Details"})})]})]})}))})]})]})},o=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],j=t[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),a=i[0],b=i[1];Object(n.useEffect)((function(){r.a.get("http://localhost:8000/api/pets").then((function(e){j(e.data),b(!0)}))}),[]);return Object(O.jsx)("div",{children:a&&Object(O.jsx)(u,{pets:c,removeFromDom:function(e){j(c.filter((function(t){return t._id!==e})))}})})},h=function(e){var t=e.id,c=Object(n.useState)({}),j=Object(l.a)(c,2),s=j[0],i=j[1];Object(n.useEffect)((function(){r.a.get("http://localhost:8000/api/pets/"+t).then((function(e){return i(e.data)}))}),[t]);var b=function(e){i((function(t){return t._id!==e}))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["Details about ",s.name]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Pet Type: ",s.type]}),Object(O.jsxs)("p",{children:["Pet Description: ",s.description]}),Object(O.jsx)("h4",{children:"Skills:"}),s.skill1?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:s.skill1}),Object(O.jsx)("li",{children:s.skill2}),Object(O.jsx)("li",{children:s.skill3})]}):Object(O.jsx)("p",{children:"No Skills added for this animal!"})]}),Object(O.jsx)("button",{onClick:function(e){var t;t=s._id,r.a.delete("http://localhost:8000/api/pets/"+t).then((function(e){b(t)})),Object(a.c)("/")},children:"Adopt!"}),Object(O.jsx)("button",{children:Object(O.jsx)(a.a,{to:"/",children:"Home"})})]})},d=function(e){var t=e.id,c=Object(n.useState)(""),j=Object(l.a)(c,2),s=j[0],i=j[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),o=u[0],h=u[1],d=Object(n.useState)(""),x=Object(l.a)(d,2),p=x[0],f=x[1],v=Object(n.useState)(""),m=Object(l.a)(v,2),g=m[0],k=m[1],S=Object(n.useState)(""),y=Object(l.a)(S,2),C=y[0],T=y[1],A=Object(n.useState)(""),D=Object(l.a)(A,2),w=D[0],P=D[1],E=Object(n.useState)([]),F=Object(l.a)(E,2),N=F[0],_=F[1];Object(n.useEffect)((function(){r.a.get("http://localhost:8000/api/pets/"+t).then((function(e){i(e.data.name),h(e.data.type),f(e.data.description),k(e.data.skill1),T(e.data.skill2),P(e.data.skill3)}))}),[t]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Update Pet"}),N.map((function(e,t){return Object(O.jsx)("p",{children:e},t)})),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.a.put("http://localhost:8000/api/pets/"+t,{name:s,type:o,description:p,skill1:g,skill2:C,skill3:w}).then((function(e){Object(a.c)("/")})).catch((function(e){for(var c=e.response.data.errors,n=[],j=0,s=Object.keys(c);j<s.length;j++){var i=s[j];n.push(c[i].message)}_(n),Object(a.c)("/pets/".concat(t,"/edit"))}))},children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Name: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"name",value:s,onChange:function(e){i(e.target.value)}})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Type of animal: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"name",value:o,onChange:function(e){h(e.target.value)}})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Description of animal: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"name",value:p,onChange:function(e){f(e.target.value)}})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Skill One: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"skill1",value:g,onChange:function(e){k(e.target.value)}})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Skill Two: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"skill2",value:C,onChange:function(e){T(e.target.value)}})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Skill Three: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"skill3",value:w,onChange:function(e){P(e.target.value)}})]}),Object(O.jsx)("input",{type:"submit"})]}),Object(O.jsx)("button",{children:Object(O.jsx)(a.a,{to:"/",children:"Home"})})]})},x=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],j=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),b=i[0],u=i[1],o=Object(n.useState)(""),h=Object(l.a)(o,2),d=h[0],x=h[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),v=f[0],m=f[1],g=Object(n.useState)(""),k=Object(l.a)(g,2),S=k[0],y=k[1],C=Object(n.useState)(""),T=Object(l.a)(C,2),A=T[0],D=T[1],w=Object(n.useState)([]),P=Object(l.a)(w,2),E=P[0],F=P[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(a.a,{to:"/",children:"Home"}),Object(O.jsx)("h3",{children:"Add a new Pet to Adopt:"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.a.post("http://localhost:8000/api/pets",{name:c,type:b,description:d,skill1:v,skill2:S,skill3:A}).then((function(e){return Object(a.c)("/")})).catch((function(e){for(var t=e.response.data.errors,c=[],n=0,j=Object.keys(t);n<j.length;n++){var s=j[n];c.push(t[s].message)}F(c),Object(a.c)("/new")}))},children:[E.map((function(e,t){return Object(O.jsx)("p",{children:e},t)})),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Name: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:c})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Type of Animal: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},value:b})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Description of Animal: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:d})]}),Object(O.jsx)("h3",{children:"Skills: (optional)"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Skill one: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},value:v})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Skill Two: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return y(e.target.value)},value:S})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Skill Three: "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return D(e.target.value)},value:A})]}),Object(O.jsx)("input",{type:"submit"})]})]})};var p=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Pet Shelter"}),Object(O.jsx)("hr",{}),Object(O.jsxs)(a.b,{children:[Object(O.jsx)(o,{path:"/"}),Object(O.jsx)(x,{path:"/new"}),Object(O.jsx)(h,{path:"/pets/:id"}),Object(O.jsx)(d,{path:"pets/:id/edit"})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,j=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),j(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(j.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),f()},8:function(e,t,c){}},[[50,1,2]]]);
//# sourceMappingURL=main.b9624c55.chunk.js.map