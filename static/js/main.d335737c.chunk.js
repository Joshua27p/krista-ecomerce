(this.webpackJsonpkriska=this.webpackJsonpkriska||[]).push([[0],{61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),r=s(14),n=s.n(r),i=s(11),l=s(2),o=s(7),d=s.n(o),m=s(12),j=s(9);var u=function(e){var t=e.name,s=e.category,a=e.image;return Object(c.jsx)("div",{className:"container my-12 mx-auto px-4 md:px-12 w-auto",children:Object(c.jsxs)("div",{className:"overflow-hidden rounded-lg shadow-lg",children:[Object(c.jsx)("a",{href:"/#",children:Object(c.jsx)("img",{alt:t,className:"block h-72 w-auto",src:a})}),Object(c.jsx)("div",{className:"flex items-center justify-between leading-tight p-2 md:p-4",children:Object(c.jsx)("h1",{className:"text-lg",children:Object(c.jsx)("a",{className:"no-underline hover:underline text-black",href:"/#",children:t})})}),Object(c.jsxs)("div",{className:"flex items-center justify-between leading-none p-2 md:p-4",children:[Object(c.jsx)("a",{className:"flex items-center no-underline hover:underline text-black",href:"/#",children:Object(c.jsx)("p",{className:"ml-2 text-sm",children:s})}),Object(c.jsxs)("a",{className:"no-underline",href:"/#",children:[Object(c.jsx)("span",{className:"hidden",children:"Like"}),Object(c.jsx)("i",{className:"text-gray-400 fa fa-heart hover:text-red-500"})]})]})]})})},b=s.p+"static/media/banner.c459ca93.jpg";var x=function(){return Object(c.jsx)("div",{className:"bg-no-repeat bg-cover bg-center",children:Object(c.jsx)("img",{className:"",src:b,alt:"banner kriska"})})},h=s(15),p=s.n(h),f=function(){var e=Object(m.a)(d.a.mark((function e(t,s){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://kriska-rest.herokuapp.com/catalogue",{params:{offers:t,limit:s}});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),g={card:[{_id:1,name:"Nuevos lanzamientos",image:"https://www.lara.pe/wp-content/uploads/2020/11/IMG_2322-1-2.jpg",button:"Comprar ya",direction:"right"},{_id:2,name:"Productos",image:"https://www.lara.pe/wp-content/uploads/2020/06/final-1.png",button:"Comprar ya",direction:"left"}]};var O=function(e){var t=e.name,s=e.image,a=e.button,r=e.direction,n=Object(l.f)();return Object(c.jsxs)("div",{className:"flex justify-center items-center relative w-full p-4",children:[Object(c.jsx)("img",{className:"w-full h-full relative",src:s,alt:t}),Object(c.jsxs)("div",{className:" p-2text-".concat(r,"  absolute text-center w-auto top-10 ").concat(r,"-9"),children:[Object(c.jsx)("p",{className:"text-pink-400 uppercase font-bold",children:t}),Object(c.jsx)("button",{onClick:function(){return n.push("/catalogue")},className:"text-black-400 p-1 w-44 bg-white text-sm border-2  text-black hover:bg-black hover:text-white font-sans",children:a})]})]})},v=function(){return Object(c.jsxs)("div",{className:"flex flex-wrap container my-16 mx-auto mb-32 px-4 md:px-12",children:[Object(c.jsxs)("div",{className:"flex mr-4 w-52 flex-grow p-2",children:[Object(c.jsx)("i",{className:"fas fa-shipping-fast fa-2x mr-4 text-gray-400 mt-3"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"font-bold",children:"Entrega Puntual"}),Object(c.jsx)("p",{className:"text-justify",children:"Contamos con entregas a nivel nacional hasta la puerta de tu hogar con la confianza que ofrece nuestro courier"})]})]}),Object(c.jsxs)("div",{className:"flex mr-4 w-52 flex-grow p-2",children:[Object(c.jsx)("i",{className:"fas fa-heartbeat fa-2x mr-4 text-gray-400 mt-3"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"font-bold",children:"Alta Calidad"}),Object(c.jsx)("p",{className:"text-justify",children:"Llevamos m\xe1s de 20 a\xf1os entregando productos de primera calidad, con la mejor selecci\xf3n de telas para nuestras prendas"})]})]}),Object(c.jsxs)("div",{className:"flex w-52 flex-grow p-2",children:[Object(c.jsx)("i",{className:"fas fa-money-check-alt fa-2x mr-4 text-gray-400 mt-3"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"font-bold",children:"Compra 100% Segura"}),Object(c.jsx)("p",{className:"text-justify",children:" Podras comprar con total tranquilidad y confianza, nuestro sistema de pagos es el m\xe1s seguro de todos"})]})]})]})},w=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],r=t[1],n=function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(!0,4);case 2:t=e.sent,r(t.data.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(s),Object(a.useEffect)((function(){n()}),[]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(x,{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"font-sans text-3xl text-center m-5 border-t-2 border-b-2 p-1 border-red-200",children:"Productos"}),Object(c.jsx)("div",{className:"grid lg:grid-cols-2",children:g.card.map((function(e){var t=e._id,s=e.name,a=e.image,r=e.button,n=e.direction;return Object(c.jsx)(O,{name:s,image:a,button:r,direction:n},t)}))})]}),Object(c.jsx)("h2",{className:"font-sans text-3xl text-center   m-4 border-t-2 border-b-2 p-1 border-red-200",children:"Ofertas"}),Object(c.jsx)("div",{className:" grid lg:grid-cols-4 md:grid-cols-2",children:s.map((function(e){var t=e._id,s=e.name,a=e.images,r=e.category;return Object(c.jsx)(u,{name:s,image:a[0],category:r},t)}))}),Object(c.jsx)(v,{})]})},N=s(30),A=(s(60),{products:[{_id:1,image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{_id:2,image:"https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{_id:3,image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}]}),C=function(e){var t=e.image,s=e.setImagePrincipal;return Object(c.jsx)("div",{className:"bg-cover mb-2 mx-1 shadow-lg",onClick:function(){return s(t)},children:Object(c.jsx)("img",{src:t,alt:"Imagen peque\xf1a",className:"rounded-md h-full w-full cursor-pointer "})})},k=function(){var e=Object(a.useState)(A.products[0].image),t=Object(j.a)(e,2),s=t[0],r=t[1],n=Object(a.useState)(0),i=Object(j.a)(n,2),l=i[0],o=i[1];return Object(c.jsx)("div",{children:Object(c.jsx)("main",{className:"my-8",children:Object(c.jsx)("div",{className:"flex container mx-auto px-6",children:Object(c.jsxs)("div",{className:"flex flex-col",children:[Object(c.jsx)("div",{className:"flex flex-row md:flex-col  py-2",children:A.products.map((function(e){var t=e.image;return Object(c.jsx)(C,{setImagePrincipal:r,image:t})}))}),Object(c.jsx)("div",{className:"h-auto p-1 shadow-xl rounded-xl bg-cover",children:Object(c.jsx)(N.a,{src:s,zoomSrc:s,className:"h-auto w-full rounded-lg object-cover max-w-lg mx-auto"})}),Object(c.jsxs)("div",{className:"w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2",children:[Object(c.jsx)("h3",{className:"text-gray-700 uppercase text-lg",children:"Vestido kriska "}),Object(c.jsx)("span",{className:"text-gray-500 mt-3 font-bold",children:"s/.75.00"}),Object(c.jsxs)("div",{className:"mt-2",children:[Object(c.jsx)("label",{className:"text-gray-700 text-sm",for:"count",children:"Cantidad"}),Object(c.jsxs)("div",{className:"flex items-center mt-1",children:[Object(c.jsx)("button",{onClick:function(){return o(l+1)},className:"text-gray-500 focus:outline-none focus:text-gray-600",children:Object(c.jsx)("svg",{className:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(c.jsx)("span",{className:"text-gray-700 text-lg mx-2",children:l}),Object(c.jsx)("button",{onClick:function(){return o(l-1)},className:"text-gray-500 focus:outline-none focus:text-gray-600",children:Object(c.jsx)("svg",{className:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})]}),Object(c.jsxs)("div",{className:"mt-3",children:[Object(c.jsx)("label",{className:"text-gray-700 text-sm",for:"count",children:"Tallas disponibles: "}),Object(c.jsx)("i",{className:"cursor-pointer fas fa-sort-down ml-1"})]}),Object(c.jsx)("div",{className:"flex items-center mt-6",children:Object(c.jsx)("button",{className:"px-8 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-700 focus:outline-none focus:bg-indigo-500",children:"Agregar al carrito"})})]})]})})})})},y="data:image/png;base64,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",E=s.p+"static/media/shoppincart.905e6a76.png",z=function(e){var t=e.isShopping,s=e.toggleShopButton;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"hidden absolute inset-0 z-40 opacity-25 bg-black"}),Object(c.jsxs)("div",{className:"transition duration-700 z-50 w-auto inset-0 absolute bg-white  my-12   \n        ".concat(t?"transform translate-x-0":"transform translate-x-full"),children:[Object(c.jsx)("button",{onClick:s,children:Object(c.jsx)("svg",{className:"h-6 w-6 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:t&&Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"})})}),Object(c.jsx)("h2",{className:"text-center text-2xl font-bold",children:"El carrito est\xe1 vac\xedo"}),Object(c.jsx)("img",{className:"w-40 my-32 mx-auto",src:E,alt:"carrito"})]})]})},U=function(e){var t=e.isOpen,s=e.setIsOpen,a=e.handleClick,r=Object(l.f)();return Object(c.jsx)("div",{className:"transition duration-700 z-40 w-auto inset-0 absolute bg-red-200 my-12 bg-opacity-95\n        ".concat(t?"transform translate-x-0":"transform -translate-x-full"),children:Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:a,children:Object(c.jsx)("svg",{className:"h-6 w-6 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:t&&Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"})})}),Object(c.jsxs)("div",{className:"flex flex-col md:flex-row ",children:[Object(c.jsx)("button",{onClick:function(){r.push("/"),s(!1)},className:" hover:text-white p-1 block  md:mx-8 mb-2",children:"Incio"}),Object(c.jsx)("button",{onClick:function(){r.push("/catalogue",{product:"dress"}),s(!1)},className:"block p-1  mb-2 md:mx-8 hover:text-white",children:"Vestidos"}),Object(c.jsx)("button",{onClick:function(){r.push("/catalogue",{product:"top"}),s(!1)},className:"hover:text p-1 -white block  mb-2 md:mx-8",children:"Tops"}),Object(c.jsx)("button",{onClick:function(){return s(!1)},className:"p-1  hover:text-white block  mb-2 md:mx-8",children:"Palazos"}),Object(c.jsx)("button",{onClick:function(){return s(!1)},className:"p-1 hover:text-white block  mb-2 md:mx-8",children:"Enterizos"})]})]})})},B=function(){var e=Object(l.f)();return Object(c.jsxs)("div",{className:"hidden lg:flex lg:flex-row justify-center",children:[Object(c.jsx)("button",{onClick:function(){return e.push("/")},className:" hover:text-white hover:bg-red-300 rounded-xl p-2 block  md:mx-8 mb-2",children:"Incio"}),Object(c.jsx)("button",{onClick:function(){return e.push("/catalogue",{product:"dress"})},className:"block p-2  mb-2 md:mx-8 hover:text-white hover:bg-red-300 rounded-xl",children:"Vestidos"}),Object(c.jsx)("button",{onClick:function(){return e.push("/catalogue",{product:"top"})},className:"hover:text-white hover:bg-red-300 rounded-xl p-2 block  mb-2 md:mx-8",children:"Tops"}),Object(c.jsx)("button",{className:"p-2  hover:text-white hover:bg-red-300 rounded-xl block  mb-2 md:mx-8",children:"Palazos"}),Object(c.jsx)("button",{className:"p-2 hover:text-white hover:bg-red-300 rounded-xl block  mb-2 md:mx-8",children:"Enterizos"})]})},I=function(){var e=Object(l.f)(),t=Object(a.useState)(!1),s=Object(j.a)(t,2),r=s[0],n=s[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),d=o[0],m=o[1],u=function(){n(!r)},b=function(){m(!d)};return Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("div",{className:" flex justify-end  bg-red-200  items-center  mx-auto",children:[Object(c.jsx)("a",{className:"",href:"/#",children:Object(c.jsx)("i",{className:"fab fa-instagram fa-2x  text-white mr-1"})}),Object(c.jsx)("a",{className:"mr-2",href:"/#",children:Object(c.jsx)("i",{className:"fab fa-facebook-square fa-2x  text-white mr-10"})}),Object(c.jsxs)("button",{className:" mr-16 rounded-lg",children:[Object(c.jsx)("i",{className:"far fa-user-circle fa-2x mr-1  py-2  text-white"}),Object(c.jsx)("span",{className:"text-gray-500 font-bold ml-2",children:"Entrar"})]})]}),Object(c.jsxs)("div",{className:"flex  items-center",children:[Object(c.jsx)("button",{type:"button",className:"lg:hidden",onClick:u,children:Object(c.jsx)("svg",{className:"h-6 w-6 fill-current z-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:!r&&Object(c.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})}),Object(c.jsx)(z,{isShopping:d,toggleShopButton:b}),Object(c.jsx)("img",{onClick:function(){return e.push("/")},src:y,className:"w-40 mx-auto mt-2 cursor-pointer",alt:"logo kriska"}),Object(c.jsxs)("div",{className:"relative w-auto z-100",children:[Object(c.jsx)("button",{onClick:b,type:"button",className:"transition duration-500 ease-in-out cursor-pointer transform hover:scale-125 text-red-400 mr-3 overflow-hidden border-0 rounded-xl hover:bg-red-200 hover:text-white border-red-500 w-10 p-2",children:Object(c.jsx)("svg",{viewBox:"-35 0 512 512.00102",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"})})}),Object(c.jsx)("div",{className:"hidden justify-center items-center absolute rounded-full w-6 h-6 text-md   bg-red-300 text-gray-100 border-black border-2 top-0 right-0",children:"20"})]})]}),Object(c.jsx)(U,{isOpen:r,setIsOpen:n,handleClick:u}),Object(c.jsx)(B,{})]})},T=(s(61),s(62),function(e){var t=e.name,s=e.image,a=e.price,r=Object(l.f)();return Object(c.jsx)("div",{className:"p-2 w-3/4 mx-auto lg:mx-10  lg:w-52",children:Object(c.jsxs)("div",{className:"rounded-md shadow-md",children:[Object(c.jsx)("div",{onClick:function(){return r.push("/product/123")},className:"cursor-pointer h-72 w-full bg-cover",style:{backgroundImage:"url(".concat(s,")")}}),Object(c.jsxs)("div",{className:"px-5 py-3",children:[Object(c.jsx)("h3",{className:"text-gray-700 uppercase",children:t}),Object(c.jsxs)("span",{className:"text-gray-500 mt-2",children:["S/.",a]})]})]})})}),D={dress:[{id_:1,name:"Vestido Fergie",category:"Dress",image:"https://www.lara.pe/wp-content/uploads/2020/09/24266b7a-a1bf-41e0-ae45-55955fc18e47-600x537.jpg",price:"70",size:["s","m"],description:"Producto especial para fiestas"}],top:[{id_:2,name:"top Fergie",category:"Top",image:"https://www.lara.pe/wp-content/uploads/2020/12/6R7A9627-copia-1-scaled.jpg",price:"70",size:["s","m"],description:"Producto especial para fiestas"}]},S=function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://kriska-rest.herokuapp.com/category");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e,t=Object(a.useState)([]),s=Object(j.a)(t,2),r=s[0],n=s[1],i=Object(a.useState)([]),o=Object(j.a)(i,2),u=o[0],b=o[1],x=Object(l.g)(),h=function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,b(t.data.category);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(u),console.log(u.map((function(e){return e}))),Object(a.useEffect)((function(){var e,t;h(),"dress"===(null===(e=x.state)||void 0===e?void 0:e.product)&&n(D.dress),"top"===(null===(t=x.state)||void 0===t?void 0:t.product)&&n(D.top)}),[null===(e=x.state)||void 0===e?void 0:e.product]),Object(c.jsxs)("div",{className:"lg:flex",children:[Object(c.jsxs)("div",{className:"p-3 flex md:block justify-center",children:[Object(c.jsx)("input",{type:"search",className:"mx-4 p-1 px-2 border border-gray-400 rounded-md w-1/2  lg:w-3/4",placeHolder:"search"}),Object(c.jsxs)("ol",{className:"hidden lg:block w-32",children:[Object(c.jsx)("h3",{className:"my-7 font-bold uppercase mx-2 text-center",children:"Cat\xe1logo de productos"}),Object(c.jsx)("li",{className:"grid my-5",children:u.map((function(e){var t=e.name,s=e._id;return Object(c.jsx)("button",{className:"hover:text-white transition duration-500 ease-in-out font-bold mb-5 hover:bg-red-200",onClick:function(){return n(D.dress)},children:t},s)}))})]})]}),Object(c.jsxs)("div",{className:"p-3",children:[Object(c.jsx)("div",{className:"flex md:block justify-center w-screen",children:Object(c.jsx)("input",{className:"p-1  px-2 mb-2 border rounded-sm border-black w-3/4 md:w-44",placeHolder:"Orden por defecto",type:"text"})}),Object(c.jsx)("div",{children:r.map((function(e){var t=e.name,s=e.price,a=e.category,r=e.image;return Object(c.jsx)(T,{name:t,price:s,category:a,image:r})}))})]})]})},Q=function(){return Object(c.jsxs)("div",{className:"container mt-52 p-5 text-white bg-black",children:[Object(c.jsxs)("div",{className:"mx-10  block md:flex md:justify-center md:items-end",children:[Object(c.jsxs)("div",{className:"w-56 mb-5 md:mr-32",children:[Object(c.jsx)("img",{className:"w-48  md:m-auto ",src:y,alt:"logo"}),Object(c.jsx)("p",{className:"text-justify",children:"La  mujer de hoy cada vez es m\xe1s simple y directa. Es por ello que se Kriska ofrece una linea juvenil, \xe1gil y moderna, ofreciendo productos de alta gama con identidad propia."})]}),Object(c.jsx)("div",{className:"md:mr-32 mb-5",children:Object(c.jsx)("ol",{children:Object(c.jsxs)("li",{className:"grid",children:[Object(c.jsxs)("a",{className:"hover:text-yellow-400 ease-in duration-100",href:"/#",children:[Object(c.jsx)("i",{className:"fas fa-arrow-right mr-4"}),"Contactanos"]}),Object(c.jsxs)("a",{className:"hover:text-yellow-400 ease-in duration-100",href:"/#",children:[Object(c.jsx)("i",{className:"fas fa-arrow-right mr-4"}),"Registrate"]}),Object(c.jsxs)("a",{className:"hover:text-yellow-400 ease-in duration-100",href:"/#",children:[Object(c.jsx)("i",{className:"fas fa-arrow-right mr-4"}),"Ayuda"]}),Object(c.jsxs)("a",{className:"hover:text-yellow-400 ease-in duration-100",href:"/#",children:[Object(c.jsx)("i",{className:"fas fa-arrow-right mr-4"}),"Cambios y devoluciones"]}),Object(c.jsxs)("a",{className:"hover:text-yellow-400 ease-in duration-100",href:"/#",children:[Object(c.jsx)("i",{className:"fas fa-arrow-right mr-4"}),"Terminos y condiciones"]})]})})}),Object(c.jsxs)("div",{className:"grid  ",children:[Object(c.jsx)("h3",{className:"font-bold",children:"D\xe9janos tu Correo:"}),Object(c.jsx)("p",{children:"Recibiras promociones incre\xedbles "}),Object(c.jsx)("input",{className:"h-10 border-black border-2",placeholder:"Correo:"}),Object(c.jsx)("button",{className:"bg-gray-900 py-1 hover:bg-gray-500  ease-in duration-100 md:mx-auto text-white mt-2 w-40",type:"submit",children:"Enviar"})]})]}),Object(c.jsxs)("p",{className:"text-gray-400 text-center mt-5",children:["\xa9 2021 KRISKA | Powered by  ",Object(c.jsx)("a",{className:"hover:underline hover:text-yellow-400",href:"/#",children:"Maphack.pe"})]})]})};var q=function(){return Object(c.jsx)("div",{className:"md:container md:mx-auto",children:Object(c.jsx)("div",{className:"relative overflow-x-hidden",children:Object(c.jsxs)(i.a,{basename:"/krista-ecomerce",children:[Object(c.jsx)(I,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(w,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/catalogue",children:Object(c.jsx)(M,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/product/:id",children:Object(c.jsx)(k,{})})]}),Object(c.jsx)(Q,{})]})})})};n.a.render(Object(c.jsx)(q,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d335737c.chunk.js.map