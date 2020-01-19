(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77e54b71"],{"77be":function(e,t,r){"use strict";var a=r("9df5"),o=r.n(a);o.a},"9df5":function(e,t,r){},df43:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"py-5"},[r("h2",[e._v("創建新的產品吧")]),r("AdminProductCreate",{on:{"after-create-product":e.afterCreateProduct}}),r("br"),r("a",{attrs:{href:"javascript:history.back()"}},[e._v("回上一頁")])],1)},o=[],l=(r("d3b7"),r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{attrs:{"bg-variant":"light"}},[r("b-form",{staticClass:"create-product-card",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.createNewProduct(t)}}},[r("b-form-group",{attrs:{"label-cols-sm":"3",label:"名稱 :","label-align-sm":"right","label-for":"name"}},[r("b-form-input",{attrs:{id:"name",state:e.form.name.length>0,type:"text",name:"name",placeholder:"輸入產品名稱",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"描述 :","label-align-sm":"right","label-for":"description"}},[r("b-form-textarea",{attrs:{id:"description",state:e.form.description.length>0,type:"text",rows:"3","max-rows":"6",name:"description",placeholder:"輸入產品描述",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"成本 :","label-align-sm":"right","label-for":"cost"}},[r("b-form-input",{attrs:{id:"cost",state:e.form.cost>0,type:"number",min:"1",name:"cost",required:""},model:{value:e.form.cost,callback:function(t){e.$set(e.form,"cost",t)},expression:"form.cost"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"售價 :","label-align-sm":"right","label-for":"price"}},[r("b-form-input",{attrs:{id:"price",state:e.form.price>0,type:"number",min:"1",name:"price",required:""},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"高度 :","label-align-sm":"right","label-for":"height"}},[r("b-form-input",{attrs:{id:"height",state:e.form.height>0,type:"number",min:"1",name:"height",required:""},model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"寬度 :","label-align-sm":"right","label-for":"width"}},[r("b-form-input",{attrs:{id:"width",state:e.form.width>0,type:"number",min:"1",name:"width",required:""},model:{value:e.form.width,callback:function(t){e.$set(e.form,"width",t)},expression:"form.width"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"長度 :","label-align-sm":"right","label-for":"length"}},[r("b-form-input",{attrs:{id:"length",state:e.form.length>0,type:"number",min:"1",name:"length",required:""},model:{value:e.form.length,callback:function(t){e.$set(e.form,"length",t)},expression:"form.length"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"產品重量 :","label-align-sm":"right","label-for":"weight"}},[r("b-form-input",{attrs:{id:"weight",state:e.form.weight>0,type:"number",min:"1",name:"weight",required:""},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"產品原料 :","label-align-sm":"right","label-for":"material"}},[r("b-form-input",{attrs:{id:"material",state:e.form.material.length>0,type:"text",name:"material",placeholder:"輸入產品原料",required:""},model:{value:e.form.material,callback:function(t){e.$set(e.form,"material",t)},expression:"form.material"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"分類 :","label-align-sm":"right","label-for":"CategoryId"}},[r("b-form-select",{attrs:{id:"CategoryId",placeholder:"Select Category",name:"CategoryId",required:""},model:{value:e.form.CategoryId,callback:function(t){e.$set(e.form,"CategoryId",t)},expression:"form.CategoryId"}},[r("option",{attrs:{value:"1",name:"沙發"}},[e._v("沙發")]),r("option",{attrs:{value:"2",name:"床具"}},[e._v("床具")]),r("option",{attrs:{value:"3",name:"桌子"}},[e._v("桌子")]),r("option",{attrs:{value:"4",name:"長桌"}},[e._v("長桌")]),r("option",{attrs:{value:"5",name:"櫃子"}},[e._v("櫃子")])])],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"庫存 :","label-align-sm":"right","label-for":"quantity"}},[r("b-form-input",{attrs:{id:"quantity",state:e.form.quantity>0,type:"number",min:"1",name:"quantity",required:""},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"顏色 :","label-align-sm":"right","label-for":"colorName"}},[r("b-form-select",{attrs:{id:"colorName",placeholder:"輸入產品顏色",name:"colorName",required:""},model:{value:e.form.colorName,callback:function(t){e.$set(e.form,"colorName",t)},expression:"form.colorName"}},[r("option",{attrs:{value:"black"}},[e._v("黑色")]),r("option",{attrs:{value:"blue"}},[e._v("藍色")]),r("option",{attrs:{value:"white"}},[e._v("白色")]),r("option",{attrs:{value:"yellow"}},[e._v("黃色")])])],1),r("b-form-group",{attrs:{"label-cols-sm":"3",label:"上傳照片 :","label-align-sm":"right","label-for":"url"}},[e.form.url?r("b-img-lazy",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.form.url,width:"200",height:"200"}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"url",type:"file",name:"url",accept:"image/*"},on:{change:e.handleFileChange}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)],1)}),i=[],n=(r("a4d3"),r("e01a"),r("b0c0"),r("3ca3"),r("ddb0"),r("2b3d"),r("2fa3")),s={data:function(){return{form:{name:"",description:"",cost:0,price:0,height:0,width:0,length:0,weight:0,material:"",CategoryId:"",quantity:0,colorName:"",url:""}}},methods:{handleFileChange:function(e){var t=e.target.files;if(t.length){var r=window.URL.createObjectURL(t[0]);this.form.url=r}},createNewProduct:function(e){var t=e.target,r=new FormData(t);return this.form.cost<=0&&this.form.price<=0&&this.form.height<=0&&this.form.width<=0&&this.form.length<=0&&this.form.weight<=0&&this.form.quantity<=0?n["a"].fire({icon:"warning",title:"Wrong Input detected"}):this.form.name.length<=0&&this.form.description.length<=0&&this.form.material.length<=0&&this.form.CategoryId.length<=0&&this.form.colorName.length<=0&&this.form.url.length<=0?n["a"].fire({icon:"warning",title:"Wrong Input detected"}):void this.$emit("after-create-product",r)}}},m=s,c=(r("77be"),r("2877")),f=Object(c["a"])(m,l,i,!1,null,"7e5606d9",null),u=f.exports,b=r("365c"),d=new b["a"],h={components:{AdminProductCreate:u},methods:{afterCreateProduct:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(d.postNewProduct(e));case 2:if(t=r.sent,200!==t.status){r.next=5;break}return r.abrupt("return",n["a"].fire({icon:"success",title:"".concat(t.data.message)}));case 5:n["a"].fire({icon:"warning",title:"".concat(t.data.message)});case 6:case"end":return r.stop()}}))}}},g=h,p=Object(c["a"])(g,a,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-77e54b71.31fa1582.js.map