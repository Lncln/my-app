(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{10:function(t,e,s){t.exports={wrapper:"TaskDetail_wrapper__2y0Ih",header:"TaskDetail_header__oGlyQ",title:"TaskDetail_title__3hMo8",createdAt:"TaskDetail_createdAt__3oSw_",status:"TaskDetail_status__2RFCv",label:"TaskDetail_label__NJ2tN",select:"TaskDetail_select__30sl5",homeLink:"TaskDetail_homeLink__zoLmU",emptyState:"TaskDetail_emptyState__1JGy_",emptyStateIcon:"TaskDetail_emptyStateIcon__1-rd3"}},13:function(t,e,s){t.exports={list:"List_list__j1fAE",listTitle:"List_listTitle__ZNhcE",task:"List_task__qYgJX",taskLink:"List_taskLink__2dIm2",addButton:"List_addButton__1o_MH"}},15:function(t,e,s){t.exports={header:"Header_header__1oc0G",logo:"Header_logo__l8eBZ",sprint:"Header_sprint__3uNXH"}},16:function(t,e,s){t.exports={footer:"Footer_footer__1H8BP",counts:"Footer_counts__SR-cG",count:"Footer_count__2lFcH",copy:"Footer_copy__1bI6q"}},19:function(t,e,s){t.exports={form:"Forms_form__1RMPc",input:"Forms_input__6H9AF",textarea:"Forms_textarea__3HWFf",submit:"Forms_submit__2T6z8"}},25:function(t,e,s){t.exports={main:"Main_main__3PCTZ"}},27:function(t,e,s){t.exports={board:"Board_board__2XKVC"}},34:function(t,e,s){},42:function(t,e,s){"use strict";s.r(e);var a,n,c=s(1),i=s.n(c),r=s(24),l=s.n(r),o=(s(34),s(8)),j=s(11),d=s.p+"static/media/logo.06e97418.svg",b=s(15),u=s.n(b),O=s(0),_=function(){return Object(O.jsxs)("header",{className:u.a.header,children:[Object(O.jsx)("img",{className:u.a.logo,src:d,alt:""}),Object(O.jsx)("h1",{className:u.a.title,children:"Wild Kaban-Boar"}),Object(O.jsx)("p",{className:u.a.sprint,children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})]})},h=s(16),m=s.n(h),k=s(6),x={BACKLOG:"backlog",READY:"Ready",IN_PROGRESS:"inProgress",FINISHED:"Finished"},p=(a={},Object(k.a)(a,x.BACKLOG,"Backlog"),Object(k.a)(a,x.READY,"Ready"),Object(k.a)(a,x.IN_PROGRESS,"In progress"),Object(k.a)(a,x.FINISHED,"Finished"),a),f=(n={},Object(k.a)(n,x.BACKLOG,"#b95959"),Object(k.a)(n,x.IN_PROGRESS,"#4b69b1"),Object(k.a)(n,x.DONE,"#a0b959"),function(t){var e=t.tasks;return Object(O.jsxs)("footer",{className:m.a.footer,children:[Object(O.jsx)("div",{className:m.a.counts,children:Object.values(x).map((function(t){if("inProgress"===t||"Finished"===t){var s=e.filter((function(e){return e.status===t}));return Object(O.jsxs)("div",{className:m.a.count,children:[t===x.IN_PROGRESS&&Object(O.jsx)("span",{children:"Active tasks: "})||t===x.FINISHED&&Object(O.jsx)("span",{children:"Finished tasks: "}),s.length]},t)}}))}),Object(O.jsxs)("div",{className:m.a.copy,children:["Kanban board by ",Object(O.jsx)("a",{href:"https://github.com/ytokarevskaya",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:"@_gavrilovroman_"})]})]})}),N=s(25),v=s.n(N),g=s(29),S=s(9),T=(s(36),s(19)),F=s.n(T),I=function(t){var e=t.addNewTask,s=t.setFormVisible,a=Object(c.useState)({title:"",description:""}),n=Object(o.a)(a,2),i=n[0],r=n[1];return Object(O.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault(),i.title?e(i.title,i.description):alert("title is req"),s(!1)},children:[Object(O.jsx)("input",{className:F.a.input,id:"taskTitle",name:"title",type:"text",placeholder:"Enter task title",value:i.title,onChange:function(t){var e=t.target.name;r(Object(S.a)(Object(S.a)({},i),{},Object(k.a)({},e,t.target.value)))}}),Object(O.jsx)("button",{className:F.a.submit,type:"submit",children:"Submit"})]})},y=s(10),D=s.n(y);var E=function(t){var e=t.tasks,s=t.setTasks,a=t.type,n=t.lists,c=(t.title,t.setChange);function i(t){s(e.map((function(e){return t.target.value===e.title?Object(S.a)(Object(S.a)({},e),{},{status:a}):e}))),c(!1)}return a===x.READY?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{onChange:i,className:D.a.select,children:[Object(O.jsx)("option",{value:null}),"}",e.map((function(t){if(t.status===n[0])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:t.title,children:t.title})})}))]})}):a===x.IN_PROGRESS?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{value:a,onChange:i,className:D.a.select,children:[Object(O.jsx)("option",{value:null}),e.map((function(t){if(t.status===n[1])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:t.title,children:t.title})})}))]})}):a===x.FINISHED?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("select",{value:a,onChange:i,className:D.a.select,children:[Object(O.jsx)("option",{value:null,selected:!0,label:""}),e.map((function(t){if(t.status===n[2])return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("option",{value:t.title,children:t.title})})}))]})}):void 0},L=s(13),R=s.n(L),C=function(t){var e=t.title,s=t.type,a=t.tasks,n=t.addNewTask,i=t.setTasks,r=t.fullTaskList,l=t.lists,d=Object(c.useState)(!1),b=Object(o.a)(d,2),u=b[0],_=b[1];var h=Object(c.useState)(!1),m=Object(o.a)(h,2),k=m[0],p=m[1];return Object(O.jsxs)("div",{className:R.a.list,children:[Object(O.jsx)("h2",{className:R.a.listTitle,children:e}),a.map((function(t){return Object(O.jsx)(j.b,{to:"/tasks/".concat(t.id),className:R.a.taskLink,children:Object(O.jsx)("div",{className:R.a.task,children:t.title},t.id)})})),s===x.BACKLOG&&u&&Object(O.jsx)(I,{addNewTask:n,setFormVisible:_}),s===x.READY&&u&&Object(O.jsx)(I,{addNewTask:n,setFormVisible:_}),s===x.IN_PROGRESS&&u&&Object(O.jsx)(I,{addNewTask:n,setFormVisible:_}),s===x.FINISHED&&u&&Object(O.jsx)(I,{addNewTask:n,setFormVisible:_}),s===x.BACKLOG&&Object(O.jsx)("button",{className:R.a.addButton,onClick:function(){_(!u)},children:u?"":"+Add card"}),s!==x.BACKLOG&&k&&Object(O.jsx)(E,{tasks:r,setTasks:i,title:e,type:s,lists:l,setChange:p}),s!==x.BACKLOG&&Object(O.jsx)("button",{className:R.a.addButton,onClick:function(){return p(!0)},children:k?"":"+Add card"})]})},w=s(27),B=s.n(w),A=s(28),G=s.n(A),H=function(t){var e=t.tasks,s=t.setTasks;function a(t,a){var n={id:G()(),title:t,description:a,created:(new Date).toISOString(),status:x.BACKLOG};s([].concat(Object(g.a)(e),[n]))}var n=["backlog","Ready","inProgress","Finished"];return Object(O.jsx)("div",{className:B.a.board,children:Object.values(x).map((function(t){var c=e.filter((function(e){return e.status===t}));return Object(O.jsx)(C,{type:t,title:p[t],tasks:c,addNewTask:a,fullTaskList:e,lists:n,setTasks:s},t)}))})},P=s(2),K=function(t){var e=t.tasks,s=t.setTasks,a=Object(P.f)().params.taskId,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],l=i[1],d=e.find((function(t){return t.id===a})),b=Object(c.useState)(!1),u=Object(o.a)(b,2),_=u[0],h=u[1];return Object(O.jsxs)("div",{className:D.a.wrapper,children:[Object(O.jsx)(j.b,{to:"/",className:D.a.homeLink,children:"\u2715 Back"}),d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:D.a.header,children:Object(O.jsx)("h2",{className:D.a.title,children:d.title})}),Object(O.jsx)("p",{children:_?Object(O.jsx)("textarea",{value:r,onChange:function(t){return l(t.target.value)},onBlur:function(t){s(e.map((function(e){return console.log(e),e.id===a?Object(S.a)(Object(S.a)({},e),{},{description:t.target.value}):e}))),h(!1)},placeholder:"Enter description",cols:"30",rows:"10",autoFocus:!0}):Object(O.jsx)("span",{onClick:function(){return h(!0)},children:d.description||"This task has no description"})})]}):Object(O.jsxs)("h2",{children:["Task ",a," not found"]})]})};var J=function(t){var e=t.tasks,s=t.setTasks;return Object(O.jsx)("main",{className:v.a.main,children:Object(O.jsxs)(P.c,{children:[Object(O.jsx)(P.a,{exact:!0,path:"/",children:Object(O.jsx)(H,{tasks:e,setTasks:s})}),Object(O.jsx)(P.a,{path:"/tasks/:taskId",children:Object(O.jsx)(K,{tasks:e,setTasks:s})})]})})};var V=function(){var t=JSON.parse(window.localStorage.getItem("tasks"))||[],e=Object(c.useState)(t),s=Object(o.a)(e,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){window.localStorage.setItem("tasks",JSON.stringify(a))}),[a]),Object(O.jsx)(j.a,{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(_,{}),Object(O.jsx)(J,{tasks:a,setTasks:n}),Object(O.jsx)(f,{tasks:a})]})})};l.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a1e0038b.chunk.js.map