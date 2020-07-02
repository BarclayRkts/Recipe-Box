(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),l=a.n(s),r=(a(16),a(17),a(7)),c=a(10),o=a(2),u=a(3),m=a(1),h=a(5),p=a(4),d=a(6),g=a(24),v=(a(18),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",ingredients:"",instructions:"",image:"",visible:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createRecipe(Object(r.a)(Object(r.a)({},this.state),{},{id:Object(g.a)()})),this.props.toggle(),this.setState({name:"",ingredients:"",instructions:"",image:""})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("button",{className:"toggleBtn",onClick:this.props.toggle,type:"button"},"X"),i.a.createElement("h3",null,"Add Recipe"),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Recipe Name *"),i.a.createElement("input",{className:"inputBox name",name:"name",value:this.state.name,onChange:this.handleChange})),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Ingredients *"),i.a.createElement("textarea",{className:"inputBox ingredients",name:"ingredients",value:this.state.ingredients,onChange:this.handleChange})),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Instructions *"),i.a.createElement("textarea",{className:"inputBox instructions",name:"instructions",value:this.state.instructions,onChange:this.handleChange})),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Image URL (optional) *"),i.a.createElement("input",{className:"inputBox imageURL",name:"image",value:this.state.image,onChange:this.handleChange})),i.a.createElement("button",null,"Add Recipe")))}}]),a}(n.Component)),b=(a(19),a(20),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={exit:!1,isEditing:!1,recipe:n.props.recipe,ingridents:n.props.ingridents,image:n.props.image,instructions:n.props.instructions},n.handleRemove=n.handleRemove.bind(Object(m.a)(n)),n.toggleForm=n.toggleForm.bind(Object(m.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleRemove",value:function(){this.props.removeRecipe(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateRecipe(this.props.id,this.state.ingridents),this.setState({isEditing:!1})}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.isEditing?i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleUpdate},i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Recipe Name *"),i.a.createElement("input",{value:this.state.recipe,name:"recipe",className:"inputBox name",onChange:this.handleChange})),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Ingredients *"),i.a.createElement("textarea",{className:"inputBox ingredients",name:"ingridents",value:this.state.ingridents,onChange:this.handleChange})),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Instructions *"),i.a.createElement("textarea",{className:"inputBox instructions",name:"instructions",value:this.state.instructions,onChange:this.handleChange})),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",null,"Image URL (optional) *"),i.a.createElement("input",{className:"inputBox imageURL",name:"image",value:this.state.image,onChange:this.handleChange})),i.a.createElement("button",null,"Save"))):i.a.createElement("div",{className:"containerBox"},i.a.createElement("button",{className:"exitBtn",onClick:this.props.onClose},"X"),i.a.createElement("h1",{className:"title"},this.props.recipe),i.a.createElement("div",{className:"ingridentsBox"},i.a.createElement("h2",null,"Ingridents"),i.a.createElement("pre",null,this.props.ingridents)),i.a.createElement("div",{className:"imageBox"},i.a.createElement("img",{src:this.props.image,alt:this.props.recipe})),i.a.createElement("div",{className:"instructionsBox"},i.a.createElement("h2",null,"Instructions"),i.a.createElement("pre",null,this.props.instructions)),i.a.createElement("button",{onClick:this.handleRemove},"Delete"))}}]),a}(n.Component)),E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={toggle:!1},n.handleClick=n.handleClick.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"render",value:function(){return i.a.createElement("div",{className:"imgBox"},i.a.createElement("img",{className:"img",alt:this.props.name,src:this.props.image}),i.a.createElement("div",{className:"boxName"},this.props.recipe),i.a.createElement("button",{onClick:this.handleClick},"Open Recipe"),this.state.toggle?i.a.createElement(b,{key:this.props.id,onClose:this.handleClick,updateRecipe:this.props.updateRecipe,removeRecipe:this.props.removeRecipe,id:this.props.id,recipe:this.props.recipe,image:this.props.image,ingridents:this.props.ingridents,instructions:this.props.instructions}):null)}}]),a}(n.Component),C=(a(21),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={recipes:[],visible:!0,exit:" "},n.create=n.create.bind(Object(m.a)(n)),n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.handleExit=n.handleExit.bind(Object(m.a)(n)),n.remove=n.remove.bind(Object(m.a)(n)),n.update=n.update.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"create",value:function(e){this.setState({recipes:[].concat(Object(c.a)(this.state.recipes),[e])})}},{key:"handleClick",value:function(){this.setState({visible:!this.state.visible})}},{key:"handleExit",value:function(){alert("child is exiting")}},{key:"remove",value:function(e){this.setState({recipes:this.state.recipes.filter((function(t){return t.id!==e}))})}},{key:"update",value:function(e,t){var a=this.state.recipes.map((function(a){return a.id===e?Object(r.a)(Object(r.a)({},a),{},{ingredients:t}):a}));this.setState({recipes:a})}},{key:"render",value:function(){var e=this,t=this.state.recipes.map((function(t,a){return i.a.createElement("div",null,i.a.createElement(E,{key:t.id,updateRecipe:e.update,id:t.id,index:a,removeRecipe:e.remove,recipe:t.name,image:t.image,ingridents:t.ingredients,instructions:t.instructions,visible:!0}))}));return i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},"Recipe App"),this.state.visible?null:i.a.createElement(v,{toggle:this.handleClick,createRecipe:this.create}),i.a.createElement("button",{onClick:this.handleClick},"Add Recipe"),i.a.createElement("div",null,t)))}}]),a}(n.Component));var f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.57865e5d.chunk.js.map