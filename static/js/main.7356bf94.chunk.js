(this.webpackJsonpmakewish=this.webpackJsonpmakewish||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var s=a(14),n=a(15),i=a(2),c=a(18),h=a(17),l=a(3),r=a.n(l),o=a(16),d=a.n(o),j=(a(24),a(25),a(5)),m=a.n(j),b=a(0),u=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchWishes=function(){var e;m.a.get("https://morning-escarpment-17933.herokuapp.com/api/v1/wish/").then((function(t){e=t.data,n.setState({wishWall:e}),console.log(e)}))},n.handleChangeName=function(e){n.setState({name:e.target.value})},n.state={name:"",wish:"",wishWall:[]},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n.handleChangeName=n.handleChangeName.bind(Object(i.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.fetchWishes()}},{key:"handleChange",value:function(e){this.setState({wish:e.target.value}),console.log(this.state.wish,this.state.wishWall)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),m.a.post("https://morning-escarpment-17933.herokuapp.com/api/v1/wish/",{name:this.state.name,detail:this.state.wish}).then((function(e){t.setState({name:"",wish:""}),t.fetchWishes()}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{className:"nav-wrapper",children:[Object(b.jsx)("a",{href:"#!",className:"brand-logo center",children:"Wish Collector"}),Object(b.jsx)("ul",{id:"nav-mobile",className:"left hide-on-med-and-down",children:Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"sass.html",children:"What to do?"})})})]})}),Object(b.jsx)("div",{className:"col s6 offset-s3",id:"take_input",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("form",{className:"col s12",children:Object(b.jsxs)("div",{className:"input-field col s12",children:[Object(b.jsx)("textarea",{id:"textarea1",className:"materialize-textarea",placeholder:"Your Name. Eg: Vaibhav Shrivastava",value:this.state.name,onChange:this.handleChangeName}),Object(b.jsx)("textarea",{id:"textarea2",className:"materialize-textarea",placeholder:"Eg: Covid Free World!",value:this.state.wish,onChange:this.handleChange}),Object(b.jsx)("button",{className:"btn waves-effect waves-light",type:"submit",onClick:this.handleSubmit,children:"Submit"})]})})})})]}),Object(b.jsx)("ol",{children:this.state.wishWall.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)("blockquote",{children:[e.detail,"     - ",e.name]})},e.id)}))}),Object(b.jsxs)("div",{className:"game-info",children:[Object(b.jsx)("div",{}),Object(b.jsx)("ol",{})]})]})}}]),a}(r.a.Component);d.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))},25:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.7356bf94.chunk.js.map