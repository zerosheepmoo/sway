(this.webpackJsonpsway=this.webpackJsonpsway||[]).push([[0],{510:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(73),i=n.n(r),o=n(605),s=n(622),l=n(5),j=n(3),d=n(24),u=n(7),b=n(616),x=n(620),O=n(624),h=n(623),f=n(621),p=n(200),m=n(606),g=n(167),v=n(242),y=n(625),w=n(615),C=n(329),S=n.n(C),k=n(183),D=n.n(k),F=n(330),P=n.n(F),T=n(243),R=n(342),E=n(595),I=n(626),N=n(336),_=n(334),A=n(298),L=n.n(A),W=n(118),V=n(1),J=new Date("2020-01-01T00:00:00.000"),B=new Date("2028-01-01T00:00:00.000"),M=function(e){var t=e.date,n=e.setDate;return Object(V.jsxs)(x.a,{children:[Object(V.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(V.jsx)(W.a,{sx:{flex:.5,m:1},onClick:e.goLeft,children:Object(V.jsx)(D.a,{})}),Object(V.jsx)(p.a,{variant:"h5",sx:{m:1,flex:1},children:e.mode}),Object(V.jsx)(W.a,{sx:{flex:.5,m:1},onClick:e.goRight,children:Object(V.jsx)(L.a,{})})]}),"\uc6d4 \uc120\ud0dd\uae30"===e.mode?Object(V.jsx)(N.a,{date:t,minDate:J,maxDate:B,onChange:function(e){return n(e)},sx:{width:"100%"}}):"\uc5f0 \uc120\ud0dd\uae30"===e.mode?Object(V.jsx)(_.a,{date:t,minDate:J,maxDate:B,onChange:function(e){return n(e)},isDateDisabled:function(){return!1}}):Object(V.jsx)(p.a,{children:"\ud654\uc0b4\ud45c\ub97c \ud074\ub9ad\ud558\uc5ec \ub354 \ud3b8\ud55c \ub2ec\ub825 \ub3c4\uad6c\ub97c \ucc3e\uc544\ubcf4\uc138\uc694!"})]})},G=["\ubc18\uac11\uc2b5\ub2c8\ub2e4","\uc6d4 \uc120\ud0dd\uae30","\uc5f0 \uc120\ud0dd\uae30"],z=Object(u.a)(R.a)((function(e){var t=e.theme;return Object(d.a)(Object(d.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),Y=function(e){var t,n=e.date.val,c=e.date.dispatch,r=Object(a.useState)(G[0]),i=Object(l.a)(r,2),o=i[0],s=i[1],j=null!==(t=e.ori)&&void 0!==t?t:"portrait",u=e.notTool;return Object(V.jsxs)(E.a,{sx:e.sx,spacing:3,children:[!u&&Object(V.jsx)(z,{elevation:3,children:Object(V.jsx)(M,{date:n,setDate:c,mode:o,goLeft:function(){var e=G.indexOf(o);s(0===e?G[G.length-1]:G[e-1])},goRight:function(){var e=G.indexOf(o);e===G.length-1?s(G[0]):s(G[e+1])}})}),Object(V.jsx)(z,{elevation:3,sx:{height:u?"default":"100%"},children:Object(V.jsx)(I.a,{orientation:j,toolbarTitle:"\ub0a0\uc9dc\ub97c \uc120\ud0dd\ud558\uc138\uc694.",toolbarFormat:"yyyy-MM-dd",openTo:"day",value:n,onChange:function(e){c(e)},renderInput:function(e){return Object(V.jsx)(T.a,Object(d.a)({},e))}})})]})},q=n(611),H=n(521),U=n(599),X=n(628),K=n(302),Q=n.n(K),Z=n(303),$=n.n(Z),ee=n(305),te=n.n(ee),ne=n(304),ae=n.n(ne),ce=n(231),re=n.n(ce),ie=n(306),oe=n.n(ie),se=n(307),le=n.n(se),je=n(185),de=n.n(je),ue=n(230),be=n.n(ue),xe=n(226),Oe=function(e){return Object(V.jsx)(p.a,{variant:e.readonly?"h6":"h3",color:"grey.500",sx:{paddingLeft:2,marginTop:5},children:"\uc5c6\uc74c..."})},he=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),s=o[0],j=o[1],d=e.submit;return Object(V.jsxs)(x.a,{component:"form",sx:{display:"flex",justifyContent:"space-around",margin:2},autoComplete:"off",children:[Object(V.jsx)(T.a,{sx:{flex:"0.4"},id:"employee-name",label:"\ucd94\uac00\ud560 \uc9c1\uc6d0 \uba85",value:c,onChange:function(e){return r(e.target.value)},required:!0}),Object(V.jsx)(T.a,{sx:{flex:"0.4"},id:"employee-age",label:"\ucd94\uac00\ud560 \uc9c1\uc6d0 \ub098\uc774",value:s,type:"number",onChange:function(e){return j(e.target.value)},required:!0}),Object(V.jsx)(W.a,{sx:{flex:"0.15"},type:"submit",variant:"contained",color:"primary",style:{width:"10%"},onClick:function(e){return function(e){e.preventDefault(),d(c,s),r(""),j(0)}(e)},children:"\uc9c1\uc6d0 \ucd94\uac00"})]})},fe=function(e){return[{field:"id",headerName:"ID",width:110},{field:"name",headerName:"\uc774\ub984",width:130},{field:"age",headerName:"\ub098\uc774",type:"number",width:150},{field:"twh",headerName:"".concat(e," \uc77c\ud55c \uc2dc\uac04"),type:"number",width:250}]},pe=function(e){return Object(V.jsx)("div",{style:{height:400,width:"100%"},children:Object(V.jsx)(xe.a,{rows:e.rows,columns:e.columns,checkboxSelection:!0,onSelectionModelChange:function(t){e.setSelected(t)}})})},me=function(e){var t=e.data.people,n=e.data.workRecord,c=e.data.setPeople,r=e.data.date,i=e.readonly,o="".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate()),s=Object(a.useState)([]),u=Object(l.a)(s,2),b=u[0],x=u[1],O=function(e){if(n[o]&&n[o][e]){var t=n[o][e],a=0;for(var c in t)a+=Number(t[c]);return a||void 0}};return Object(a.useEffect)((function(){n[o]||function(){var e=Object(d.a)(Object(d.a)({},n),{},Object(j.a)({},o,{}));c({list:t,workRecord:e})}()}),[r]),Object(V.jsxs)(R.a,{elevation:3,sx:i?{p:4,display:"flex",flexDirection:"column",overflow:"scroll",position:"relative",marginTop:3,flex:"1",backgroundColor:e.bgColor||void 0}:{height:"80vh",padding:"20px",overflow:"scroll",position:"relative"},hidden:e.hidden,children:[Object(V.jsx)(p.a,{variant:i?"h5":"h2",color:"primary",align:"center",children:i?o+" \uc77c\ud55c \uc9c1\uc6d0":"\uc9c1\uc6d0\ubaa9\ub85d"}),i?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(he,{submit:function(e,a){!e||a<=0?alert("\uc774\ub984\uc774 \uc785\ub825\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \ub098\uc774\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):0===t.filter((function(t){return t.name===e})).length?(t.push({name:e,age:a}),c({list:t,workRecord:n})):alert("\ub611\uac19\uc740 \uc0ac\ub78c\uc774 \uc788\uc2b5\ub2c8\ub2e4! \ub3d9\uba85\uc774\uc778\uc77c \uacbd\uc6b0 (2)\ub97c \ubd99\uc774\ub294 \ub4f1 \ub2e4\ub974\uac8c \ud45c\uc2dc\ud574\uc8fc\uc138\uc694")}}),i?n[o]&&Object.keys(n[o]).length>0?Object.keys(n[o]).map((function(e){return Object(V.jsx)(R.a,{sx:{p:1,mt:2,textAlign:"center"},children:Object(V.jsxs)(p.a,{variant:"h5",role:"body1",children:[e,": ",O(e),"\uc2dc\uac04"]})},e)})):Object(V.jsx)(Oe,{readonly:i}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(W.a,{onClick:function(e){for(var a=b.length-1;a>-1;a--)r=b[a],t[a].name,t.splice(r,1),c({list:t,workRecord:n});var r},children:"\uc120\ud0dd\uc9c1\uc6d0 \uc0ad\uc81c\ud558\uae30"}),Object(V.jsx)(pe,{rows:function(){for(var e=[],n=0;n<t.length;n++){var a=t[n].name,c={id:n,name:a,age:Number(t[n].age),twh:O(a)};e.push(c)}return e}(),columns:fe("".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate())),setSelected:x})]})]})},ge=n(311),ve=n.n(ge),ye=n(310),we=n.n(ye),Ce=n(627),Se=n(199),ke=n(84),De=n(244),Fe=n(168),Pe=function(e){var t,n=e.list,a=e.person,c=e.setPerson,r=null!==(t=e.label)&&void 0!==t?t:"\uc9c1\uc6d0";return Object(V.jsxs)(Fe.a,{fullWidth:!0,children:[Object(V.jsx)(De.a,{id:"pssl",children:r}),Object(V.jsxs)(Se.a,{displayEmpty:!0,value:a,onChange:function(e){c(e.target.value)},label:r,labelId:"pssl",sx:e.sx,children:[e.emptyVal&&Object(V.jsx)(ke.a,{value:"",sx:{height:35},children:"  "}),n.map((function(e){return Object(V.jsx)(ke.a,{value:e.name,children:e.name},e.name)}))]})]})},Te=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),s=o[0],j=o[1],d=Object(a.useState)(""),u=Object(l.a)(d,2),b=u[0],O=u[1],h=e.submit;return Object(V.jsxs)(x.a,{component:"form",sx:{display:"flex",justifyContent:"space-around",margin:2},noValidate:!0,autoComplete:"off",children:[Object(V.jsx)(T.a,{sx:{flex:"1.8",mr:1},label:"\uc5c5\ubb34\ub0b4\uc6a9",multiline:!0,maxRows:2,value:c,onChange:function(e){return r(e.target.value)}}),Object(V.jsx)(T.a,{sx:{flex:"0.5",mr:1},type:"number",label:"\uc218\uc785",value:s,onChange:function(e){return j(e.target.value)}}),Object(V.jsx)(T.a,{sx:{flex:"0.5",mr:1},type:"number",label:"\uc9c0\ucd9c",value:b,onChange:function(e){return O(e.target.value)}}),Object(V.jsx)(x.a,{sx:{flex:"0.5",mr:1},children:Object(V.jsx)(Pe,{list:e.p.list,person:e.p.person,setPerson:e.p.setPerson,label:"\ub2f4\ub2f9\uc790",emptyVal:!0})}),Object(V.jsx)(W.a,{sx:{flex:"0.15"},type:"submit",variant:"contained",color:"primary",style:{width:"10%"},onClick:function(t){return function(t){t.preventDefault(),h(c,s,b,e.p.person),r("")}(t)},children:"\ucd94\uac00"})]})},Re=function(e){var t=Object(a.useState)("read"),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)((function(){return e.todo})),o=Object(l.a)(i,2),s=o[0],j=o[1];Object(a.useEffect)((function(){j(e.todo)}),[e.todo]);var u=e.readonly,b=e.todo.text.split("\n"),O=0,h=Object(V.jsxs)(x.a,{component:"form",sx:{display:"flex",justifyContent:"space-around",margin:2,width:"100%"},noValidate:!0,autoComplete:"off",children:[Object(V.jsx)(Ce.a,{sx:{flex:"2"},defaultValue:s.text,onChange:function(e){return j((function(t){return Object(d.a)(Object(d.a)({},t),{},{text:e.target.value})}))},multiline:!0}),Object(V.jsx)(Ce.a,{sx:{flex:"0.5"},type:"number",defaultValue:s.income,onChange:function(e){return j((function(t){return Object(d.a)(Object(d.a)({},t),{},{income:e.target.value})}))}}),Object(V.jsx)(Ce.a,{sx:{flex:"0.5"},type:"number",defaultValue:s.outcome,onChange:function(e){return j((function(t){return Object(d.a)(Object(d.a)({},t),{},{outcome:e.target.value})}))}}),Object(V.jsx)(Ce.a,{sx:{flex:"0.5"},defaultValue:s.assignee,onChange:function(e){return j((function(t){return Object(d.a)(Object(d.a)({},t),{},{assignee:e.target.value})}))}}),Object(V.jsx)(g.a,{type:"submit",color:"primary","aria-label":"Save",onClick:function(t){return function(t){t.preventDefault(),s.text!==e.todo.text&&(e.edit(e.id,s),j({}),r("read")),r("read")}(t)},children:Object(V.jsx)(we.a,{fontSize:"small"})})]}),f=Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(x.a,{sx:{flex:"2"},children:b.map((function(e){return O+=1,Object(V.jsxs)(p.a,{variant:"body1",xs:{display:"block"},children:[" ",e," "]},O)}))}),Object(V.jsx)(x.a,{hidden:u,sx:{flex:".5"},children:s.income?s.income+" \uc6d0":""}),Object(V.jsx)(x.a,{hidden:u,sx:{flex:".5"},children:s.outcome?s.outcome+" \uc6d0":""}),Object(V.jsx)(x.a,{hidden:u,sx:{flex:".5"},children:s.assignee}),u?Object(V.jsx)(V.Fragment,{}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(g.a,{color:"primary","aria-label":"Edit",sx:{marginLeft:"auto"},onClick:function(e){return r(e.target.value)},children:Object(V.jsx)(ve.a,{fontSize:"small"})}),Object(V.jsx)(g.a,{color:"secondary","aria-label":"Delete",onClick:function(){return e.delete(e.id)},children:Object(V.jsx)(de.a,{fontSize:"small"})})]})]});return Object(V.jsx)(w.a,{xs:12,item:!0,sx:{flex:"0.5"},children:Object(V.jsx)(R.a,{elevation:2,sx:{padding:3,display:"flex",alignItems:"center",margin:2},children:"read"===c?f:h})})},Ee=function(e){var t=e.data.todos,n=e.data.setTodos,c=e.data.date,r=e.people,i=Object(a.useState)(""),o=Object(l.a)(i,2),s=o[0],u=o[1],b=e.readonly,x="".concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate()),O=function(){var e=Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},x,[]));n(e)},h=function(e,a){var c=t[x];c[e]=a;var r=Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},x,c));n(r)},f=function(e){var a=t[x];a.splice(e,1),n(Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},x,a)))};return Object(a.useEffect)((function(){t[x]||O()}),[]),Object(a.useEffect)((function(){t[x]||O()}),[c]),Object(V.jsxs)(R.a,{elevation:3,sx:b?{p:4,display:"flex",flexDirection:"column",overflow:"scroll",position:"relative",flex:"1",maxHeight:300}:{height:"80vh",padding:"20px",overflow:"scroll",position:"relative"},children:[Object(V.jsxs)(p.a,{variant:b?"h5":"h2",color:"primary",align:"center",children:[x," \uc5c5\ubb34 \uae30\ub85d"]}),b?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(Te,{submit:function(e,a,c,r){var i=t[x];0===i.filter((function(t){return t.text===e})).length?(i.push({text:e,income:a,outcome:c,assignee:r}),n(Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},x,i)))):alert("\ub611\uac19\uc740 \ub0b4\uc6a9\uc758 \uae30\ub85d\uc774 \uc788\uc2b5\ub2c8\ub2e4!")},p:{list:r,person:s,setPerson:u}}),t[x]&&t[x].length>0?t[x].map((function(e){return Object(V.jsx)(Re,{id:t[x].indexOf(e),todo:e,readonly:b,edit:h,delete:f},t[x].indexOf(e))})):Object(V.jsx)(Oe,{readonly:b})]})},Ie=n(629),Ne=function(){return Object(V.jsxs)(R.a,{elevation:3,sx:{padding:5},children:[Object(V.jsx)(p.a,{variant:"h4",role:"h3",color:"primary",sx:{paddingBottom:3},children:"\uc5d1\uc140\ud30c\uc77c\ub85c \ubcc0\ud658\ud558\uae30"}),Object(V.jsx)(p.a,{variant:"body1",sx:{paddingBottom:2},children:Object(V.jsx)(Ie.a,{href:"https://www.convertcsv.com/json-to-csv.htm",children:"JSON \ud30c\uc77c\uc744 csv, excel \ud30c\uc77c\ub85c \ubc14\uafd4\uc8fc\ub294 \uc0ac\uc774\ud2b8"})}),Object(V.jsx)(p.a,{sx:{paddingBottom:2},children:"\ub97c \uc774\uc6a9\ud558\uc5ec \ud14d\uc2a4\ud2b8\ub85c \uc800\uc7a5\ud558\uae30 \ud55c \ud30c\uc77c\uc744 \uc5d1\uc140\ucc98\ub7fc \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(V.jsx)(p.a,{children:"\uc804\uccb4\uc77c\uc9c0 \uc0ad\uc81c\ud558\uae30\ub97c \ud55c \ub4a4 \uc800\uc7a5\ud574\uc57c \uacb0\uacfc\ubb3c\uc774 \ubc18\uc601\ub429\ub2c8\ub2e4."}),Object(V.jsx)(p.a,{sx:{paddingBottom:4},children:"\uc804\uccb4\uc77c\uc9c0 \uc0ad\uc81c\ud558\uae30 \ud55c \ub4a4 \uc0c8\ub85c\uace0\uce68\ud558\uba74 \uc2e4\ud589\ud588\ub358 \uacb0\uacfc\ub97c \ucde8\uc18c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),Object(V.jsx)(p.a,{variant:"h4",role:"h3",color:"primary",sx:{paddingBottom:3},children:"\uc8fc\uc758\uc0ac\ud56d"}),Object(V.jsxs)(p.a,{variant:"body1",children:["SWAY\ub294 ",Object(V.jsx)(Ie.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"})," \uae30\uc220\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ubcf4\uc548\uc5d0 \ubbfc\uac10\ud55c \uc815\ubcf4\ub4e4\uc740 \ub418\ub3c4\ub85d \uae30\uc785\ud558\uc9c0 \uc54a\uae30\ub97c \uad8c\uc7a5\ud569\ub2c8\ub2e4."]}),Object(V.jsx)(p.a,{variant:"body1",sx:{paddingBottom:2},children:"\uc774 \uc571\uc758 \uc81c\uc791\uc790\ub294 \uc774 \uc571\uc744 \uc0ac\uc6a9\ud574\uc11c \ubc1c\uc0dd\ud55c \ud53c\ud574\uc5d0 \ub300\ud574\uc11c \uc5b4\ub5a0\ud55c \ucc45\uc784\ub3c4 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),Object(V.jsx)(p.a,{variant:"h5",color:"primary",children:"favicon \ucd9c\ucc98"}),Object(V.jsx)("img",{src:"/sway/android-icon-192x192.png",width:"100px;",height:"100px;"}),Object(V.jsxs)("div",{children:["Icons made by ",Object(V.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(V.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})},_e=n(232),Ae=n(610),Le=n(630),We=function(e){var t=e.texts,n=e.handler,a=e.idx;return Object(V.jsx)(x.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(V.jsx)(Ae.a,{value:a,onChange:function(e,t){n(t)},"aria-label":"tabs",children:t.map((function(e){return Object(V.jsx)(Le.a,Object(d.a)({label:e},{id:"tab-".concat(t=0),"aria-controls":"tab-panel-".concat(t)}),e);var t}))})})},Ve=n(608),Je=function(e){var t=Object(a.useState)((function(){var e=new Date;return e.setHours(0,0,0,0),e})),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)((function(){var e=new Date;return e.setHours(23,59,59,999),e})),o=Object(l.a)(i,2),s=o[0],j=o[1],u=Object(a.useState)(8720),b=Object(l.a)(u,2),x=b[0],O=b[1],h=Object(a.useState)(""),f=Object(l.a)(h,2),m=f[0],g=f[1],v=e.list,y=e.workRecord;return Object(V.jsx)("div",{hidden:e.hidden,children:Object(V.jsxs)(w.a,{container:!0,spacing:2,children:[Object(V.jsx)(w.a,{item:!0,xs:12,md:12,children:Object(V.jsxs)(p.a,{variant:"h3",role:"h2",color:"primary",sx:{marginLeft:1,paddingTop:6,paddingBottom:4},children:[function(){var e=0;for(var t in y){console.log("today is "+t);var n=y[t][m],a=new Date(t);if(a>=c&&a<=s)for(var r in console.log("The date is"+t),console.log("The person is"+m),console.log(n),console.log("\uc5ec\uae30\ub294 \uc131\uacf5!"),n)e+=Number(n[r])}return e*x}()," \uc6d0"]})}),Object(V.jsx)(w.a,{item:!0,xs:12,md:3,lg:3,children:Object(V.jsx)(Pe,{list:v,person:m,setPerson:g,sx:{width:"100%"}})}),Object(V.jsx)(w.a,{item:!0,xs:6,md:3,lg:3,children:Object(V.jsx)(Ve.a,{mask:"____.__.__",label:"\uc2dc\uc791 \ub0a0\uc9dc",value:c,allowSameDateSelection:!0,onChange:function(e){e>s?alert("\ubd88\uac00\ub2a5!"):r(e)},renderInput:function(e){return Object(V.jsx)(T.a,Object(d.a)(Object(d.a)({},e),{},{sx:{width:"100%"},helperText:null}))}})}),Object(V.jsx)(w.a,{item:!0,xs:6,md:3,lg:3,children:Object(V.jsx)(Ve.a,{mask:"____.__.__",label:"\ub05d \ub0a0\uc9dc",value:s,allowSameDateSelection:!0,onChange:function(e){e<c?alert("\ubd88\uac00\ub2a5!"):j(e)},renderInput:function(e){return Object(V.jsx)(T.a,Object(d.a)(Object(d.a)({},e),{},{sx:{width:"100%"},helperText:null}))}})}),Object(V.jsx)(w.a,{item:!0,xs:12,md:3,lg:3,children:Object(V.jsx)(T.a,{id:"days",type:"number",label:"\uc2dc\uae09",variant:"outlined",inputProps:{min:0},sx:{width:"100%"},value:x,onChange:function(e){return O(e.target.value)}})})]})})},Be=n(341),Me=n(526),Ge=n(233),ze=n.n(Ge),Ye=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(8720),o=Object(l.a)(i,2),s=o[0],j=o[1],d=Object(a.useState)(0),u=Object(l.a)(d,2),b=u[0],O=u[1],h=Object(a.useState)(0),f=Object(l.a)(h,2),m=f[0],g=f[1];return Object(V.jsxs)("div",{hidden:e.hidden,children:[Object(V.jsxs)(p.a,{variant:"h3",role:"body1",color:"primary",sx:{marginLeft:1,paddingTop:6,paddingBottom:4},children:[" ",function(){var e=s*b*m;return!c||(e+=e/5),e}()," \uc6d0"]}),Object(V.jsx)(p.a,{variant:"h6",color:"secondary",sx:{marginLeft:1},children:"* 2021\ub144 \uae30\uc900 \ucd5c\uc800\uc2dc\uae09 8720\uc6d0"}),Object(V.jsxs)(x.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},marginTop:6,display:"flex",justifyContent:"space-between"},noValidate:!0,autoComplete:"off",children:[Object(V.jsx)(T.a,{id:"wage",type:"number",label:"\uc2dc\uac04 \ub2f9 \uc784\uae08",variant:"outlined",inputProps:{min:0},value:s,onChange:function(e){return j(e.target.value)}}),Object(V.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},children:Object(V.jsx)(ze.a,{})}),Object(V.jsx)(T.a,{id:"hours",type:"number",label:"\uc2dc\uac04",variant:"outlined",inputProps:{min:0,max:24},value:b,onChange:function(e){return O(e.target.value)}}),Object(V.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},children:Object(V.jsx)(ze.a,{})}),Object(V.jsx)(T.a,{id:"days",type:"number",label:"\uc77c \uc218",variant:"outlined",inputProps:{min:0},value:m,onChange:function(e){return g(e.target.value)}}),Object(V.jsx)(Me.a,{control:Object(V.jsx)(Be.a,{checked:c,onClick:function(){return r(!c)}}),label:"\uc8fc\ud734\uc218\ub2f9 \ud3ec\ud568"})]})]})},qe=["\ubc94\uc704\uacc4\uc0b0\uae30","\uac04\ub2e8\uacc4\uc0b0\uae30"],He=function(e){var t=Object(a.useState)(qe[0]),n=Object(l.a)(t,2),c=(n[0],n[1]),r=Object(a.useState)(0),i=Object(l.a)(r,2),o=i[0],s=i[1],j=e.data.people,d=e.data.workRecord;return Object(V.jsxs)(R.a,{elevation:3,sx:{height:"80vh",padding:2,overflow:"scroll"},children:[Object(V.jsx)(We,{idx:o,texts:qe,handler:function(e){console.log("new Val is: "+e),s(e),c(qe[e])}}),Object(V.jsx)(Je,{hidden:0!==o,list:j,workRecord:d}),Object(V.jsx)(Ye,{hidden:1!==o})]})},Ue=n(36),Xe=n(617),Ke=n(618),Qe=function(e){var t=e.list,n=e.ps,a=e.setPs,c=Object(Ue.a)(),r={PaperProps:{style:{maxHeight:224,width:250}}};function i(e,t,n){return{fontWeight:-1===t.indexOf(e)?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}return Object(V.jsx)(Se.a,{multiple:!0,displayEmpty:!0,renderValue:function(e){return 0===e.length?Object(V.jsx)("em",{children:"\uc9c1\uc6d0 \uc120\ud0dd"}):Object(V.jsx)(x.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return Object(V.jsx)(Ke.a,{label:e},e)}))})},value:n,onChange:function(e){var t=e.target.value;a("string"===typeof t?t.split(","):t)},input:Object(V.jsx)(Xe.a,{}),MenuProps:r,sx:e.sx,children:t.map((function(e){return Object(V.jsx)(ke.a,{value:e.name,xs:i(e.name,n,c),children:e.name},e.name)}))})},Ze=function(e){var t=e.data.people,n=e.data.workRecord,c=e.data.setPeople,r=e.data.date,i=e.data.setDate,o=Object(a.useState)(0),s=Object(l.a)(o,2),u=s[0],b=s[1],O=Object(a.useState)("\uae30\ubcf8 \uc5c5\ubb34"),h=Object(l.a)(O,2),f=h[0],p=h[1],m=Object(a.useState)([]),g=Object(l.a)(m,2),v=g[0],y=g[1];return Object(V.jsx)(R.a,{sx:{height:"80vh",padding:"20px",overflow:"scroll"},hidden:e.hidden,elevation:3,children:Object(V.jsxs)(w.a,{container:!0,sx:{mb:4,overflow:"scroll"},children:[Object(V.jsx)(w.a,{item:!0,xs:12,md:6,lg:6,sx:{mb:3},children:Object(V.jsx)(Y,{date:{val:r,dispatch:i},notTool:!0,sx:{mr:2,ml:2.5}})}),Object(V.jsx)(w.a,{item:!0,xs:12,md:6,lg:6,children:Object(V.jsxs)(x.a,{component:"form",sx:{display:"flex",justifyContent:"space-around",width:"100%",flexDirection:"column"},noValidate:!0,autoComplete:"off",children:[Object(V.jsx)(Qe,{list:t,ps:v,setPs:y,sx:{mb:1.5,ml:1.5,mr:1.5}}),Object(V.jsx)(T.a,{label:"\uc5c5\ubb34",required:!0,value:f,onChange:function(e){return p(e.target.value)},sx:{m:1.5}}),Object(V.jsx)(T.a,{type:"number",required:!0,value:u,onChange:function(e){return b(e.target.value)},inputProps:{min:0,max:24},label:"\uc2dc\uac04",sx:{m:1.5}}),Object(V.jsx)(W.a,{sx:{m:1.5},type:"submit",variant:"contained",color:"primary",onClick:function(e){return function(e){e.preventDefault();var a="".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate()),i={};n[a]?i[a]=n[a]:i[a]={};for(var o=0;o<v.length;o++)i[a][v[o]]?i[a][v[o]][f]=u:i[a][v[o]]=Object(j.a)({},f,u);var s={list:t,workRecord:Object(d.a)(Object(d.a)({},n),i)};c(s)}(e)},children:"\uae30\ub85d"}),Object(V.jsx)(x.a,{sx:{maxHeight:180,overflow:"scroll"},children:Object(V.jsx)(me,{data:e.data,readonly:!0,bgColor:"grey.300"})})]})})]})})},$e=["\uc9c1\uc6d0\ubaa9\ub85d","\uc77c\ud55c \uc2dc\uac04 \uae30\ub85d"],et=function(e){var t=Object(a.useState)($e[0]),n=Object(l.a)(t,2),c=(n[0],n[1]),r=Object(a.useState)(0),i=Object(l.a)(r,2),o=i[0],s=i[1],j=e.data;return Object(V.jsxs)(R.a,{elevation:3,sx:{height:"80vh",p:2,overflow:"scroll"},children:[Object(V.jsx)(We,{idx:o,texts:$e,handler:function(e){s(e),c($e[e])}}),Object(V.jsx)(me,{hidden:0!==o,data:j,readonly:!1}),Object(V.jsx)(Ze,{hidden:1!==o,data:j,readonly:!1})]})},tt=n(601),nt=n(613),at=n(166),ct=n(335),rt=n(326),it=["#003f5c","#374c80","#7a5195","#bc5090","#ef5675","#ff764a","#ffa600"],ot=[{name:"Group A",value:2400},{name:"Group B",value:4567},{name:"Group C",value:1398},{name:"Group D",value:9800},{name:"Group E",value:3908},{name:"Group F",value:4800}],st=function(){return Object(V.jsxs)(R.a,{children:[Object(V.jsx)(p.a,{variant:"h2",role:"h2",color:"primary",sx:{m:2,p:2,textAlign:"center"},children:"\uac00\uacc4\uc7a5\ubd80"}),Object(V.jsx)(w.a,{container:!0,children:Object(V.jsx)(w.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(tt.a,{height:250,children:Object(V.jsxs)(nt.a,{children:[Object(V.jsx)(at.a,{cursor:{stroke:"red",strokeWidth:2}}),Object(V.jsx)(ct.a,{data:ot,cx:"50%",cy:"50%",innerRadius:0,outerRadius:80,fill:"#82ca9d",label:!0,children:ot.map((function(e,t){return Object(V.jsx)(rt.a,{fill:it[t]},"cell-".concat(t))}))})]})})})})]})};function lt(e){return Object(V.jsx)(p.a,Object(d.a)(Object(d.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:"Simple Workbook Application for You, Last updated: 2021-09-05"}))}var jt=Object(u.a)(O.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(d.a)(Object(d.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}),{},{backgroundColor:t.primary})})),dt=Object(u.a)(b.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return{"& .MuiDrawer-paper":Object(d.a)({position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box"},!n&&Object(j.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}))}})),ut=function(e,t,n,a){return Object(V.jsxs)(w.a,{container:!0,spacing:3,children:[Object(V.jsx)(w.a,{item:!0,container:!0,flexDirection:"column",xs:12,md:6,lg:6,children:Object(V.jsx)(Y,{date:{val:e,dispatch:t},sx:{height:"100%"}})}),Object(V.jsxs)(w.a,{item:!0,container:!0,flexDirection:"column",justifyContent:"space-between",xs:12,md:6,lg:6,children:[Object(V.jsx)(Ee,{data:n,readonly:!0}),Object(V.jsx)(me,{data:a,readonly:!0})]})]})},bt=function(){var e,t,n,c=Object(a.useState)(!0),r=Object(l.a)(c,2),i=r[0],s=r[1],j=function(){s(!i)},u=Object(a.useState)(new Date),b=Object(l.a)(u,2),O=b[0],w=b[1],C=Object(a.useState)(1),k=Object(l.a)(C,2),F=k[0],T=k[1],R=Object(a.useState)("dashboard"),E=Object(l.a)(R,2),I=E[0],N=E[1],_=Object(a.useState)((function(){var e=localStorage.getItem("swayTodos");return JSON.parse(e)||{}})),A=Object(l.a)(_,2),L=A[0],W=A[1],J=Object(a.useState)((function(){var e=localStorage.getItem("swayPeople");return JSON.parse(e)||{list:[],workRecord:{}}})),B=Object(l.a)(J,2),M=B[0],G=B[1],z={todos:L,setTodos:W,upload:function(){var e=document.createElement("input");e.type="file",e.addEventListener("change",(function(){var t=e.files[0];console.log(t);var n=new FileReader;n.addEventListener("load",(function(t){var a,c=JSON.parse(n.result);W(c),null===(a=e.parentElement)||void 0===a||a.removeChild(e)})),n.readAsText(t)}),!1),e.click()},delete:function(){confirm("\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc0ad\uc81c\ub41c \ub370\uc774\ud130\ub294 \ub354 \uc774\uc0c1 \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")&&W({})},export:function(){var e=JSON.stringify(L);console.log(e);var t=new File([e],"sway-todos-".concat((new Date).getTime(),".json"));Object(_e.saveAs)(t)},date:O,setDate:w},Y={people:M.list,workRecord:M.workRecord,setPeople:G,date:O,setDate:w,export:function(){var e=JSON.stringify(M);console.log(e);var t=new File([e],"sway-people-".concat((new Date).getTime(),".json"));Object(_e.saveAs)(t)},upload:function(){var e=document.createElement("input");e.type="file",e.addEventListener("change",(function(){var t=e.files[0];console.log(t);var n=new FileReader;n.addEventListener("load",(function(t){var a,c=JSON.parse(n.result);G(c),null===(a=e.parentElement)||void 0===a||a.removeChild(e)})),n.readAsText(t)}),!1),e.click()}};return Object(a.useEffect)((function(){window.localStorage.setItem("swayTodos",JSON.stringify(L))}),[L]),Object(a.useEffect)((function(){window.localStorage.setItem("swayPeople",JSON.stringify(M))}),[M]),Object(V.jsxs)(x.a,{sx:{display:"flex"},children:[Object(V.jsx)(o.a,{}),Object(V.jsx)(jt,{position:"absolute",open:i,children:Object(V.jsxs)(h.a,{sx:{pr:"24px"},children:[Object(V.jsx)(g.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:j,sx:Object(d.a)({marginRight:"36px"},i&&{display:"none"}),children:Object(V.jsx)(S.a,{})}),Object(V.jsx)(p.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"\ub2f9\uc2e0\uc744 \uc704\ud55c \ubbf8\ub2c8\uba40 \uc6cc\ud06c\ubd81 \uc571, SWAY"}),Object(V.jsx)(g.a,{color:"inherit",onClick:function(){alert("\uc7a5\uc2dd\uc785\ub2c8\ub2e4!"),T(0)},children:Object(V.jsx)(v.a,{badgeContent:F,color:"secondary",children:Object(V.jsx)(P.a,{})})})]})}),Object(V.jsxs)(dt,{variant:"permanent",open:i,children:[Object(V.jsx)(h.a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:Object(V.jsx)(g.a,{onClick:j,children:Object(V.jsx)(D.a,{})})}),Object(V.jsx)(m.a,{}),Object(V.jsxs)(f.a,{children:[" ",(n=N,Object(V.jsxs)("div",{children:[Object(V.jsxs)(q.a,{button:!0,onClick:function(){n("dashboard")},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(Q.a,{})}),Object(V.jsx)(U.a,{primary:"\ub300\uc2dc\ubcf4\ub4dc"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return n("people")},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)($.a,{})}),Object(V.jsx)(U.a,{primary:"\uc9c1\uc6d0\uad00\ub9ac"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return n("acc")},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(ae.a,{})}),Object(V.jsx)(U.a,{primary:"\uc7a5\ubd80"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return n("calculator")},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(te.a,{})}),Object(V.jsx)(U.a,{primary:"\uc784\uae08\uacc4\uc0b0\uae30"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return n("todos")},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(oe.a,{})}),Object(V.jsx)(U.a,{primary:"\uc5c5\ubb34\uc77c\uc9c0"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return n("notice")},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(le.a,{})}),Object(V.jsx)(U.a,{primary:"\uc548\ub0b4"})]})]}))]}),Object(V.jsx)(m.a,{}),Object(V.jsxs)(f.a,{children:[" ",(e=z,t=Y,Object(V.jsxs)("div",{children:[Object(V.jsx)(X.a,{inset:!0,children:"\uc790\ub3d9 \uc800\uc7a5\uc740 \uc704\ud5d8\ud569\ub2c8\ub2e4!"}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return e.delete()},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(de.a,{})}),Object(V.jsx)(U.a,{primary:"\uc804\uccb4\uc77c\uc9c0 \uc0ad\uc81c\ud558\uae30",sx:{color:"#ff1744"}})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return e.upload()},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(be.a,{})}),Object(V.jsx)(U.a,{primary:"\uc5c5\ubb34\uc77c\uc9c0 \ud30c\uc77c \ubd88\ub7ec\uc624\uae30"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return e.export()},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(re.a,{})}),Object(V.jsx)(U.a,{primary:"\uc5c5\ubb34\uc77c\uc9c0 \ud30c\uc77c \uc800\uc7a5\ud558\uae30"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return t.upload()},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(be.a,{})}),Object(V.jsx)(U.a,{primary:"\uc9c1\uc6d0\uae30\ub85d \ud30c\uc77c \ubd88\ub7ec\uc624\uae30"})]}),Object(V.jsxs)(q.a,{button:!0,onClick:function(){return t.export()},children:[Object(V.jsx)(H.a,{children:Object(V.jsx)(re.a,{})}),Object(V.jsx)(U.a,{primary:"\uc9c1\uc6d0\uae30\ub85d \ud30c\uc77c \uc800\uc7a5\ud558\uae30"})]})]}))]})]}),Object(V.jsxs)(x.a,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"auto"},children:[Object(V.jsx)(h.a,{}),Object(V.jsxs)(y.a,{maxWidth:"lg",sx:{mt:4,mb:4},children:["dashboard"===I?ut(O,w,z,Y):"people"===I?Object(V.jsx)(et,{data:Y}):"calculator"===I?Object(V.jsx)(He,{data:Y}):"todos"===I?Object(V.jsx)(Ee,{data:z,people:M.list,readonly:!1}):"notice"===I?Object(V.jsx)(Ne,{}):"acc"===I?Object(V.jsx)(st,{}):"Nothing ever happens",Object(V.jsx)(lt,{sx:{pt:4}})]})]})]})},xt=n(607),Ot=n(516),ht=n(333);function ft(){var e=c.a.useState("ko"),t=Object(l.a)(e,2),n=t[0],a=(t[1],{ko:ht.a});return Object(V.jsx)("div",{children:Object(V.jsx)(Ot.b,{dateAdapter:xt.a,locale:a[n],children:Object(V.jsx)(bt,{})})})}var pt=n(117),mt=n(111),gt=Object(mt.b)({palette:{primary:{main:"#66023C"},secondary:{main:"#DFAFDF"},error:{main:pt.a.A400},background:{default:"#fff"}}});i.a.render(Object(V.jsxs)(s.a,{theme:gt,children:[Object(V.jsx)(o.a,{}),Object(V.jsx)(ft,{})]}),document.querySelector("#root"))}},[[510,1,2]]]);
//# sourceMappingURL=main.90e64596.chunk.js.map