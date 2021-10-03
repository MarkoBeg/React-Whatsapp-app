(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(43),i=a.n(n),r=(a(77),a(78),a(13)),o=(a(79),a(110)),j=a(108),d=a(64),l=a.n(d),b=a(65),m=a.n(b),u=a(48),h=a.n(u),O=a(49),p=a.n(O),f=(a(80),a(15)),x=a(35),v=Object(x.b)({name:"app",initialState:{roomId:null,roomName:null},reducers:{setRoomInfo:function(e,t){e.roomId=t.payload.roomId,e.roomName=t.payload.roomName}}}),g=v.actions.setRoomInfo,N=function(e){return e.app.roomId},S=function(e){return e.app.roomName},I=v.reducer,w=a(3);function y(e){var t=e.id,a=e.room,s=Object(c.useState)(""),n=Object(r.a)(s,2),i=n[0],j=n[1],d=Object(f.b)();return Object(c.useEffect)((function(){j(Math.floor(1e3*Math.random()))}),[]),Object(w.jsxs)("div",{className:"sidebarChat",id:t,onClick:function(){return d(g({roomId:t,roomName:a}))},children:[Object(w.jsx)(o.a,{src:"https://avatars.dicebear.com/api/avataaars/".concat(i,".svg")}),Object(w.jsxs)("div",{className:"sidebarChat-info",children:[Object(w.jsx)("h2",{children:a}),Object(w.jsx)("p",{children:"Last seen..."})]})]})}var C=a(36),k=C.a.initializeApp({apiKey:"AIzaSyAxDfbuetg3jx6zEcIIoQq3ctK05uDZgFs",authDomain:"whatsapp-e1158.firebaseapp.com",projectId:"whatsapp-e1158",storageBucket:"whatsapp-e1158.appspot.com",messagingSenderId:"698226016851",appId:"1:698226016851:web:e6e944be31de9a7ada3ca6"}).firestore(),A=C.a.auth(),D=new C.a.auth.GoogleAuthProvider,E=Object(x.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),M=E.actions,P=M.login,L=M.logout,U=function(e){return e.user.user},z=E.reducer;function B(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(f.c)(U),i=Object(f.b)();Object(c.useEffect)((function(){k.collection("rooms").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(w.jsxs)("div",{className:"sidebar",children:[Object(w.jsx)("div",{className:"sidebar-header",children:Object(w.jsx)(o.a,{src:n.profilePic,onClick:function(){A.signOut().then((function(){return i(L())}))},className:"logout"})}),Object(w.jsxs)("div",{className:"sidebar-header-right",children:[Object(w.jsx)(j.a,{children:Object(w.jsx)(l.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(m.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(h.a,{})})]}),Object(w.jsx)("div",{className:"sidebar-search",children:Object(w.jsxs)("div",{className:"sidebar-search-container",children:[Object(w.jsx)(p.a,{}),Object(w.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(w.jsxs)("div",{className:"sidebar-chats",children:[Object(w.jsx)("div",{className:"createChat",children:Object(w.jsx)("h2",{onClick:function(){var e=prompt("Add new User");if(0===e.length)return alert("Please enter a valid user name");k.collection("rooms").add({name:e})},children:"Add new User"})}),Object(w.jsx)(y,{}),a.map((function(e){var t=e.id,a=e.data.name;return Object(w.jsx)(y,{room:a,id:t},t)}))]})]})}a(90);var R=a(66),F=a.n(R),J=a(67),K=a.n(J),T=a(68),q=a.n(T);a(91);function G(e){var t=e.timestamp,a=e.message,c=Object(f.c)(U);return Object(w.jsxs)("div",{className:"messages",children:[Object(w.jsx)(o.a,{src:c.profilePic}),Object(w.jsxs)("div",{className:"message-info",children:[Object(w.jsxs)("h4",{className:"message-name",children:[c.name,Object(w.jsx)("span",{className:"message-timestamp",children:new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString()})]}),Object(w.jsxs)("div",{className:"message-email-section ".concat(c.name&&"chat-reciever"),children:[Object(w.jsx)("span",{className:"message-email",children:c.email}),Object(w.jsx)("p",{children:a})]})]})]})}function Q(){var e=Object(f.c)(U),t=Object(c.useState)(""),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(f.c)(N),d=Object(f.c)(S),l=Object(c.useState)([]),b=Object(r.a)(l,2),m=b[0],u=b[1],O=Object(c.useState)(""),x=Object(r.a)(O,2),v=x[0],g=x[1];Object(c.useEffect)((function(){i&&k.collection("rooms").doc(i).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return u(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[i]);return Object(c.useEffect)((function(){g(Math.floor(1e3*Math.random()))}),[]),Object(w.jsxs)("div",{className:"chat",children:[Object(w.jsxs)("div",{className:"chat-header",children:[Object(w.jsx)(o.a,{src:"https://avatars.dicebear.com/api/avataaars/".concat(v,".svg")}),Object(w.jsxs)("div",{className:"chat-info",children:[Object(w.jsx)("h3",{children:d}),Object(w.jsx)("p",{children:(null===m||void 0===m?void 0:m.timestamp)||"Last seen"})]}),Object(w.jsxs)("div",{className:"chat-icons",children:[Object(w.jsx)(j.a,{children:Object(w.jsx)(p.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(F.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(h.a,{})})]})]}),Object(w.jsxs)("div",{className:"chat-body",children:[Object(w.jsx)(G,{}),m.map((function(e){var t=e.id,a=e.data,c=a.message,s=a.timestamp,n=a.email;return Object(w.jsx)(G,{id:t,message:c,email:n,timestamp:s},t)}))]}),Object(w.jsxs)("div",{className:"chat-footer",children:[Object(w.jsx)(K.a,{}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{type:"text",placeholder:"Send message ".concat(e.name),value:s,onChange:function(e){return n(e.target.value)}}),Object(w.jsx)("button",{className:"btn-footer",onClick:function(t){t.preventDefault(),k.collection("rooms").doc(i).collection("messages").add({message:s,timestamp:C.a.firestore.FieldValue.serverTimestamp(),email:e.email}),n("")},disabled:!s,children:"Send Message"})]}),Object(w.jsx)(q.a,{})]})]})}a(92);function V(){var e=Object(f.b)("");return Object(w.jsx)("div",{className:"login",children:Object(w.jsxs)("div",{className:"login-container",children:[Object(w.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/whatsapp-circle-1868968-1583132.png",alt:""}),Object(w.jsx)("button",{onClick:function(t){t.preventDefault(),A.signInWithPopup(D).then((function(t){var a=t.data;e(P({data:a}))})).catch((function(e){return alert(e)}))},className:"login-btn",children:"Login"})]})})}var W=function(){var e=Object(f.c)(U),t=Object(f.b)();return Object(c.useEffect)((function(){A.onAuthStateChanged((function(e){e&&t(P({uid:e.uid,name:e.displayName,email:e.email,profilePic:e.photoURL}))}))}),[t]),Object(w.jsx)("div",{className:"app",children:e?Object(w.jsxs)("div",{className:"app-body",children:[Object(w.jsx)(B,{}),Object(w.jsx)(Q,{})]}):Object(w.jsx)(V,{})})},Z=Object(x.a)({reducer:{user:z,app:I}});i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(f.a,{store:Z,children:Object(w.jsx)(W,{})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.e6330f0e.chunk.js.map