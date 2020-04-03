(this.webpackJsonpreact_redux_todo=this.webpackJsonpreact_redux_todo||[]).push([[0],{57:function(e,t,a){e.exports=a(87)},59:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);a(58),a(59);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),i=a(12),c=a(36),s=a(34),d=a(21),E=a(17),u=a(51),m=a(48);const T={newTaskDescription:"",tasks:[]},p=(e,t)=>{switch(e=e||T,t.type){case"taskList.SET_NEW_TASK_DESCRIPTION":return Object(d.a)({},e,{newTaskDescription:t.taskDescription});case"taskList.ADD_TASK":return Object(d.a)({},e,{tasks:[...e.tasks,{id:t.taskId,description:t.taskDescription}]});case"taskList.DELETE_TASK":return Object(d.a)({},e,{tasks:e.tasks.filter(e=>e.id!==t.taskId)});default:return e}};var k=a(95),h=a(96),b=a(92),O=a(93),I=a(94),f=a(99),A=a(97),w=a(98),N=a(38),R=a(16),g=a(20);R.b.add(g.a,g.c,g.b);const S=e=>r.a.createElement(A.a,{bg:"light",className:"flex-column"},r.a.createElement(A.a.Brand,null,"ReactReduxTodo"),r.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"navbar-nav flex-column"},r.a.createElement(w.a.Link,{as:f.a,to:"/",exact:!0},r.a.createElement(N.a,{icon:"home"})," Home"),r.a.createElement(w.a.Link,{as:f.a,to:"/TaskList",exact:!0},r.a.createElement(N.a,{icon:"tasks"})," Task list"),r.a.createElement(w.a.Link,{as:f.a,to:"/About",exact:!0},r.a.createElement(N.a,{icon:"info-circle"})," About"))));var D=a(91),L=a(100),v=a(90);const y={setNewTaskDescription:function(e){return{type:"taskList.SET_NEW_TASK_DESCRIPTION",taskDescription:e}},addTask:function(e,t){return{type:"taskList.ADD_TASK",taskId:e,taskDescription:t}},deleteTask:function(e){return{type:"taskList.DELETE_TASK",taskId:e}}},H=Object(i.c)(null,y)(e=>r.a.createElement("tr",null,r.a.createElement("td",null,e.data.id),r.a.createElement("td",null,e.data.description),r.a.createElement("td",null,r.a.createElement(v.a,{variant:"danger",onClick:()=>e.deleteTask(e.data.id)},"Delete"))));function C(e){return e.taskList.tasks}function x(e){return e.taskList.newTaskDescription}const j=Object(i.c)((function(e){return{tasks:C(e),newTaskDescription:x(e)}}),y)(e=>r.a.createElement("div",null,r.a.createElement("h1",null,"Tasks"),r.a.createElement(D.a,{className:"mb-3"},r.a.createElement(L.a,{placeholder:"Task description",value:e.newTaskDescription,onChange:t=>e.setNewTaskDescription(t.target.value)}),r.a.createElement(D.a.Append,null,r.a.createElement(v.a,{variant:"outline-primary",onClick:()=>{return e.addTask((t=e.tasks.map(e=>e.id),Array.isArray(t)&&0!==t.length?Math.max.apply(Math,t)+1:0),e.newTaskDescription);var t}},"Add"))),r.a.createElement("table",{className:"table table-hover table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col-md-2"},"ID"),r.a.createElement("th",{scope:"col-md-5"},"Description"),r.a.createElement("th",{scope:"col-md-5"},"#"))),r.a.createElement("tbody",null,e.tasks.map(e=>r.a.createElement(H,{key:e.id,data:e})))))),W=e=>r.a.createElement("div",null,r.a.createElement("h1",null,"About ReactReduxTodo"),r.a.createElement("p",null,"MIT License",r.a.createElement("br",null),r.a.createElement("br",null),"Copyright (c) 2018 Ilia Burakov",r.a.createElement("br",null),r.a.createElement("br",null),'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',r.a.createElement("br",null),r.a.createElement("br",null),"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",r.a.createElement("br",null),r.a.createElement("br",null),'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.')),_=e=>r.a.createElement("div",null,r.a.createElement("h1",null,"ReactReduxTodo"),r.a.createElement("p",null,"Hello world react/redux app")),F=()=>r.a.createElement(b.a,{fluid:!0},r.a.createElement(O.a,null,r.a.createElement(I.a,{sm:3},r.a.createElement(S,null)),r.a.createElement(I.a,{sm:9},r.a.createElement(k.a,null,r.a.createElement(h.a,{exact:!0,path:"/TaskList"},r.a.createElement(j,null)),r.a.createElement(h.a,{exact:!0,path:"/About"},r.a.createElement(W,null)),r.a.createElement(h.a,{path:"/"},r.a.createElement(_,null)))))),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}const P=new class{getInitialState(){return{taskList:{newTaskDescription:"New task",tasks:[{id:0,description:"Sleep"},{id:1,description:"Breakfast"},{id:2,description:"Workout"},{id:3,description:"Dinner"}]}}}};R.b.add(g.a);const U=document.getElementsByTagName("base")[0].getAttribute("href"),K=Object(s.a)({basename:U}),G=function(e,t){const a={taskList:p},n=[u.a,Object(m.a)(e)],r=[],o=Object(E.c)(Object(d.a)({router:Object(c.b)(e)},a));return Object(E.e)(o,t,Object(E.d)(Object(E.a)(...n),...r))}(K,window.initialReduxState||P.getInitialState()),Y=document.getElementById("root");l.a.render(r.a.createElement(i.a,{store:G},r.a.createElement(c.a,{history:K},r.a.createElement(F,null))),Y),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat(".","/service-worker.js");B?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):M(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):M(e)})}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.ce4cce7c.chunk.js.map