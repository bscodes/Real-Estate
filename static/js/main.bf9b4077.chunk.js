(this.webpackJsonprealestate=this.webpackJsonprealestate||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(37),a(6)),o=a(7),i=a(9),m=a(8),u=a(10),p=a(4),d=a(17),g=a(2),f=a(20),b={products:[{title:"Modern loft apartment in the center of Kiev",images:["https://images.unsplash.com/photo-1565038914410-bceb20161823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"],brand:"houses",price:2693.4407990587074,size:"2200 sqft",id:0,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"},{title:"Modern loft apartment in the center of Kiev",images:["https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"],brand:"condos",price:2693.4407990587074,size:"2200 sqft",id:1,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"},{title:"Modern loft apartment in the center of Kiev",images:["https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"],brand:"houses",price:2693.4407990587074,size:"2200 sqft",id:2,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"},{title:"Modern loft apartment in the center of Kiev",images:["https://images.unsplash.com/photo-1570076146047-06848c7b8226?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"],brand:"apartments",price:2693.4407990587074,size:"2200 sqft",id:3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"},{title:"Modern loft apartment in the center of Kiev",images:["https://images.unsplash.com/photo-1574197634840-1ab768e4c8f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"],brand:"townhomes",price:2693.4407990587074,size:"2200 sqft",id:4,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"},{title:"Modern loft apartment in the center of Kiev",images:["https://images.unsplash.com/photo-1553576776-83c6a10b35b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"],brand:"townhomes",price:2693.4407990587074,size:"2200 sqft",id:5,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"}],cart:[]},E=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREMENT_CART_ITEM_QUANTITY":t=(e=Object(f.a)(a.cart)).findIndex((function(e){return e.id===n.payload}));var r=Object(g.a)({},e[t]);return r.quantity++,e[t]=r,Object(g.a)({},a,{cart:e});case"DECREMENT_CART_ITEM_QUANTITY":t=(e=Object(f.a)(a.cart)).findIndex((function(e){return e.id===n.payload}));var c=Object(g.a)({},e[t]);return c.quantity--,e[t]=c,Object(g.a)({},a,{cart:e});case"ADD_PRODUCT_TO_CART":if((t=(e=Object(f.a)(a.cart)).findIndex((function(e){return e.id===n.payload.id})))<0)e.push(Object(g.a)({},n.payload,{quantity:1}));else{var l=Object(g.a)({},e[t]);l.quantity++,e[t]=l}return Object(g.a)({},a,{cart:e});case"REMOVE_PRODUCT_FROM_CART":return t=(e=Object(f.a)(a.cart)).findIndex((function(e){return e.id===n.payload})),e.splice(t,1),Object(g.a)({},a,{cart:e});default:return a}},h={perPage:12,currentPage:1,pagesToShow:3,totalItemsCount:0},v=Object(d.b)({shop:E,brandFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BRAND_TO_FILTER":return e.includes(t.brand)?e:e+t.brand;case"REMOVE_BRAND_FROM_FILTER":console.log("remove brand",t);var a=new RegExp(t.brand,"gi");return e.replace(a,"");default:return e}},orderBy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_BY_ASC":return"asc";case"ORDER_BY_DESC":return"desc";case"CLEAR_ORDER_BY_PRICE":return"";default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PREV_PAGE":return 1===e.currentPage?e:Object(g.a)({},e,{currentPage:e.currentPage-1});case"NEXT_PAGE":return Object(g.a)({},e,{currentPage:e.currentPage+1});case"GO_PAGE":return Object(g.a)({},e,{currentPage:t.currentPage});case"COUNT_ITEM":return Object(g.a)({},e,{totalItemsCount:t.totalItemsCount});default:return e}}}),N=a(11),O=a(16),y=(a(42),a(43),["houses","condos","apartments","townhomes"]),P=Object(p.b)((function(e){var t={};return e.shop.products.forEach((function(e){t[e.brand]=t[e.brand]+1||1})),{brandItemsCount:t}}))((function(e){var t=e.dispatch,a=(e.brandItemsCount,function(e){var a=e.target.name;e.target.checked;e.target.checked?t({type:"ADD_BRAND_TO_FILTER",brand:a}):t(function(e){return{type:"REMOVE_BRAND_FROM_FILTER",brand:e}}(a))});return r.a.createElement("div",{className:"category-card card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Filter")),r.a.createElement("ul",{className:"list-group flex-row flex-wrap"},y.map((function(e){return r.a.createElement("li",{className:"list-group-item flex-50 mt-2",key:e},r.a.createElement("label",{className:"custom-checkbox text-capitalize"}," ",e,r.a.createElement("input",{type:"checkbox",name:e,className:"custom-checkbox__input",onInput:a}),r.a.createElement("span",{className:"custom-checkbox__span"})))}))))})),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(P,null))))}}]),t}(n.Component),w=a(18),x=function(e){return e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},_=(a(44),a(45),function(e){for(var t=e.len,a=e.activeItem,n=e.changeItem,c=[],l=function(e){var t="owl-dot";a===e&&(t+=" active"),c.push(r.a.createElement("button",{onClick:function(){n(e)},className:t},r.a.createElement("span",null)))},s=0;s<t;s++)l(s);return r.a.createElement("div",{className:"owl-dots mt-5"},c)}),k=Object(p.b)()((function(e){var t=e.product,a=t.title,c=t.price,l=t.images,s=t.id,o=t.brand,i=r.a.createRef(),m=Object(n.useState)(l[0]),u=Object(w.a)(m,2),p=u[0],d=u[1],g=Object(n.useState)(0),f=Object(w.a)(g,2),b=f[0],E=f[1],h=function(e){var t=("touchmove"===e.type?e.touches[0].clientX:e.clientX)-function(e){var t=0,a=0;do{t+=e.offsetTop||0,a+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:a}}(i.current).left,a=i.current.clientWidth/l.length,n=Math.ceil(t/a)-1;n<0&&(n=0),n>=l.length&&(n=l.length-1),E(n),d(l[n])},v=function(e){d(l[0]),E(0)};return r.a.createElement("div",{className:"card product"},r.a.createElement(N.b,{to:"/products/".concat(s),className:"product__link text-right"},r.a.createElement("img",{onMouseMove:h,onMouseOut:v,onTouchMove:h,onTouchEnd:v,className:"card-img-top product__img",src:p,alt:a,ref:i}),r.a.createElement("span",{className:"product__brand"},o),r.a.createElement(_,{len:l.length,activeItem:b,changeItem:function(e){d(l[e]),E(e)}})),r.a.createElement("div",{className:"card-body product__text text-left"},r.a.createElement("p",{className:"card-title pl-3 pr-3 mb-2"},r.a.createElement(N.b,{to:"/products/".concat(s)},a)),r.a.createElement("div",{className:"product-info pl-3 pr-3"},r.a.createElement("h5",{className:"product__price"}," $",x(c)))))})),C=function(e,t){return t?e.filter((function(e){return t.includes(e.brand)})):e},T=function(e,t){return t?(console.log("orderbYmethod",t),"asc"===t?e.slice().sort((function(e,t){return e.price-t.price})):e.slice().sort((function(e,t){return t.price-e.price}))):e},M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onPrev=function(){a.props.onPrevPage()},a.onNext=function(){a.props.onNextPage()},a.getPages=function(){var e=Math.ceil(a.props.totalItemsCount/a.props.perPage),t=a.props.currentPage||1,n=a.props.pagesToShow||9,r=[];r.push(t);for(var c=n-1,l=0;l<c;l++)r.length<n&&Math.min.apply(null,r)>1&&r.push(Math.min.apply(null,r)-1),r.length<n&&Math.max.apply(null,r)<e&&r.push(Math.max.apply(null,r)+1);return r.sort((function(e,t){return e-t})),r},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onPage",value:function(e){this.props.onGoPage(e)}},{key:"isOnLastPage",value:function(){return this.props.perPage*this.props.currentPage>=this.props.totalItemsCount}},{key:"totalPages",value:function(){return Math.ceil(this.props.totalItemsCount/this.props.perPage)||0}},{key:"getMin",value:function(){return this.props.perPage*this.props.currentPage-this.props.perPage+1}},{key:"getMax",value:function(){var e=this.props.perPage*this.props.currentPage;return e>this.props.totalItemsCount&&(e=this.props.totalItemsCount),e}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.getPages().map((function(t){var a="page-item";return t===e.props.currentPage&&(a+=" active"),r.a.createElement("li",{className:a,key:t,onClick:function(){e.onPage(t)}},r.a.createElement("button",{className:"page-link"},t))})),a="page-item";1===this.props.currentPage&&(a+=" disabled");var n=r.a.createElement("li",{className:a},r.a.createElement("button",{className:"page-link",onClick:this.onPrev,tabIndex:"-1"},"Prev")),c="page-item";this.isOnLastPage()&&(c+=" disabled");var l=r.a.createElement("li",{className:c},r.a.createElement("button",{disabled:this.isOnLastPage(),className:"page-link",onClick:this.onNext},"Next"));return r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"pagination"},n,t,l))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={colValue:"col-lg-4",perPage:12,currentPage:1,pagesToShow:3,gridValue:3},a.changeLayout=function(e){var t;a.setState({gridValue:e}),t=4===e?3:4,a.setState({colValue:"col-lg-".concat(t)})},a.onPrev=function(){var e=Object(g.a)({},a.state);e.currentPage=a.state.currentPage-1,a.setState(e)},a.onNext=function(){a.setState(Object(g.a)({},a.state,{currentPage:a.state.currentPage+1}))},a.goPage=function(e){a.setState(Object(g.a)({},a.state,{currentPage:e}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("div",{className:"product-list"},r.a.createElement("div",{className:"row"},function(e,t){if(!t||!t.perPage||!t.currentPage)return e;var a=t.perPage*(t.currentPage-1)||0;return e.slice(a,a+t.perPage)}(this.props.products,this.state).map((function(t){var a="".concat(e.state.colValue," col-md-6 mb-4");return r.a.createElement("div",{className:a,key:t.id},r.a.createElement(k,{product:t}))})))),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(M,{totalItemsCount:this.props.products.length,currentPage:this.state.currentPage,perPage:this.state.perPage,pagesToShow:this.state.pagesToShow,onGoPage:this.goPage,onPrevPage:this.onPrev,onNextPage:this.onNext})))}}]),t}(n.Component),I=Object(p.b)((function(e){var t=e.brandFilter,a=e.orderBy,n=C(e.shop.products,t);return{products:T(n,a)}}),null)(R),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement(j,null),r.a.createElement(I,null))))},D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={colValue:"col-lg-4",perPage:12,currentPage:1,pagesToShow:3,gridValue:3},a.changeLayout=function(e){var t;a.setState({gridValue:e}),t=4===e?3:4,a.setState({colValue:"col-lg-".concat(t)})},a.onPrev=function(){var e=Object(g.a)({},a.state);e.currentPage=a.state.currentPage-1,a.setState(e)},a.onNext=function(){a.setState(Object(g.a)({},a.state,{currentPage:a.state.currentPage+1}))},a.goPage=function(e){a.setState(Object(g.a)({},a.state,{currentPage:e}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"product-list"},r.a.createElement("div",{className:"row"},this.props.products.filter((function(e){return"houses"===e.brand})).map((function(t){var a="".concat(e.state.colValue," col-md-6 mb-4");return r.a.createElement("div",{className:a},r.a.createElement(k,{key:t.id,product:t}))})))))}}]),t}(n.Component),A=Object(p.b)((function(e){var t=e.brandFilter,a=e.orderBy,n=C(e.shop.products,t);return{products:T(n,a)}}),null)(D),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement(A,null))))},B=(a(47),function(){return r.a.createElement("section",{className:"Material-contact-section section-padding section-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mb-5 text-center"},r.a.createElement("h1",{className:"contact section-title"},"Contact")),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("form",{className:"shake",method:"post",id:"contactForm",name:"contact-form","data-toggle":"validator"},r.a.createElement("div",{className:"form-group label-floating"},r.a.createElement("label",{className:"control-label",for:"name"},"Name"),r.a.createElement("input",{className:"form-control",id:"name",type:"text",name:"name",required:!0,"data-error":"Please enter your name"}),r.a.createElement("div",{className:"help-block with-errors"})),r.a.createElement("div",{className:"form-group label-floating"},r.a.createElement("label",{className:"control-label",for:"email"},"Email"),r.a.createElement("input",{className:"form-control",id:"email",type:"email",name:"email",required:!0,"data-error":"Please enter your Email"}),r.a.createElement("div",{className:"help-block with-errors"})),r.a.createElement("div",{className:"form-group label-floating"},r.a.createElement("label",{className:"control-label"},"Subject"),r.a.createElement("input",{className:"form-control",id:"msg_subject",type:"text",name:"subject",required:!0,"data-error":"Please enter your message subject"}),r.a.createElement("div",{className:"help-block with-errors"})),r.a.createElement("div",{className:"form-group label-floating"},r.a.createElement("label",{for:"message",className:"control-label"},"Your Message"),r.a.createElement("textarea",{className:"form-control",rows:"3",id:"message",name:"message",required:!0,"data-error":"Write your message"}),r.a.createElement("div",{className:"help-block with-errors"})),r.a.createElement("div",{className:"form-submit mt-5 text-center"},r.a.createElement("button",{className:"btn btn-success",type:"submit",id:"form-submit"},r.a.createElement("i",{className:"material-icons mdi mdi-message-outline"}),"Send"),r.a.createElement("div",{id:"msgSubmit",className:"h3 text-center hidden"}),r.a.createElement("div",{className:"clearfix"}))))),r.a.createElement("div",{className:"col-md-12 mt-3"},r.a.createElement("div",{className:"find-widget mb-2"},r.a.createElement("h3",null,"Adress"),r.a.createElement("p",null,"4435 Berkshire Circle Knoxville Sokak No:35 \u0130stanbul")),r.a.createElement("div",{className:"find-widget mb-5 mt-5"},r.a.createElement("h3",null,"Phone"),r.a.createElement("p",null,"0(537)1234567"))))))}),L=(a(48),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header-transparent"},r.a.createElement("nav",{className:"navbar navbar-expand-lg text-center"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(N.c,{to:"/",className:"navbar-brand"},"E."),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"},r.a.createElement("i",{className:"fas fa-bars"}))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.c,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.c,{to:"/contact",className:"nav-link"},"Contact"))))))))}),F=function(){return r.a.createElement("footer",{className:"page-footer font-small blue pt-4"},r.a.createElement("div",{className:"container-fluid text-center text-md-left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 text-center mt-3 mb-3"},r.a.createElement("hr",null),r.a.createElement("h5",{className:"mb-3"},"Real Estate by Hasan Yazici")))))},V=function(e){var t=e.product,a=t.title,n=t.price,c=t.description;return r.a.createElement("aside",{className:"col-sm-7"},r.a.createElement("article",{className:"card-body p-5"},r.a.createElement("h3",{className:"title mb-3"},a),r.a.createElement("hr",{className:"mb-4 mt-4"}),r.a.createElement("p",{className:"price-detail-wrap"},r.a.createElement("span",{className:"price h3"},r.a.createElement("span",{className:"num"},x(n)),r.a.createElement("span",{className:"currency"}," \u20ba"))),r.a.createElement("hr",{className:"mb-4 mt-4"}),r.a.createElement("dl",{className:"item-property"},r.a.createElement("dt",null,"Description"),r.a.createElement("dd",null,r.a.createElement("p",{className:"text-capitalize"},c))),r.a.createElement(N.b,{to:"/contact"},r.a.createElement("button",{className:"btn btn-success"},"Book now"))))},W=a(31),z=(a(49),function(e){var t=e.images,a=r.a.createRef(),c=Object(n.useState)(t[0]),l=Object(w.a)(c,2),s=l[0],o=l[1],i=Object(n.useState)(0),m=Object(w.a)(i,2),u=(m[0],m[1]);return r.a.createElement("aside",{className:"col-sm-5 border-right"},r.a.createElement("article",{className:"gallery-wrap"},r.a.createElement("div",{className:"img-big-wrap"},r.a.createElement("div",{style:{padding:"2rem"}},r.a.createElement(W.a,{trigger:r.a.createElement("img",{ref:a,src:s,style:{width:"100%",height:"100%"},alt:"images"}),modal:!0,closeOnDocumentClick:!0},r.a.createElement("div",{className:"col-sm-5"},r.a.createElement("img",{className:"modal-img",src:s,alt:""}))))),r.a.createElement("div",{className:"img-small-wrap"},t.map((function(e,a){return r.a.createElement("div",{className:"item-gallery",onClick:function(){!function(e){o(t[e]),u(e)}(a)}},r.a.createElement("img",{src:e,alt:"images"}))})))))}),H=Object(p.b)((function(e,t){return{product:e.shop.products.find((function(e){return e.id===+t.match.params.id}))}}),null)((function(e){return r.a.createElement("div",{className:"container",style:{padding:"6rem 0"}},r.a.createElement("div",{className:"card product-dtl"},r.a.createElement("div",{className:"row"},r.a.createElement(z,{images:e.product.images}),r.a.createElement(V,{product:e.product}))))})),J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),Q=Object(O.f)(J),U=Object(d.c)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:U},r.a.createElement(N.a,{basename:"/"},r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(L,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:S}),r.a.createElement(O.a,{exact:!0,path:"/houses",component:q}),r.a.createElement(O.a,{exact:!0,path:"/contact",component:B}),r.a.createElement(O.a,{exact:!0,path:"/products/:id",component:H})),r.a.createElement(F,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.bf9b4077.chunk.js.map