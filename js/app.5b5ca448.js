(function(e){function t(t){for(var n,i,o=t[0],a=t[1],u=t[2],s=0,d=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&d.push(l[i][0]),l[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==l[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},l={app:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/uclist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var p=a;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0a26":function(e){e.exports=JSON.parse('[{"uctrl":"Arduino Uno","img":"ard_uno.jpg","chip":"ATmega328P","type":8,"clk":"16","io":14,"pwm":6,"ain":6,"flsh":32,"bootl":0.5,"sram":2,"eeprom":1,"volt":"5V","biled":"D13","usb":"Type B"},{"uctrl":"Arduino Pro Micro","img":"ard_prou.jpg","chip":"ATmega32U4","type":8,"clk":"16","io":12,"pwm":5,"ain":9,"flsh":32,"bootl":"??","sram":"??","eeprom":"??","volt":"5V","biled":"??","usb":"Micro B"},{"uctrl":"Arduino Nano","img":"ard_nano.png","chip":"ATmega328","type":8,"clk":"16","io":22,"pwm":6,"ain":8,"flsh":32,"bootl":2,"sram":2,"eeprom":1,"volt":"5V","biled":"N.A.","usb":"Mini B"},{"uctrl":"ATtiny85","img":"ard_tiny85.jpg","chip":"ATtiny85","type":8,"clk":"1","io":6,"pwm":4,"ain":3,"flsh":8,"bootl":"N.A.","sram":0.512,"eeprom":0.512,"volt":"5V","biled":"N.A.","usb":"N.A."},{"uctrl":"Digispark","img":"ard_digispark.jpg","chip":"ATtiny85","type":8,"clk":"16","io":6,"pwm":3,"ain":8,"flsh":8,"bootl":2,"sram":0.512,"eeprom":0.512,"volt":"5V","biled":"N.A.","usb":"Type A (Male)"},{"uctrl":"Digispark Pro","img":"digispark_pro.png","chip":"ATtiny167","type":8,"clk":"16","io":14,"pwm":3,"ain":9,"flsh":16,"bootl":1.5,"sram":0.512,"eeprom":0.512,"volt":"5V","biled":"D1","usb":"Micro B"},{"uctrl":"Arduino Mega 2560","img":"ard_mega.jpg","chip":"ATmega2560","type":8,"clk":"16","io":54,"pwm":15,"ain":16,"flsh":256,"bootl":8,"sram":8,"eeprom":4,"volt":"5V","biled":"N.A.","usb":"Type B"},{"uctrl":"Arduino Mega ADK","img":"ard_mega_adk.jpg","chip":"ATmega2560","type":8,"clk":"16","io":54,"pwm":15,"ain":16,"flsh":256,"bootl":8,"sram":8,"eeprom":4,"volt":"5V","biled":"N.A.","usb":"Type B"},{"uctrl":"Black Pill","img":"blackpill.jpg","chip":"STM32F411CEU6 (ARM Cortex-M4)","type":32,"clk":"100","io":32,"pwm":25,"ain":10,"flsh":512,"bootl":"N.A.","sram":128,"eeprom":"??","volt":"5V","biled":"N.A.","usb":"Type C"}]')},1771:function(e,t,r){var n={"./ard_digispark.jpg":"a7ae","./ard_mega.jpg":"54ad","./ard_mega_adk.jpg":"d304","./ard_nano.png":"f52c","./ard_prou.jpg":"983c","./ard_tiny85.jpg":"37af","./ard_uno.jpg":"2174","./blackpill.jpg":"9d18","./digispark_pro.png":"8c20"};function l(e){var t=c(e);return r(t)}function c(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=c,e.exports=l,l.id="1771"},2174:function(e,t,r){e.exports=r.p+"img/ard_uno.c6e58e4d.jpg"},"28ac":function(e){e.exports=JSON.parse('[{"val":"Micro-controller"},{"val":"Clock freq (MHz)"},{"val":"Digital IO"},{"val":"PWM"},{"val":"Analog Input"},{"val":"Flash Memory [Bootloader] (KB)"},{"val":"SRAM (KB)"},{"val":"EEPROM (KB)"},{"val":"Operating Voltage"},{"val":"Built-in LED Pin"},{"val":"USB Interface"}]')},"37af":function(e,t,r){e.exports=r.p+"img/ard_tiny85.38ad6440.jpg"},"54ad":function(e,t,r){e.exports=r.p+"img/ard_mega.31fe7a57.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),l=Object(n["e"])("h1",null,"Microcontroller List",-1);function c(e,t,r,c,i,o){var a=Object(n["h"])("utable");return Object(n["f"])(),Object(n["c"])(n["a"],null,[l,Object(n["e"])(a)],64)}r("ac1f"),r("841c");var i={style:{display:"flex"}},o={class:"search-wrapper"},a={class:"search-filter"},u=Object(n["e"])("label",null,"Sort by (Descending): ",-1),p=Object(n["e"])("option",{value:"",selected:"",disabled:""},"Choose",-1),s=Object(n["e"])("br",null,null,-1),d={id:"uctrl"},b={class:"item-entry"},f={id:"itext"},j={key:0,style:{float:"left",position:"relative"}},g={id:"ititle"},O=Object(n["e"])("br",null,null,-1),m=Object(n["e"])("br",null,null,-1);function v(e,t,r,l,c,v){return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])("div",i,[Object(n["e"])("div",o,[Object(n["l"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.search=e}),placeholder:"Search controller.."},null,512),[[n["k"],c.search]])]),Object(n["e"])("div",a,[u,Object(n["l"])(Object(n["e"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.sfilter=e}),class:"form-control",onChange:t[3]||(t[3]=function(e){return v.changeFilterTitle(e)})},[p,(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(c.jHead,(function(e,t){return Object(n["f"])(),Object(n["c"])("option",{value:t,key:t},Object(n["i"])(e.val),9,["value"])})),128))],544),[[n["j"],c.sfilter]])])]),s,Object(n["e"])("div",null,[Object(n["e"])("table",d,[Object(n["e"])("tr",null,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(c.jHead,(function(e,t){return Object(n["f"])(),Object(n["c"])("th",{key:t},Object(n["i"])(e.val),1)})),128))]),(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(v.filteredList,(function(e,t){return Object(n["f"])(),Object(n["c"])("tr",{key:t},[Object(n["e"])("td",b,[Object(n["e"])("div",f,[""!==e.img?(Object(n["f"])(),Object(n["c"])("div",j,[Object(n["e"])("img",{src:v.getPath(e.img),alt:""},null,8,["src"])])):Object(n["d"])("",!0),Object(n["e"])("div",g,[Object(n["e"])("h4",null,Object(n["i"])(e.uctrl),1),Object(n["e"])("span",null,Object(n["i"])(e.chip),1),O,Object(n["e"])("span",null,"["+Object(n["i"])(e.type)+" Bit]",1)])])]),Object(n["e"])("td",null,Object(n["i"])(e.clk),1),Object(n["e"])("td",null,Object(n["i"])(e.io),1),Object(n["e"])("td",null,Object(n["i"])(e.pwm),1),Object(n["e"])("td",null,Object(n["i"])(e.ain),1),Object(n["e"])("td",null,Object(n["i"])(e.flsh)+" ["+Object(n["i"])(e.bootl)+"]",1),Object(n["e"])("td",null,Object(n["i"])(e.sram),1),Object(n["e"])("td",null,Object(n["i"])(e.eeprom),1),Object(n["e"])("td",null,Object(n["i"])(e.volt),1),Object(n["e"])("td",null,Object(n["i"])(e.biled),1),Object(n["e"])("td",null,Object(n["i"])(e.usb),1)])})),128))])]),m],64)}r("4de4"),r("caad"),r("2532");var h=r("0a26"),y=r("28ac"),k={components:{},data:function(){return{search:"",jDat:h,jHead:y,selectedFilter:null,sfilter:0,selectedFilterIndex:1}},methods:{getPath:function(e){return r("1771")("./"+e)},changeFilterTitle:function(e){this.selectedFilter=e.target.options[e.target.options.selectedIndex].text,this.selectedFilterIndex=e.target.options.selectedIndex}},computed:{filteredList:function(){var e=this,t=this.jDat.filter((function(t){return t.uctrl.toLowerCase().includes(e.search.toLowerCase())}));return t=t.sort((function(t,r){switch(e.selectedFilterIndex){case 2:return r.clk-t.clk;case 3:return r.io-t.io;case 4:return r.pwm-t.pwm;case 5:return r.ain-t.ain;case 6:return r.flsh-t.flsh;case 7:var n=t.sram,l=r.sram;return"string"===typeof n&&(n=0),"string"===typeof l&&(l=0),l-n;case 8:var c=t.eeprom,i=r.eeprom;return"string"===typeof c&&(c=0),"string"===typeof i&&(i=0),i-c;case 9:var o=t.volt,a=r.volt;return"string"===typeof o&&(o=0),"string"===typeof a&&(a=0),a-o;case 10:var u=t.biled.toLowerCase(),p=r.biled.toLowerCase();return p>u?-1:1;case 11:var s=t.usb.toLowerCase(),d=r.usb.toLowerCase();return d<s?-1:1;default:return r.uctrl-t.uctrl}})),t}}};k.render=v;var _=k,w={name:"App",components:{utable:_},data:function(){return{}}};r("5d8d");w.render=c;var A=w;Object(n["b"])(A).mount("#app")},"5d8d":function(e,t,r){"use strict";r("e151")},"8c20":function(e,t,r){e.exports=r.p+"img/digispark_pro.1d318bd0.png"},"983c":function(e,t,r){e.exports=r.p+"img/ard_prou.d91a5f2f.jpg"},"9d18":function(e,t,r){e.exports=r.p+"img/blackpill.83f76488.jpg"},a7ae:function(e,t,r){e.exports=r.p+"img/ard_digispark.b87e79c0.jpg"},d304:function(e,t,r){e.exports=r.p+"img/ard_mega_adk.17bcc741.jpg"},e151:function(e,t,r){},f52c:function(e,t,r){e.exports=r.p+"img/ard_nano.ee6a1a6e.png"}});
//# sourceMappingURL=app.5b5ca448.js.map