(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fd3dfa0"],{"026b":function(t,e,n){"use strict";var s=n("406c"),i=n.n(s);i.a},"031f":function(t,e,n){},1270:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input"},[n("div",{staticClass:"msg"},[t._v(t._s(t.msg))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext,expression:"inputtext"}],class:t.warning?"warn":"",attrs:{value:"",type:"text",placeholder:"请输入"+t.msg,maxlength:t.len},domProps:{value:t.inputtext},on:{blur:function(e){return e.preventDefault(),t.test(e)},input:function(e){e.target.composing||(t.inputtext=e.target.value)}}})])},i=[],a=(n("cadf"),n("551c"),n("097d"),{name:"Input",props:{msg:String,warning:!1,len:String},data:function(){return{inputtext:""}},methods:{test:function(){""==this.inputtext&&(this.warning=!0)}},watch:{inputtext:function(t){""!=t&&(this.warning=!1)}}}),r=a,u=(n("93c5"),n("2877")),c=Object(u["a"])(r,s,i,!1,null,"6d4493dd",null);c.options.__file="Input.vue";e["a"]=c.exports},"212e":function(t,e,n){},"25f6":function(t,e,n){"use strict";var s=n("bc93"),i=n.n(s);i.a},"335f":function(t,e,n){"use strict";var s=n("031f"),i=n.n(s);i.a},"406c":function(t,e,n){},"5e73":function(t,e,n){},"77e8":function(t,e,n){},"77f0":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"man"})},i=[],a=(n("026b"),n("2877")),r={},u=Object(a["a"])(r,s,i,!1,null,"a1c36b9e",null);u.options.__file="Man.vue";e["a"]=u.exports},"7b6b":function(t,e,n){"use strict";var s=n("db59"),i=n.n(s);i.a},"7f7f":function(t,e,n){var s=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in i||n("9e1e")&&s(i,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"8f16":function(t,e,n){"use strict";var s=n("212e"),i=n.n(s);i.a},"93c5":function(t,e,n){"use strict";var s=n("77e8"),i=n.n(s);i.a},bc93:function(t,e,n){},db59:function(t,e,n){},e6d1:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign_up"},[n("Man"),n("Form")],1)},i=[],a=n("77f0"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signform"},[n("form",[n("div",{staticClass:"forms"},[n("Input",{ref:"name",attrs:{msg:"姓名",len:"20"}}),n("Checkbox",{ref:"sex",attrs:{msg:"性别",left:"男",right:"女"}}),n("Input",{ref:"number",attrs:{msg:"学号",len:"11"}}),n("Dropdown",{ref:"college",attrs:{msg:"学院",list:["通信与信息工程学院","计算机科学与技术学院","自动化学院","先进制造工程学院","光电工程学院/重庆国际半导体学院","软件工程学院","生物信息学院","理学院","经济管理学院/现代邮政学院","传媒艺术学院","外国语学院","国际学院","网络空间安全与信息法学院","马克思主义学院","体育学院"]}}),n("Dropdown",{ref:"will1",attrs:{msg:"志愿1",list:["综合部","学习部","宣传部","权益提案部","生活服务部","文艺部","体育部","女生部"]}}),n("Dropdown",{ref:"will2",attrs:{msg:"志愿2",list:["综合部","学习部","宣传部","权益提案部","生活服务部","文艺部","体育部","女生部"]}}),n("Dropdown",{ref:"will3",attrs:{msg:"志愿3",list:["综合部","学习部","宣传部","权益提案部","生活服务部","文艺部","体育部","女生部"]}}),n("Checkbox",{ref:"adjust",attrs:{msg:"服从调剂",left:"是",right:"否"}}),n("Input",{ref:"qq",attrs:{msg:"QQ",len:"11"}}),n("Input",{ref:"email",attrs:{msg:"邮箱",len:"25"}}),n("Textarea",{ref:"personal",attrs:{msg:"个人简历"}}),n("Testnum",{ref:"testnum",attrs:{msg2:"验证码",msg1:"手机号"}}),t.show?n("div",{staticClass:"submit",on:{click:t.send}},[t._v("提交")]):t._e(),t.show?t._e():n("div",{staticClass:"nosend"},[n("div",{staticClass:"loading"})])],1)])])},u=[],c=(n("7f7f"),n("cadf"),n("551c"),n("097d"),n("1270")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox"},[n("div",{staticClass:"msg"},[t._v(t._s(t.msg))]),n("div",{staticClass:"check"},[n("div",{staticClass:"left",class:t.change?"orange":"white",on:{click:t.changecolor}},[t._v(t._s(t.left))]),n("div",{staticClass:"right",class:t.change?"white":"orange",on:{click:t.changecolor}},[t._v(t._s(t.right))])])])},l=[],f={name:"Checkbox",props:{msg:String,left:String,right:String},data:function(){return{change:!0,changenum:1}},methods:{changecolor:function(t){"left white"!=t.target.className&&"right white"!=t.target.className||(this.change=!this.change,this.change?this.changenum=1:this.changenum=0)}}},p=f,d=(n("25f6"),n("2877")),h=Object(d["a"])(p,o,l,!1,null,"c03015dc",null);h.options.__file="Checkbox.vue";var m=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"dropdown",on:{click:function(e){t.down=!t.down}}},[n("div",{staticClass:"msg"},[t._v(t._s(t.msg))]),n("div",{staticClass:"box"},[t._v(t._s(t.value)+" "),n("i",{staticClass:"icon-xia iconfont"})])]),n("transition",{attrs:{name:"fade"}},[t.down?n("div",{staticClass:"help",on:{click:t.hide}},[n("ul",{staticClass:"drop",on:{click:t.select}},t._l(t.list,function(e,s){return n("li",{key:s,attrs:{data:s}},[t._v("\r\n           "+t._s(e)+"\r\n            ")])}))]):t._e()])],1)},v=[],x={name:"Dropdown",props:{msg:String,list:Array},data:function(){return{down:!1,value:"请选择",index:""}},methods:{select:function(t){this.value=t.target.innerText,this.index=parseInt(t.target.getAttribute("data"))+1,this.down=!this.down},hide:function(){this.down=!1}},watch:{value:function(t){}}},w=x,_=(n("7b6b"),Object(d["a"])(w,g,v,!1,null,"9855a1d2",null));_.options.__file="Dropdown.vue";var b=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testnum"},[n("div",{staticClass:"tel"},[n("div",{staticClass:"msg1"},[t._v(t._s(t.msg1))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext1,expression:"inputtext1"}],staticClass:"telinput",class:t.warning1?"warn":"",attrs:{value:"",type:"text",placeholder:"请输入"+t.msg1,maxlength:"11"},domProps:{value:t.inputtext1},on:{blur:function(e){return e.preventDefault(),t.test1(e)},input:function(e){e.target.composing||(t.inputtext1=e.target.value)}}})]),n("div",{staticClass:"test"},[n("div",{staticClass:"msg2"},[t._v(t._s(t.msg2))]),n("div",{staticClass:"wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext2,expression:"inputtext2"}],staticClass:"testinput",class:t.warning2?"warn":"",attrs:{value:"",type:"text",placeholder:"请输入"+t.msg2,maxlength:"4"},domProps:{value:t.inputtext2},on:{blur:function(e){return e.preventDefault(),t.test2(e)},input:function(e){e.target.composing||(t.inputtext2=e.target.value)}}}),t.show?n("div",{staticClass:"send",on:{click:t.send}},[t.loading?t._e():n("span",[t._v("获取")]),t.loading?n("div",{staticClass:"loading"}):t._e()]):t._e(),t.show?t._e():n("div",{staticClass:"wait"},[t._v(t._s(t.time)+"s")])])])])},$=[],k=n("2ade"),j={name:"Testnum",props:{msg1:String,msg2:String},data:function(){return{inputtext1:"",inputtext2:"",warning1:!1,warning2:!1,show:!0,loading:!1,time:60}},created:function(){},methods:{settime:function(){var t=this;t.show=!1;var e=window.setInterval(function(){t.time--<=0&&(t.time=60,t.show=!0,window.clearInterval(e))},1e3)},send:function(){var t=this;this.loading||(this.loading=!0,Object(k["b"])("/api/getVerificationCode",{tel:this.inputtext1}).then(function(e){2==e.success?t.settime():alert(e.message),t.loading=!1}).catch(function(e){alert(e),t.loading=!1}))},test1:function(){""==this.inputtext1&&(this.warning1=!0)},test2:function(){""==this.inputtext2&&(this.warning2=!0)}},watch:{inputtext1:function(t){""!=t&&(this.warning1=!1)},inputtext2:function(t){""!=t&&(this.warning2=!1)}}},D=j,I=(n("f73c"),Object(d["a"])(D,C,$,!1,null,"5acd61b4",null));I.options.__file="Testnum.vue";var O=I.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textarea"},[n("div",{staticClass:"msg"},[t._v(t._s(t.msg))]),n("div",{staticClass:"wrap"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputtext,expression:"inputtext"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.inputtext},on:{input:function(e){e.target.composing||(t.inputtext=e.target.value)}}})])])},y=[],T={name:"Textarea",props:{msg:String},data:function(){return{inputtext:""}}},q=T,E=(n("8f16"),Object(d["a"])(q,S,y,!1,null,"e1d2544e",null));E.options.__file="Textarea.vue";var N=E.exports,F={components:{Input:c["a"],Checkbox:m,Dropdown:b,Testnum:O,Textarea:N},data:function(){return{show:!0}},methods:{err:function(t){var e=[];for(var n in t){if(""===t[n]||"请选择"===t[n]){if("志愿2"==n||"志愿3"==n)continue;return alert(n+"不能为空，请重新输入"),!1}"志愿"==n.substring(0,2)&&e.push(t[n])}return!(e.length>1)||e[0]!=e[1]&&e[0]!=e[2]&&e[1]!=e[2]||(alert("志愿不能重复，请重新输入"),!1)},send:function(){var t=this,e={"姓名":this.$refs.name.inputtext,"性别":this.$refs.sex.changenum,"学号":this.$refs.number.inputtext,"学院":this.$refs.college.value,"志愿1":this.$refs.will1.index,"志愿2":this.$refs.will2.index,"志愿3":this.$refs.will3.index,"是否调剂":this.$refs.adjust.changenum,qq:this.$refs.qq.inputtext,"邮箱":this.$refs.email.inputtext,"个人简历":this.$refs.personal.inputtext,"手机号码":this.$refs.testnum.inputtext1,"验证码":this.$refs.testnum.inputtext2};this.err(e)&&(this.show=!1,Object(k["b"])("/api/apply",{name:this.$refs.name.inputtext,QQ:this.$refs.qq.inputtext,email:this.$refs.email.inputtext,stu_id:this.$refs.number.inputtext,resume:this.$refs.personal.inputtext,tel:this.$refs.testnum.inputtext1,code:this.$refs.testnum.inputtext2,sex:this.$refs.sex.changenum,isAdjust:this.$refs.adjust.changenum,asp1:this.$refs.will1.index,asp2:this.$refs.will2.index,asp3:this.$refs.will3.index,academy:this.$refs.college.value}).then(function(e){2==e.success?t.$router.push({path:"/envelope"}):alert(e.message),t.show=!0}))}}},P=F,Q=(n("335f"),Object(d["a"])(P,r,u,!1,null,"1c9a6d96",null));Q.options.__file="Form.vue";var A=Q.exports,M={components:{Man:a["a"],Form:A}},J=M,V=Object(d["a"])(J,s,i,!1,null,null,null);V.options.__file="Sign_up.vue";e["default"]=V.exports},f73c:function(t,e,n){"use strict";var s=n("5e73"),i=n.n(s);i.a}}]);