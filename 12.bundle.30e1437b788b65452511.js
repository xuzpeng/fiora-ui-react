(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[12],{125:function(t,e,i){"use strict";var n=i(0),r=i.n(n),o=i(4),a=i.n(o),s=i(128),c=i(124),l=i(14),p=(i(129),i(130),i(131),i(126),function(){return(p=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}),d=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]])}return i};e.a=function(t){var e=t.children,i=t.title,o=t.className,m=t.code,u=d(t,["children","title","className","code"]),f=Object(n.useState)(!1),g=f[0],h=f[1];return r.a.createElement("div",p({className:a()("code-card",o)},u),r.a.createElement("h1",null,i),r.a.createElement("div",{className:"code-card_demo"},e),r.a.createElement(l.m,{className:"icon-code-toggle",type:"code",onClick:function(){return h(!g)}}),r.a.createElement(c.a,{in:g,timeout:300,classNames:"code",unmountOnExit:!0},r.a.createElement(s.UnControlled,{className:"code-mirror_container",value:m,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(t,e,i){console.log(i)}})))}},126:function(t,e,i){var n=i(7),r=i(127);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);t.exports=r.locals||{}},127:function(t,e,i){(e=i(8)(!1)).push([t.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.code-card{width:80%;border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container .CodeMirror{z-index:0;height:auto}.code-enter{opacity:0;transform:scaleY(0);transform-origin:top left}.code-enter-active{opacity:1;transform:scaleY(1);transition:opacity 300ms, transform 300ms}.code-exit{opacity:1}.code-exit-active{opacity:0;transform:scaleY(0.9);transform-origin:top left;transition:opacity 300ms, transform 300ms}\n",""]),t.exports=e},28:function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n),o=i(125),a=i(34);e.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{title:"基本用法",code:'\n\t\t\t\t<Steps current={1}>\n\t\t\t\t\t<StepItem title="Finished" description="This is a description." />\n\t\t\t\t\t<StepItem title="In Progress" subTitle="Left 00:00:08" description="This is a description." />\n\t\t\t\t\t<StepItem title="Waiting" description="This is a description." />\n\t\t\t\t</Steps>\n\t\n\t\t\t\t<Steps direction="vertical" current={1} style={{ marginTop: 20 }}>\n\t\t\t\t\t<StepItem title="Finished" description="This is a description." />\n\t\t\t\t\t<StepItem title="In Progress" subTitle="Left 00:00:08" description="This is a description." />\n\t\t\t\t\t<StepItem title="Waiting" description="This is a description." />\n\t\t\t\t</Steps>\n\t\t\t'},r.a.createElement(a.u,{current:1},r.a.createElement(a.t,{title:"Finished",description:"This is a description."}),r.a.createElement(a.t,{title:"In Progress",subTitle:"Left 00:00:08",description:"This is a description."}),r.a.createElement(a.t,{title:"Waiting",description:"This is a description."})),r.a.createElement(a.u,{direction:"vertical",current:1,style:{marginTop:20}},r.a.createElement(a.t,{title:"Finished",description:"This is a description."}),r.a.createElement(a.t,{title:"In Progress",subTitle:"Left 00:00:08",description:"This is a description."}),r.a.createElement(a.t,{title:"Waiting",description:"This is a description."}))))}}}]);