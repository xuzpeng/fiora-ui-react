(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[5,15],{109:function(e,t,n){var a=n(9),r=n(125);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};a(r,c);e.exports=r.locals||{}},113:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=n(116),s=n(112),i=n(14),d=(n(117),n(118),n(119),n(114),function(){return(d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t=e.children,n=e.title,c=e.className,x=e.code,h=m(e,["children","title","className","code"]),p=Object(a.useState)(!1),g=p[0],y=p[1];return r.a.createElement("div",d({className:o()("code-card",c)},h),r.a.createElement("h1",null,n),r.a.createElement("div",{className:"code-card_demo"},t),r.a.createElement(i.m,{className:"icon-code-toggle",type:"code",onClick:function(){return y(!g)}}),r.a.createElement(s.a,{in:g,timeout:300,classNames:"code",unmountOnExit:!0},r.a.createElement(l.UnControlled,{className:"code-mirror_container",value:x,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,t,n){console.log(n)}})))}},114:function(e,t,n){var a=n(9),r=n(115);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};a(r,c);e.exports=r.locals||{}},115:function(e,t,n){(t=n(10)(!1)).push([e.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.code-card{width:80%;border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container .CodeMirror{height:auto}.code-enter{opacity:0;transform:scaleY(0);transform-origin:top left}.code-enter-active{opacity:1;transform:scaleY(1);transition:opacity 300ms, transform 300ms}.code-exit{opacity:1}.code-exit-active{opacity:0;transform:scaleY(0.9);transform-origin:top left;transition:opacity 300ms, transform 300ms}\n",""]),e.exports=t},125:function(e,t,n){(t=n(10)(!1)).push([e.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.example-layout .text-center-center{display:flex;align-items:center;justify-content:center;color:#fff}.example-layout .light{background-color:#7dbcea}.example-layout .dark{background-color:#1890ff}.example-layout .light-dark{background-color:#3ba0e9}\n",""]),e.exports=t},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(113),o=n(14);n(109);t.default=function(){return r.a.createElement("div",{className:"example-layout"},r.a.createElement(c.a,{title:"示例1",code:"\n        <Layout>\n          <Header\n            className='text-center-center light'\n            style={{ height: '60px' }}\n          >Header</Header>\n          <Content\n            className='text-center-center dark'\n            style={{ height: '120px' }}\n          >Content</Content>\n          <Footer\n            className='text-center-center light'\n            style={{ height: '60px' }}\n          >Footer</Footer>\n        </Layout>\n      "},r.a.createElement(o.n,{className:"fill-width"},r.a.createElement(o.l,{className:"text-center-center light",style:{height:"60px"}},"Header"),r.a.createElement(o.i,{className:"text-center-center dark",style:{height:"120px"}},"Content"),r.a.createElement(o.k,{className:"text-center-center light",style:{height:"60px"}},"Footer"))),r.a.createElement(c.a,{title:"示例2",code:"\n        <Layout>\n          <Header\n            style={{ height: '60px' }}\n            className='text-center-center light'\n          >Header</Header>\n          <Layout style={{ height: '120px' }}>\n            <Aside\n              className='text-center-center light-dark'\n            >Aside</Aside>\n            <Content\n              className='text-center-center dark'\n            >Content</Content>\n          </Layout>\n          <Footer\n            className='text-center-center light'\n            style={{ height: '60px' }}\n          >Footer</Footer>\n        </Layout>\n      ",style:{marginTop:30}},r.a.createElement(o.n,{className:"fill-width"},r.a.createElement(o.l,{style:{height:"60px"},className:"text-center-center light"},"Header"),r.a.createElement(o.n,{style:{height:"120px"}},r.a.createElement(o.b,{className:"text-center-center light-dark"},"Aside"),r.a.createElement(o.i,{className:"text-center-center dark"},"Content")),r.a.createElement(o.k,{className:"text-center-center light",style:{height:"60px"}},"Footer"))),r.a.createElement(c.a,{title:"示例3",code:"\n        <Layout>\n          <Header\n            style={{ height: '60px' }}\n            className='text-center-center light'\n          >Header</Header>\n          <Layout style={{ height: '120px' }}>\n            <Content\n              className='text-center-center dark'\n            >Content</Content>\n            <Aside\n              className='text-center-center light-dark'\n            >Aside</Aside>\n          </Layout>\n          <Footer\n            style={{ height: '60px' }}\n            className='text-center-center light'\n          >Footer</Footer>\n        </Layout>\n      ",style:{marginTop:30}},r.a.createElement(o.n,{className:"fill-width"},r.a.createElement(o.l,{style:{height:"60px"},className:"text-center-center light"},"Header"),r.a.createElement(o.n,{style:{height:"120px"}},r.a.createElement(o.i,{className:"text-center-center dark"},"Content"),r.a.createElement(o.b,{className:"text-center-center light-dark"},"Aside")),r.a.createElement(o.k,{style:{height:"60px"},className:"text-center-center light"},"Footer"))),r.a.createElement(c.a,{title:"示例4",code:"\n        <Layout style={{ height: '240px' }}>\n          <Aside className='text-center-center light-dark'>Aside</Aside>\n          <Layout>\n            <Header style={{ height: '60px' }} className='text-center-center light'>Header</Header>\n            <Content style={{ height: '120px' }} className='text-center-center dark'>Content</Content>\n            <Footer style={{ height: '60px' }} className='text-center-center light'>Footer</Footer>\n          </Layout>\n        </Layout>\n      ",style:{marginTop:30}},r.a.createElement(o.n,{style:{height:"240px"},className:"fill-width"},r.a.createElement(o.b,{className:"text-center-center light-dark"},"Aside"),r.a.createElement(o.n,null,r.a.createElement(o.l,{style:{height:"60px"},className:"text-center-center light"},"Header"),r.a.createElement(o.i,{style:{height:"120px"},className:"text-center-center dark"},"Content"),r.a.createElement(o.k,{style:{height:"60px"},className:"text-center-center light"},"Footer")))))}}}]);