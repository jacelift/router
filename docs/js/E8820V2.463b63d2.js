(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["E8820V2"],{"0b7a":function(e,t,a){"use strict";a("1408")},1408:function(e,t,a){},"8e40":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"item"},[a("input",{ref:"upload",attrs:{type:"file",name:"请上传原版编程器固件"}})]),a("div",{staticClass:"item"},[a("button",{on:{click:e.calc}},[e._v("生成EEPROM")])]),a("div",{staticClass:"item"},[e._v(" 提取到的2.4G MAC为:"+e._s(e.mac2g)+" ,5G MAC为:"+e._s(e.mac5g)+" ")]),e._m(0)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",{staticClass:"item"},[a("li",[e._v(" 点击 选择文件 按钮，选择E8820V2的原版编程器固件上传 ")]),a("li",[e._v(" 点击 生成EEPROM 按钮，自动生成并下载eeprom.bin ")]),a("li",[e._v(" 请校验提取的MAC地址是否和路由器自身MAC一致 ")]),a("li",[e._v("不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作")])])}],n=(a("907a"),a("219c"),{name:"E8820V2",components:{},data(){return{mac2g:"",mac5g:""}},methods:{calc(){let e=this.$refs.upload.files[0];if(!e)return void alert("请上传原版编程器固件!");let t=new FileReader;t.onloadend=()=>{let e=t.result,a=new Uint8Array(e.slice(131092,131098)),r=new Uint8Array(e.slice(131108,131114)),i=new Uint8Array(e.slice(192512,192816)),n=new Uint8Array(e.slice(194560,194864)),c=new Uint8Array(65536).fill(255);i.forEach((e,t)=>{c[t]=e}),n.forEach((e,t)=>{c[32768+t]=e}),a.forEach((e,t)=>{this.mac2g+=Number(e).toString(16).padStart(2,"0"),c[57344+t]=e}),r.forEach((e,t)=>{this.mac5g+=Number(e).toString(16).padStart(2,"0"),c[57350+t]=e}),["C0","81","82","C3","04","45","46","07","08","09"].forEach((e,t)=>{c[33248+t]=Number("0x"+e)}),this.saveFile(c.buffer)},t.readAsArrayBuffer(e)},saveFile(e){let t=new Blob([e],{type:"application/octet-stream"}),a=document.createElement("a");a.setAttribute("download","ZTE-E8820V2-eeprom.bin"),a.target="_blank",a.href=URL.createObjectURL(t),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href)}}}),c=n,l=(a("0b7a"),a("2877")),s=Object(l["a"])(c,r,i,!1,null,"75284124",null);t["default"]=s.exports}}]);