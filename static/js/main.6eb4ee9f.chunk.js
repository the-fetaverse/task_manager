(this.webpackJsonpreact_tasks_list=this.webpackJsonpreact_tasks_list||[]).push([[0],[,,,,,,function(t,e,n){t.exports={"form-control":"TaskInput_form-control__3RXnf",invalid:"TaskInput_invalid__21JeE"}},,function(t,e,n){t.exports={button:"Button_button__2lgkF"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(7),o=n.n(s),r=(n(14),n(9)),a=n(3),u=(n(15),n(0)),l=function(t){return Object(u.jsx)("li",{className:"task-item",onClick:function(){t.onDelete(t.id)},children:t.children})},d=(n(17),function(t){return Object(u.jsx)("ul",{className:"task-list",children:t.items.map((function(e){return Object(u.jsx)(l,{id:e.id,onDelete:t.onDeleteItem,children:e.text},e.id)}))})}),j=n(8),b=n.n(j),f=function(t){return Object(u.jsx)("button",{type:t.type,className:b.a.button,onClick:t.onClick,children:t.children})},h=n(6),x=n.n(h),O=function(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),i=n[0],s=n[1],o=Object(c.useState)(!0),r=Object(a.a)(o,2),l=r[0],d=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==i.trim().length?t.onAddTask(i):d(!1)},children:[Object(u.jsxs)("div",{className:"".concat(x.a["form-control"]," ").concat(!l&&x.a.invalid),children:[Object(u.jsx)("label",{children:"Tasks I need to do:"}),Object(u.jsx)("input",{type:"text",onChange:function(t){t.target.value.trim().length>0&&d(!0),s(t.target.value)}})]}),Object(u.jsx)(f,{type:"submit",children:"Add Task"})]})},m=(n(18),function(){var t=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(u.jsx)("p",{style:{textAlign:"center"},children:"No tasks found. Maybe add one?"});return n.length>0&&(s=Object(u.jsx)(d,{items:n,onDeleteItem:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))}))}})),Object(u.jsxs)("div",{children:[Object(u.jsx)("section",{id:"task-form",children:Object(u.jsx)(O,{onAddTask:function(t){i((function(e){var n=Object(r.a)(e);return n.unshift({text:t,id:Math.random().toString()}),n}))}})}),Object(u.jsx)("section",{id:"tasks",children:s})]})});o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.6eb4ee9f.chunk.js.map