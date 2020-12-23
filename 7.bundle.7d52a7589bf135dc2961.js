(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[7],{133:function(t,n,e){"use strict";var o=e(0),l=e.n(o),a=e(2),i=e.n(a),r=e(136),c=e(132),s=e(14),u=(e(137),e(138),e(139),e(134),function(){return(u=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var l in n=arguments[e])Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l]);return t}).apply(this,arguments)}),p=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(e[o[l]]=t[o[l]])}return e};n.a=function(t){var n=t.children,e=t.title,a=t.className,g=t.code,m=p(t,["children","title","className","code"]),d=Object(o.useState)(!1),f=d[0],h=d[1],x=Object(o.useRef)(null);return l.a.createElement("div",u({className:i()("code-card",a)},m),l.a.createElement("h1",null,e),l.a.createElement("div",{className:"code-card_demo"},n),l.a.createElement(s.l,{className:"icon-code-toggle",type:"code",onClick:function(){return h(!f)}}),l.a.createElement(c.a,{in:f,timeout:600,classNames:"code",unmountOnExit:!0,onEnter:function(t){var n=t.getBoundingClientRect().height;t.style.height="0px",t.getBoundingClientRect(),t.style.height=n+"px"},onExit:function(t){t.style.height="0px"}},l.a.createElement(r.UnControlled,{ref:x,className:"code-mirror_container",value:g,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(t,n,e){console.log(e)}})))}},134:function(t,n,e){var o=e(5),l=e(135);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[t.i,l,""]]);var a={insert:"head",singleton:!1};o(l,a);t.exports=l.locals||{}},135:function(t,n,e){(n=e(6)(!1)).push([t.i,".code-card{border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container{transition:height 600ms;overflow:hidden}.code-mirror_container .CodeMirror{z-index:0;height:auto}\n",""]),t.exports=n},20:function(t,n,e){"use strict";e.r(n);var o=e(0),l=e.n(o),a=e(133),i=e(14);n.default=function(){var t=Object(o.useState)(!1),n=t[0],e=t[1],r=function(){return e(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.a,{title:"基本用法",code:"\nconst [v, setV] = useState(false);\nconst onCloseV = () => setV(false);\n<Button onClick={() => setV(true)}>打开dialog</Button>\n<Dialog\n\ttitle='Dialog 对话框'\n\tvisible={v}\n\tonClose={onCloseV}\n\tbuttons={[\n\t\t<Button onClick={onCloseV}>取消</Button>,\n\t\t<Button type='primary' onClick={onCloseV}>确认</Button>,\n\t]}\n>\n\t<span>这是一段信息</span>\n</Dialog>\n\t\t\t",style:{marginBottom:"20px"}},l.a.createElement(i.e,{onClick:function(){return e(!0)}},"打开dialog"),l.a.createElement(i.h,{title:"Dialog 对话框",visible:n,onClose:r,buttons:[l.a.createElement(i.e,{onClick:r},"取消"),l.a.createElement(i.e,{type:"primary",onClick:r},"确认")]},l.a.createElement("span",null,"这是一段信息"))),l.a.createElement(a.a,{title:"编码式弹窗",code:"\nconst onDialogAlert = () => {\n\tDialog.alert({\n\t\ttitle: '标题',\n\t\tcontent: '内容内容内容内容'\n\t}).then(action => console.log(action));\n};\nconst onDialogConfirm = () => {\n\tDialog.confirm({\n\t\ttitle: '标题',\n\t\tcontent: '内容内容内容内容'\n\t}).then(action => console.log(action));\n};\nconst onDialogPrompt = () => {\n\tDialog.prompt({\n\t\ttitle: '标题',\n\t\tcontent: '内容内容内容内容'\n\t}).then(value => console.log(value));\n};\n<Button onClick={onDialogAlert}>Dialog Alert</Button>\n<Button onClick={onDialogConfirm}>Dialog Confirm</Button>\n<Button onClick={onDialogPrompt}>Dialog Prompt</Button>\n\t\t"},l.a.createElement(i.e,{onClick:function(){i.h.alert({title:"标题",content:"内容内容内容内容"}).then((function(t){return console.log(t)}))}},"Dialog Alert"),l.a.createElement(i.e,{onClick:function(){i.h.confirm({title:"标题",content:"内容内容内容内容"}).then((function(t){return console.log(t)}))}},"Dialog Confirm"),l.a.createElement(i.e,{onClick:function(){i.h.prompt({title:"标题",content:"内容内容内容内容"}).then((function(t){return console.log(t)}))}},"Dialog Prompt")))}}}]);