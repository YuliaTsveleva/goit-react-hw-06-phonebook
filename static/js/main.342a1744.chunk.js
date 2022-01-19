(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,a){e.exports={Section:"Section_Section__1N7A5",Title:"Section_Title__20sua"}},17:function(e,t,a){e.exports={Label:"Filter_Label__3qdKv",Input:"Filter_Input__u-dCK"}},18:function(e){e.exports=JSON.parse('[{"id":"1","name":"name","label":"Name*","type":"text","pattern":"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([\' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","title":"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan","required":true},{"id":"2","name":"number","label":"Number*","type":"tel","pattern":"\\\\+?\\\\d{1,4}?[-.\\\\s]?\\\\(?\\\\d{1,3}?\\\\)?[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,9}","title":"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +","required":true},{"id":"3","name":"email","label":"Email","type":"email","required":false}]')},20:function(e,t,a){e.exports={contactsList:"ContactList_contactsList__3ajMs"}},21:function(e,t,a){e.exports={Text:"EmptyText_Text__1F9w9"}},31:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),s=(a(31),a(32),a(15)),o=a.n(s),l=a(1),u=function(e){var t=e.title,a=e.children;return Object(l.jsxs)("section",{className:o.a.Section,children:[t&&Object(l.jsx)("h1",{className:o.a.Title,children:t}),a]})},b=a(13),m=a(7),d=a.n(m),j=a(18),p=a(12),O=a(3),_=function(e){return e.contacts},h=function(e){return e.filter},f=function(e){var t=e.contacts,a=e.filter.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(a)}))},x=a(4),C=Object(x.b)("contacts/Add",(function(e){return{payload:{id:e.id,name:e.name,number:e.number,email:e.email}}})),N=Object(x.b)("contacts/Delete"),v=Object(x.b)("contacts/ChangeFilter"),g=a(26);function k(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),s=i[0],o=i[1],u=Object(n.useState)(""),m=Object(b.a)(u,2),h=m[0],f=m[1],x=Object(O.c)(_),N=Object(O.b)(),k=function(e){switch(e.target.name){case"name":c(e.target.value);break;case"number":o(e.target.value);break;case"email":f(e.target.value);break;default:return}},y=function(){c(""),o(""),f("")};return Object(l.jsxs)("form",{className:d.a.Form,autoComplete:"on",onSubmit:function(e){e.preventDefault();var t=x.some((function(e){return e.name.toLowerCase()===a.toLowerCase()}));if(t)alert("".concat(a," is already exists in contacts"));else{var n={id:Object(g.a)(),name:a,number:s,email:h};N(C(n))}N(v("")),e.currentTarget.reset(),y()},children:[j.map((function(e){var t={name:a,number:s,email:h};return Object(l.jsx)("div",{children:Object(l.jsxs)("label",{className:d.a.Label,children:[e.label,Object(l.jsx)("input",{id:e.id,value:t[e.name],onChange:k,className:d.a.Input,type:e.type,name:e.name,pattern:e.pattern,title:e.title,required:e.required,autoComplete:"true"})]})},e.name)})),Object(l.jsx)("p",{className:d.a.Reminder,children:"Fields marked with * are required"}),Object(l.jsxs)("button",{className:d.a.Button,type:"submit",children:[Object(l.jsx)(p.b,{className:d.a.Icon,size:16}),"Add contact"]})]})}var y=a(20),I=a.n(y),L=a(5),A=a.n(L);var F=function(e){var t=e.name,a=e.number,n=e.email,c=e.onClick;return Object(l.jsxs)("li",{className:A.a.Item,children:[Object(l.jsxs)("div",{className:A.a.Wrapper,children:[Object(l.jsxs)("p",{className:A.a.Name,children:[t,":"]}),Object(l.jsx)("p",{className:A.a.Number,children:Object(l.jsx)("a",{className:A.a.TelLink,href:"tel:".concat(a),children:a})}),Object(l.jsx)("p",{className:A.a.Email,children:Object(l.jsx)("a",{className:A.a.MailLink,href:"mailto:".concat(n),children:n})})]}),Object(l.jsx)("button",{type:"button",onClick:function(){return c()},className:A.a.Button,children:Object(l.jsx)(p.a,{size:18})})]})};function w(){var e=Object(O.c)(f),t=Object(O.b)();return Object(l.jsx)("ul",{className:I.a.contactsList,children:e&&e.map((function(e){return Object(l.jsx)(F,{id:e.id,name:e.name,number:e.number,email:e.email,onClick:function(){return a=e.id,t(N(a));var a}},e.id)}))})}var T=a(17),S=a.n(T);function q(){var e=Object(O.c)(h),t=Object(O.c)(_).length,a=Object(O.b)();return Object(l.jsxs)("label",{className:S.a.Label,children:["Find contact by name in ",t," contacts",Object(l.jsx)("input",{className:S.a.Input,type:"text",value:e,onChange:function(e){return a(v(e.target.value))}})]})}var z=a(21),B=a.n(z),M=function(){return Object(l.jsx)("p",{className:B.a.Text,children:"Your contact list is empty"})};function E(){var e=Object(O.c)(_).length;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{title:"Phonebook",children:Object(l.jsx)(k,{})}),Object(l.jsxs)(u,{title:"Contacts",children:[e>1&&Object(l.jsx)(q,{}),Object(l.jsx)(w,{}),0===e&&Object(l.jsx)(M,{})]})]})}var J,R=a(8),Z=a(25),W=a(2),D=Object(x.c)([],(J={},Object(R.a)(J,C,(function(e,t){var a=t.payload;return[].concat(Object(Z.a)(e),[a])})),Object(R.a)(J,N,(function(e,t){var a=t.payload;return e.filter((function(e){return e.id!==a}))})),J)),K=Object(x.c)("",Object(R.a)({},v,(function(e,t){return t.payload}))),P=Object(W.b)({contacts:D,filter:K}),V=a(22),X=a.n(V),Y=a(6),$=a(23),G={key:"contacts",storage:a.n($).a,blacklist:["filter"]},H=Object(x.a)({reducer:Object(Y.g)(G,P),middleware:function(e){return e({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}}).concat(X.a)},devTools:!1}),Q=Object(Y.h)(H),U=a(24);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O.a,{store:H,children:Object(l.jsx)(U.a,{loading:null,persistor:Q,children:Object(l.jsx)(E,{})})})}),document.getElementById("root"))},5:function(e,t,a){e.exports={Item:"ContactItem_Item__3JRpy",Wrapper:"ContactItem_Wrapper__3ON96",Name:"ContactItem_Name__3AhsM",Number:"ContactItem_Number__qpVwb",Email:"ContactItem_Email__2O65X",TelLink:"ContactItem_TelLink__3Zw5M",MailLink:"ContactItem_MailLink__ACura",Button:"ContactItem_Button__6gcvu"}},7:function(e,t,a){e.exports={Form:"AddContactForm_Form__1olAz",Label:"AddContactForm_Label__2_Rjb",Input:"AddContactForm_Input__2otrZ",Reminder:"AddContactForm_Reminder__F6Lsq",Button:"AddContactForm_Button__311gz",Icon:"AddContactForm_Icon__1bwWe"}}},[[40,1,2]]]);
//# sourceMappingURL=main.342a1744.chunk.js.map