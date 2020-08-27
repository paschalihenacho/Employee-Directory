(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,a,t){e.exports=t(43)},20:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l);var s=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};t(20);var o=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employees Record"),r.a.createElement("p",null,"Click to Filter  or Search by name."))},d=t(2),i=t(14),m=(t(21),t(22),r.a.createContext({})),u=function(){var e=Object(n.useContext)(m);return r.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,s=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive rounded",style:{borderRadius:30}})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(s.date)))})):r.a.createElement(r.a.Fragment,null))},f=function(){var e=Object(n.useContext)(m);return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.developerState.headings.map((function(a){var t=a.name,n=a.width;return r.a.createElement("th",{className:"col",key:t,style:{width:n},onClick:function(){e.handleSort(t)}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(u,null)))},v=(t(23),function(){var e=Object(n.useContext)(m);return r.a.createElement("div",{className:"searchbox"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"enter a name","aria-label":"Search",onChange:function(a){return e.handleSearchChange(a)}})))});var p=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse row",id:"navbarNav"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(v,null))))},h=t(13),g=t.n(h),E=function(){return g.a.get("https://randomuser.me/api/?results=200&nat=us")},b=(t(41),function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),a=Object(i.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E().then((function(e){console.log(e.data.results),l(Object(d.a)(Object(d.a)({},t),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),r.a.createElement(m.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,n=t.users.filter((function(e){var t=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(a,t),-1!==t.indexOf(a.toLowerCase()))return e}));l(Object(d.a)(Object(d.a)({},t),{},{filteredUsers:n}))},handleSort:function(e){var a=t.headings.filter((function(a){return a.name===e})).map((function(e){return e.order})).toString();a="descend"===a?"ascend":"descend";var n=t.filteredUsers.sort((function(t,n){return"ascend"===a?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):"dob"===e?t[e].age-n[e].age:t[e].localeCompare(n[e]):void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):"dob"===e?n[e].age-t[e].age:n[e].localeCompare(t[e])})),r=t.headings.map((function(t){return t.order=t.name===e?a:t.order,t}));l(Object(d.a)(Object(d.a)({},t),{},{filteredUsers:n,headings:r}))}}},r.a.createElement(p,null),r.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?r.a.createElement(f,null):r.a.createElement("div",null)))});var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null))};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null,r.a.createElement(o,null),r.a.createElement(N,null)))};t(42);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.14b1d8d7.chunk.js.map