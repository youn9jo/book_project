(this.webpackJsonpbook_project=this.webpackJsonpbook_project||[]).push([[0],{27:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),o=c.n(s),r=c(10),a=c.n(r),i=c(2),j=c(3),h=c(5),l=c(4),u=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("p",{children:"Google Book API Library"})})},b=c(12),d=function(e){return Object(n.jsx)("div",{className:"search-area",children:Object(n.jsxs)("form",{onSubmit:e.searchBook,action:"",children:[Object(n.jsx)("input",{onChange:e.handleSearch,type:"text"}),Object(n.jsx)("button",{type:"submit",children:"Search"})]})})},O=c(11),m=c.n(O),p=function(e){return Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("img",{src:e.image,alt:e.title}),Object(n.jsxs)("div",{className:"desc",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("h3",{children:e.author}),Object(n.jsx)("p",{children:e.published}),Object(n.jsx)("p",{children:e.summary})]})]})},x=function(e){return Object(n.jsx)("div",{className:"list",children:e.books.map((function(e,t){return Object(n.jsx)(p,{image:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors,published:e.volumeInfo.publishedDate,summary:e.volumeInfo.description},t)}))})},f=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={books:[],searchBook:""},e.searchBook=function(t){t.preventDefault(),m.a.get("https://www.googleapis.com/books/v1/volumes").query({q:e.state.searchField}).then((function(t){e.setState({books:Object(b.a)(t.body.items)}),console.log(t)}))},e.handleSearch=function(t){e.setState({searchField:t.target.value})},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{searchBook:this.searchBook,handleSearch:this.handleSearch}),Object(n.jsx)(x,{books:this.state.books})]})}}]),c}(s.Component),v=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)(f,{})]})}}]),c}(s.Component);a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.96f08f17.chunk.js.map