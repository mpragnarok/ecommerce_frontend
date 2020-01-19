(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2400c42"],{"94e1":function(t,e,r){"use strict";var a=r("e1f5"),i=r.n(a);i.a},b789:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"py-5 mx-5"},[r("v-container",[r("UserTabs"),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",lg:"12"}},[r("v-card",{staticClass:"cart py-5 text--darken-3 cyan--text"},[r("v-col",{staticClass:"my-4",attrs:{cols:"12",lg:"12"}},[r("span",{staticClass:"cart-title display-1"},[t._v("|Shopping cart|")]),t.totalPrice<1?r("v-card-title",{staticClass:"text-muted mb-5 headline"},[t._v("No Data")]):t._e()],1),r("v-row",{staticClass:"ml-1",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",lg:"10"}},[r("v-list",{attrs:{flat:""}},[r("v-list-item-group",t._l(t.cart,(function(e){return r("v-list-item",{key:e.id},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",lg:"3"}},[r("router-link",{attrs:{to:{name:"furnituresItem",params:{id:e.Product.id}}}},[r("v-img",{staticClass:"cart-content",attrs:{"aspect-ratio":16/9,src:e.Image.url,"min-width":"210","min-height":"250"}})],1)],1),r("v-col",{staticClass:"cart-content",attrs:{cols:"12",lg:"3"}},[r("router-link",{attrs:{to:{name:"furnituresItem",params:{id:e.Product.id}}}},[r("v-list-item-title",{staticClass:"mb-1"},[t._v(t._s(e.Product.name))])],1),r("p",{staticClass:"caption"},[t._v("Size: "+t._s(e.Product.length)+" x "+t._s(e.Product.width)+" x "+t._s(e.Product.height)+"(cm)")]),r("p",{staticClass:"caption"},[t._v("Weight: "+t._s(e.Product.weight)+"(kg)")]),r("p",{staticClass:"caption"},[t._v("Material: "+t._s(e.Product.material))]),r("v-list-item-subtitle",[r("div",{staticClass:"product_color_item mb-1",class:t._f("convertClass")(e.Color.name)})])],1),r("v-col",{staticClass:"cart-content",attrs:{cols:"12",lg:"3"}},[r("v-btn",{attrs:{"x-small":""},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.subCartItem(e.id)}}},[t._v("-")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"item.quantity",modifiers:{number:!0}}],staticClass:"form-quantity-input text-center",attrs:{id:"quantity",type:"text",name:"quantity",size:"2",disabled:""},domProps:{value:e.quantity},on:{input:function(r){r.target.composing||t.$set(e,"quantity",t._n(r.target.value))},blur:function(e){return t.$forceUpdate()}}}),r("v-btn",{attrs:{"x-small":""},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.addCartItem(e.id)}}},[t._v("+")])],1),r("v-col",{staticClass:"cart-content",attrs:{cols:"12",lg:"2"}},[r("v-card-text",{staticClass:"item-price headline"},[t._v("$ "+t._s(e.price))]),r("v-list-item-action",[r("v-icon",{on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteCartItem(e.id)}}},[t._v("mdi-trash-can")])],1)],1)],1)],1)})),1)],1)],1)],1),r("div",{staticClass:"my-4 bottom-divider"},[r("span",{staticClass:"cart-title display-1",staticStyle:{"padding-right":"1em"}},[t._v("Total $"+t._s(t.totalPrice))])]),r("v-card-actions",[r("v-spacer"),r("v-row",{attrs:{justify:"end"}},[t.currentUser?r("v-btn",{staticClass:"mt-3 red lighten-3",staticStyle:{padding:"0 1em","margin-right":"3em"},attrs:{raised:"",color:"error",large:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createOrder(e)}}},[t._v("Complete Payment")]):r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"mt-3 red lighten-3 dialog-btn",staticStyle:{padding:"0 1em","margin-right":"3em"},attrs:{raised:"",color:"error",large:""}},a),[t._v("Complete Payment")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-form",{ref:"form"},[r("v-card-title",[r("span",{staticClass:"headline text--darken-3 cyan--text"},[t._v("Shipping Info")])]),r("v-card-text",[r("v-text-field",{ref:"tel",attrs:{rules:[function(){return!!t.tel||"This field is required"},function(){return/\d/g.test(t.tel)||"Must fill in phone number"},function(){return t.tel.length<10||"Phone must be 10 digits"}],"error-messages":t.errorMessages,label:"Phone Number",placeholder:"0912345678",required:""},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),r("v-text-field",{ref:"initialAddress",attrs:{rules:[function(){return!!t.initialAddress||"This field is required"},function(){return t.initialAddress.length<=40||"Address must be less than 40 characters"}],label:"Address Line",placeholder:"Snowy Rock Pl",counter:"40",required:""},model:{value:t.initialAddress,callback:function(e){t.initialAddress=e},expression:"initialAddress"}}),r("v-text-field",{ref:"district",attrs:{rules:[function(){return!!t.district||"This field is required"}],label:"District / Township",required:"",placeholder:"士林區"},model:{value:t.district,callback:function(e){t.district=e},expression:"district"}}),r("v-text-field",{ref:"zip",attrs:{rules:[function(){return!!t.zip||"This field is required"},function(){return t.zip.length<=3||"Zip must be less than 3 characters"}],label:"ZIP / Postal Code",required:"",placeholder:"168"},model:{value:t.zip,callback:function(e){t.zip=e},expression:"zip"}}),r("v-autocomplete",{ref:"county",attrs:{"search-input":t.county,rules:[function(){return!!t.county||"This field is required"}],items:t.counties,label:"County / City",placeholder:"Select...",required:""},on:{"update:searchInput":function(e){t.county=e},"update:search-input":function(e){t.county=e}}})],1),r("v-divider",{staticClass:"mt-12"}),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createOrder(e)}}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],s=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("5319"),r("159b"),r("96cf"),r("ade3")),n=r("71b7"),c=r("365c"),o=r("2fa3"),l=r("2708"),u=r("2f62");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=new c["a"],h={name:"Cart",mixins:[l["a"],l["b"]],components:{UserTabs:n["a"]},data:function(){return{cart:[],totalPrice:0,user:[],dialog:!1,counties:["臺北市","新北市","基隆市","桃園市","新竹縣","新竹市","苗栗縣","臺中市","南投縣","彰化縣","雲林縣","嘉義縣","嘉義市","臺南市","高雄市","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣"],errorMessages:"",tel:"",initialAddress:"",address:"",district:null,zip:null,county:null,formHasErrors:!1,CartId:null,discount:0}},computed:p({},Object(u["b"])(["currentUser","isAuthenticated"]),{beforeAttach:function(){return{tel:this.tel,initialAddress:this.initialAddress,district:this.district,zip:this.zip,county:this.county}},form:function(){return{tel:this.currentUser.tel?this.currentUser.tel.replace(/[^0-9]/gi,""):this.tel,UserId:this.currentUser.id,CartId:this.cart.length>0?this.cart[0].CartId:-1,address:this.currentUser.address?this.currentUser.address:this.zip+this.county+this.district+this.initialAddress}}}),created:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.fetchCart());case 2:case"end":return t.stop()}}),null,this)},methods:{fetchCart:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(f.getCart());case 3:t=e.sent,"success"===t.status&&(this.cart=t.cart,this.totalPrice=t.totalPrice),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),o["a"].fire({icon:"error",title:"Nothing in the cart"});case 10:case"end":return e.stop()}}),null,this,[[0,7]])},addCartItem:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(f.addCartItem(t));case 3:e=r.sent,"success"===e.status&&o["a"].fire({icon:"success",title:e.message}),this.fetchCart(),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),o["a"].fire({icon:"error",title:"Add cart item failed"});case 11:case"end":return r.stop()}}),null,this,[[0,8]])},subCartItem:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(f.subCartItem(t));case 3:e=r.sent,"success"===e.status&&o["a"].fire({icon:"success",title:e.message}),this.fetchCart(),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),o["a"].fire({icon:"error",title:"Substract cart item failed"});case 11:case"end":return r.stop()}}),null,this,[[0,8]])},deleteCartItem:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(f.deleteCartItem(t));case 3:e=r.sent,"success"===e.status&&o["a"].fire({icon:"success",title:e.message}),this.fetchCart(),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),o["a"].fire({icon:"error",title:"Add cart item failed"});case 11:case"end":return r.stop()}}),null,this,[[0,8]])},createOrderAPI:function(){var t,e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t=JSON.stringify(this.form),r.next=4,regeneratorRuntime.awrap(f.createOrder(t));case 4:e=r.sent,"success"===e.status?this.$router.push({name:"order",params:{userId:this.form.UserId}}):(this.$router.push({name:"cart"}),this.dialog=!1),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("createOrderAPI error",r.t0);case 11:case"end":return r.stop()}}),null,this,[[0,8]])},createOrder:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,0===this.cart.length&&(o["a"].fire({icon:"error",title:"Nothing in the cart"}),this.dialog=!1),!this.currentUser){e.next=7;break}return e.next=5,regeneratorRuntime.awrap(this.createOrderAPI());case 5:e.next=12;break;case 7:if(this.formHasErrors=!1,Object.keys(this.beforeAttach).forEach((function(e){t.beforeAttach[e]||(t.formHasErrors=!0),t.$refs[e].valid||(t.formHasErrors=!0),t.$refs[e].validate(!0)})),this.formHasErrors){e.next=12;break}return e.next=12,regeneratorRuntime.awrap(this.createOrderAPI());case 12:e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),o["a"].fire({icon:"error",title:"Submit order first before you create a new one"}),this.$router.push({name:"order",params:{userId:this.form.UserId}});case 18:case"end":return e.stop()}}),null,this,[[0,14]])}},watch:{cart:function(t){this.cart=t},totalPrice:function(t){this.totalPrice=t},tel:function(t){this.tel=t},initialAddress:function(t){this.initialAddress=t},district:function(t){this.district=t},zip:function(t){this.zip=t},county:function(t){this.county=t}}},m=h,v=(r("94e1"),r("2877")),g=r("6544"),b=r.n(g),y=r("7496"),x=r("c6a6"),C=r("8336"),w=r("b0afa"),P=r("99d9"),I=r("62ad"),_=r("a523"),k=r("169a"),O=r("ce7e"),A=r("4bd4"),V=r("132d"),j=r("adda3"),q=r("8860"),R=r("da13"),S=r("1800"),z=r("1baa"),U=r("5d23"),D=r("0fd9"),T=r("2fa4"),$=r("8654"),E=Object(v["a"])(m,a,i,!1,null,"1d576834",null);e["default"]=E.exports;b()(E,{VApp:y["a"],VAutocomplete:x["a"],VBtn:C["a"],VCard:w["a"],VCardActions:P["a"],VCardText:P["c"],VCardTitle:P["d"],VCol:I["a"],VContainer:_["a"],VDialog:k["a"],VDivider:O["a"],VForm:A["a"],VIcon:V["a"],VImg:j["a"],VList:q["a"],VListItem:R["a"],VListItemAction:S["a"],VListItemGroup:z["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"],VRow:D["a"],VSpacer:T["a"],VTextField:$["a"]})},e1f5:function(t,e,r){}}]);
//# sourceMappingURL=chunk-e2400c42.779e04f3.js.map